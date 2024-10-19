// Import des modules nécessaires
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_YOUR_SECRET_KEY'); // Remplace par ta clé secrète Stripe

// Initialisation de l'application Express
const app = express();
app.use(express.json());
app.use(cors()); // Pour permettre les requêtes venant du frontend

// Endpoint pour créer une session de paiement Stripe
app.post('/create-checkout-session', async (req, res) => {
  const { basket } = req.body; // Récupérer le panier envoyé depuis le frontend

  // Transformer les articles du panier en format que Stripe comprend
  const lineItems = basket.map((item) => ({
    price_data: {
      currency: 'eur', // Devise
      product_data: {
        name: item.name, // Nom du produit
      },
      unit_amount: Math.round(item.price * 100), // Prix en centimes
    },
    quantity: 1, // Quantité (ajuster si nécessaire)
  }));

  try {
    // Créer une session de paiement Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], // Mode de paiement (carte)
      line_items: lineItems, // Les produits de la session
      mode: 'payment', // Mode "payment" pour un paiement unique
      success_url: 'http://localhost:3000/success', // URL en cas de succès
      cancel_url: 'http://localhost:3000/cancel', // URL en cas d'annulation
    });

    // Envoyer l'ID de session au frontend
    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: 'Échec de la création de la session de paiement' });
  }
});

// Lancer le serveur sur le port 4242
app.listen(4242, () => console.log('Le serveur est lancé sur http://localhost:4242'));
