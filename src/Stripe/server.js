import cors from "cors"; // Importer cors pour gérer les requêtes cross-origin
import dotenv from "dotenv"; // Importer dotenv pour gérer les variables d'environnement
import express from "express"; // Importer express
import Stripe from "stripe"; // Importer la bibliothèque Stripe

dotenv.config(); // Charger les variables d'environnement

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Utiliser une variable d'environnement

// Middleware
app.use(cors());
app.use(express.json());

// Route pour créer une session de paiement
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { items } = req.body;

    // Log des données reçues
    console.log("Received items:", items);

    // Préparation des lignes d'articles pour la session de paiement
    const lineItems = items.map((item) => {
      const unitAmount = Math.round(item.price * 100); // Convertir le prix en centimes et s'assurer que c'est un entier

      return {
        price_data: {
          currency: "usd", // Change cela selon ta devise
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: unitAmount, // Utiliser l'entier arrondi
        },
        quantity: item.quantity,
      };
    });

    // Création de la session de paiement
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url:
        "http://localhost:5173/confirmation?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Lancement du serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
