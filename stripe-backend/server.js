// server.js
const fs = require('fs');
const express = require("express");
const cors = require("cors");

// Lecture de la clé API Stripe à partir du fichier KeyApi.txt (vérifie bien l'orthographe du nom du fichier)
let keyapi = fs.readFileSync('KeyApi.txt', 'utf8');
console.log("Clé API récupérée : ", keyapi);  // Vérification de la clé API

const Stripe = require("stripe");
const stripe = Stripe(keyapi);  // Initialisation de Stripe avec la clé API

const app = express();

// Configuration de CORS pour autoriser toutes les origines
app.use(cors({
  origin: '*',  // Autorise toutes les origines
  methods: ['GET', 'POST'],  // Méthodes HTTP autorisées
  allowedHeaders: ['Content-Type'],  // En-têtes spécifiques autorisés
}));

app.use(express.json());  // Pour traiter les requêtes JSON

// Route pour créer une session de paiement Stripe
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { basket } = req.body;  // Récupère les produits envoyés depuis le frontend
    
    // Crée une session de paiement Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: basket.map(product => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: product.name,
          },
          unit_amount: Math.round(product.price * 100),  // Le prix doit être en centimes
        },
        quantity: 1,
      })),
      mode: 'payment',
      success_url: 'http://localhost:5177/success?session_id={CHECKOUT_SESSION_ID}',  // Redirige ici en cas de succès
      cancel_url: 'http://localhost:3000/cancel',    // Redirige ici si l'utilisateur annule
    });

    res.json({ id: session.id });  // Retourne l'ID de la session au frontend
  } catch (error) {
    console.error("Erreur lors de la création de la session:", error);
    res.status(500).send("Erreur lors de la création de la session");  // Gestion des erreurs
  }
});

// Démarre le serveur sur le port 4242
app.listen(4242, () => console.log("Le serveur écoute sur le port 4242"));
