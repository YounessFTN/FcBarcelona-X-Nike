import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import Stripe from "stripe";

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Fonction pour générer un code d'erreur lisible
const generateErrorCode = (error) => {
  const timestamp = Date.now().toString(36);
  const errorType = error.type?.slice(0, 4) || "GENL";
  return `${errorType}-${timestamp}`.toUpperCase();
};

// Route pour créer une session de paiement
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { items } = req.body;

    // Validation des données d'entrée
    if (!items || !Array.isArray(items) || items.length === 0) {
      const errorCode = generateErrorCode({ type: "ITEM" });
      return res.redirect(
        `http://localhost:5173/error?error_code=${errorCode}&message=Invalid_items_data`
      );
    }

    console.log("Received items:", items);

    // Validation et préparation des lignes d'articles
    const lineItems = items.map((item) => {
      // Vérification des propriétés requises
      if (!item.name || !item.price || !item.quantity) {
        throw new Error("Missing required item properties");
      }

      const unitAmount = Math.round(item.price * 100);

      // Validation du montant
      if (isNaN(unitAmount) || unitAmount <= 0) {
        throw new Error("Invalid price amount");
      }

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image].filter(Boolean), // Filter out undefined images
          },
          unit_amount: unitAmount,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url:
        "http://localhost:5173/confirmation?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: `http://localhost:5173/error?error_code=CNCL-${Date.now().toString(
        36
      )}&message=Payment_cancelled`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);

    // Générer un code d'erreur unique
    const errorCode = generateErrorCode(error);

    // Déterminer le message d'erreur approprié
    let errorMessage = "Unknown_error";
    if (error.type === "StripeCardError") {
      errorMessage = "Card_declined";
    } else if (error.type === "StripeInvalidRequestError") {
      errorMessage = "Invalid_request";
    } else if (error.message === "Missing required item properties") {
      errorMessage = "Invalid_item_data";
    } else if (error.message === "Invalid price amount") {
      errorMessage = "Invalid_price";
    }

    // Rediriger vers la page d'erreur avec les détails
    return res.redirect(
      303,
      `http://localhost:5173/error?error_code=${errorCode}&message=${errorMessage}`
    );
  }
});

// Route pour vérifier le statut d'une session
app.get("/check-session/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.json({ status: session.payment_status });
  } catch (error) {
    console.error("Error checking session:", error);
    const errorCode = generateErrorCode(error);
    res.status(500).json({
      error: "Failed to check session status",
      error_code: errorCode,
    });
  }
});

// Gestionnaire d'erreurs global
app.use((error, req, res, next) => {
  console.error("Global error handler:", error);
  const errorCode = generateErrorCode(error);
  res.redirect(
    `http://localhost:5173/error?error_code=${errorCode}&message=Server_error`
  );
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Error page URL: http://localhost:5173/error`);
});
