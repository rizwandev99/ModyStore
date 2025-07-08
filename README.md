# ModyStore: Your Modern E-commerce Solution

## Project Overview

Welcome to ModyStore, a full-featured e-commerce platform designed to offer a seamless shopping experience for customers and robust management tools for administrators. Built with modern web technologies, ModyStore emphasizes performance, scalability, and an intuitive user interface.

This project showcases a comprehensive understanding of full-stack development, including user authentication, product management, shopping cart functionality, secure payment processing, and administrative dashboards.

## Features

- **User Authentication:** Secure sign-up, sign-in, and profile management for customers.
- **Product Catalog:** Browse, search, and view detailed product information.
- **Shopping Cart:** Add, update, and remove items from the cart with real-time price updates.
- **Order Management:** Track order history, view order details, and manage shipping addresses.
- **Secure Payments:** Integrated with Stripe and PayPal for smooth and secure transactions.
- **Admin Dashboard:** Comprehensive panel for managing users, products, and orders.
- **Product Reviews:** Users can leave reviews and ratings for products.
- **Image Uploads:** Utilize Uploadthing for efficient and secure image hosting.
- **Responsive Design:** Optimized for various devices, from desktops to mobile phones.
- **Email Notifications:** Send order confirmations and other important updates via Resend.

## Technologies Used

ModyStore is built using a modern and popular tech stack, demonstrating proficiency in cutting-edge web development:

- **Frontend:**
  - Next.js 14 (React Framework)
  - TypeScript
  - Tailwind CSS (for styling)
  - Shadcn UI (for accessible and customizable UI components)
- **Backend:**
  - Next.js API Routes
  - Prisma (ORM for database interaction)
  - PostgreSQL (Database)
  - NextAuth.js (for authentication)
- **Payments:**
  - Stripe
  - PayPal
- **Image Uploads:**
  - Uploadthing
- **Email Service:**
  - Resend
- **Deployment:**
  - Vercel

## Getting Started

To get a local copy of ModyStore up and running on your machine, follow these simple steps.

### Prerequisites

Ensure you have the following installed:

- Node.js (LTS version recommended)
- npm or Yarn
- Git

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rizwandev99/ModyStore.git
    cd ModyStore
    ```
2.  **Install NPM packages:**
    ```bash
    npm install
    # or yarn install
    ```
3.  **Set up Environment Variables:**
    Create a `.env` file in the root of your project and add the following (replace placeholders with your actual keys):

    ```
    DATABASE_URL="YOUR_POSTGRES_DATABASE_URL"
    NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET_HERE"
    PAYPAL_CLIENT_ID="YOUR_PAYPAL_CLIENT_ID_HERE"
    PAYPAL_APP_SECRET="YOUR_PAYPAL_APP_SECRET_HERE"
    STRIPE_SECRET_KEY="YOUR_STRIPE_SECRET_KEY_HERE"
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="YOUR_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_HERE"
    UPLOADTHING_TOKEN="YOUR_UPLOADTHING_TOKEN_HERE"
    UPLOADTHIUG_SECRET="YOUR_UPLOADTHING_SECRET_HERE"
    UPLOADTHING_APPID="YOUR_UPLOADTHING_APP_ID_HERE"
    RESEND_API_KEY="YOUR_RESEND_API_KEY_HERE"
    NEXT_PUBLIC_APP_NAME="ModyStore"
    ```

4.  **Database Setup:**
    Run Prisma migrations to set up your database schema:
    ```bash
    npx prisma migrate dev --name init
    ```
5.  **Seed Database (Optional):**
    Populate your database with sample data:
    ```bash
    npx prisma db seed
    ```
6.  **Run the development server:**

    ```bash
    npm run dev
    # or yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

ModyStore can be used by both customers for online shopping and by administrators for managing the store's operations.

- **Customers:** Browse products, add to cart, proceed to checkout, manage orders and profile.
- **Admins:** Log in to `/admin` to manage products, view orders, and handle user accounts.

## Roadmap

- Implement advanced search and filtering for products.
- Add discount and coupon code functionality.
- Integrate a robust analytics dashboard for sales insights.
- Expand payment gateway options.

## Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## Contact

Your Name - [rizwandev99@gmail.com](mailto:rizwandev99@gmail.com)

Project Link: [https://github.com/rizwandev99/ModyStore](https://github.com/rizwandev99/ModyStore)

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Stripe Documentation](https://stripe.com/docs)
- [PayPal Developer](https://developer.paypal.com/)
- [Uploadthing Documentation](https://docs.uploadthing.com/)
- [Resend Documentation](https://resend.com/docs)
