# FcBarcelona X Nike

Iberic X is a fictional e-commerce website that offers exclusive FC Barcelona merchandise in collaboration with Nike. The site is designed to provide a seamless shopping experience, combining performance with urban fashion. Users can browse a wide selection of products, including clothing, footwear, and accessories, tailored for FC Barcelona fans who value style and quality.

## Features

Home Page: A clean and modern landing page with a 3D element to enhance the user experience.

Product Catalog: An "All Products" page displaying the full range of products, with filtering and sorting options based on categories, size, and product popularity.

Product Details: Each product has a detailed page with multiple images, including unavailable size indicators and comprehensive product descriptions.

Shopping Cart: A functional shopping cart that allows users to add, view, and manage items. A modal opens to preview items, with a "View Bag" button for more detailed cart management.

Search Functionality: A search bar integrated into the navigation allows users to quickly find specific products. On mobile, a search icon enhances the experience.

Payment Integration: Simulated payment system using Stripe's test API, allowing users to complete mock transactions.

Order Confirmation: A confirmation page that thanks users after their purchase.

User Login: Secure login system enabling users to create accounts and manage their purchases.

## Technologies Used

React & Vite: For building the user interface with reusable components and ensuring fast build times.

Tailwind CSS: For creating a modern and responsive design.

Stripe API: Integrated to manage the payment system, allowing secure and testable transactions.

## Description

This project uses [Vite.js](https://vitejs.dev/) for a fast startup with a high-performance and modern development environment, as well as [React.js](https://react.dev/) for building dynamic and responsive user interfaces.

## Prerequisites

- [Node.js](https://nodejs.org/) My version (git version 2.39.5 (Apple Git-154))
- [Git](https://git-scm.com/) My version (node version v20.11.0)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/YounessFTN/FcBarcelona-X-Nike.git

   ```

2. Navigate to the project directory :

   ```bash
   cd FcBarcelona-X-Nike
   ```

3. Install the dependencies :
   ```bash
    npm install
   ```
4. Start the project in development mode :
   ```bash
   npm run dev
   ```
5. Open the link :
   http://localhost:5173/

6. Create a .env file to store your stripe keys :
   ```bash
   touch .env
   ```
7. Store your 2 Stripe keys in the created file :

   ```bash
   VITE_STRIPE_PUBLIC_KEY=pk_test_51QCeDaGOVTeqsp6jRz9vrLMxBmbxexeFQ7JZBO3CZGiXdpQDASpT3DHyYaHx3IdG2fQqqW2xJfCx1IvSe6B2ptti005n0OKLyu
   STRIPE_SECRET_KEY=sk_test_51QCeDaGOVTeqsp6jNJum5GKhJfoPIsoAfQhD30gPDS9akkFLUS8haYd8THW0EOnKn53mhShuykQmYwGj1BbokNWZ006WDcopzH
   ```

8. Start Back end :
   ```bash
   npm start
   ```

---

## Key Dependencies

- **[react](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[@stripe/react-stripe-js](https://stripe.com/docs/stripe-js/react)**: React components and hooks for Stripe integration, allowing for easy payment handling.
- **[@stripe/stripe-js](https://stripe.com/docs/js)**: The official Stripe.js library for client-side integrations.
- **[express](https://expressjs.com/)**: A fast, unopinionated, minimalist web framework for Node.js.
- **[vite](https://vitejs.dev/)**: A build tool that focuses on speed and performance.
- **[tailwindcss](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
