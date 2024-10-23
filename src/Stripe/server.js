import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import Stripe from "stripe";

// Charger les variables d'environnement
dotenv.config();

// Vérifier que la clé Stripe est bien chargée
console.log("STRIPE_SECRET_KEY exists:", !!process.env.STRIPE_SECRET_KEY);

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Autorise uniquement votre frontend
    credentials: true,
  })
);
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
    console.log("Received request with items:", items);

    // Validation des données d'entrée
    if (!items || !Array.isArray(items) || items.length === 0) {
      throw new Error("Invalid items data");
    }

    // Filtrer les articles avec une quantité > 0
    const validItems = items.filter((item) => item.quantity > 0);

    if (validItems.length === 0) {
      throw new Error("No valid items in cart");
    }

    // Validation et préparation des lignes d'articles
    const lineItems = validItems.map((item) => {
      if (!item.name || typeof item.price !== "number" || !item.quantity) {
        console.log("Invalid item:", item); // Pour le débogage
        throw new Error(`Invalid item data: ${JSON.stringify(item)}`);
      }

      const unitAmount = Math.round(item.price * 100);

      if (isNaN(unitAmount) || unitAmount <= 0) {
        throw new Error(`Invalid price amount for ${item.name}`);
      }

      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            images: item.image ? [item.image] : [],
          },
          unit_amount: unitAmount,
        },
        quantity: parseInt(item.quantity),
      };
    });

    // Créer la session Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:5173/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:5173/cart`,
    });

    res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Error in create-checkout-session:", error);
    res.status(400).json({
      error: true,
      message: error.message,
      errorCode: generateErrorCode(error),
    });
  }
});

// Route pour vérifier le statut d'une session
app.get("/check-session/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    console.log("Checking session:", sessionId);

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.status(200).json({
      status: session.payment_status,
      customer_email: session.customer_details?.email,
    });
  } catch (error) {
    console.error("Error checking session:", error);
    res.status(500).json({
      error: true,
      message: "Failed to check session status",
      errorCode: generateErrorCode(error),
    });
  }
});

// Route de test pour vérifier que le serveur fonctionne
app.get("/test", (req, res) => {
  res.status(200).json({ message: "Server is running correctly" });
});

// Gestionnaire d'erreurs global
app.use((error, req, res, next) => {
  console.error("Global error handler:", error);
  const errorCode = generateErrorCode(error);
  res.status(500).json({
    error: true,
    message: "Internal server error",
    errorCode: errorCode,
  });
});

// Démarrage du serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Frontend URL: http://localhost:5173`);
  console.log(`Server is ready to handle Stripe payments`);
});

// Gestion des erreurs non capturées
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  // En production, vous voudrez peut-être arrêter proprement le serveur ici
  // process.exit(1);
});
