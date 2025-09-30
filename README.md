# Icon of Change LGB Ghana - NGO Donation Platform

A full-stack web application for Icon of Change LGB Ghana NGO to support global donations through Paystack integration.

## 🌟 Features

- **Modern & Responsive Design**: Beautiful UI built with Vue.js 3, PrimeVue, and Bootstrap 5
- **Secure Payments**: Paystack integration for safe and reliable donations
- **Multiple Donation Types**: Support for Children's Education, Elderly Care, or General donations
- **Anonymous Donations**: Option to donate anonymously
- **Contact Form**: Easy communication channel for volunteers and partners
- **Impact Tracking**: Display real-time statistics and success stories
- **Mobile-Friendly**: Fully responsive design for all devices

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Knex.js** - SQL query builder
- **MySQL** - Database
- **Paystack API** - Payment processing
- **Axios** - HTTP client

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router** - Official routing library
- **PrimeVue** - UI component library
- **Bootstrap 5** - CSS framework
- **AOS** - Animate on scroll library
- **Vite** - Build tool

## 📋 Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- Paystack account (for payment processing)

## 🚀 Installation

### Backend Setup

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create MySQL database:**
```sql
CREATE DATABASE icon_of_change;
```

4. **Configure environment variables:**
   Create a `.env` file in the backend directory:
```env
PORT=3000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=icon_of_change

PAYSTACK_SECRET_KEY=sk_test_your_paystack_secret_key
PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_public_key

FRONTEND_URL=http://localhost:5173
```

5. **Start the backend server:**
```bash
npm run dev
```

The API will run on `http://localhost:3000`

### Frontend Setup

1. **Navigate to frontend directory:**
```bash
cd frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment variables:**
   Create a `.env` file in the frontend directory:
```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_public_key
```

4. **Start the development server:**
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
icon-of-change/
├── backend/
│   ├── server.js              # Main server file
│   ├── package.json           # Backend dependencies
│   └── .env.example           # Environment variables template
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.vue     # Navigation component
    │   │   └── Footer.vue     # Footer component
    │   ├── views/
    │   │   ├── Home.vue       # Home page
    │   │   ├── About.vue      # About page
    │   │   ├── Programs.vue   # Programs page
    │   │   ├── Impact.vue     # Impact page
    │   │   ├── Donate.vue     # Donation page
    │   │   ├── Contact.vue    # Contact page
    │   │   └── DonationSuccess.vue # Success page
    │   ├── router/
    │   │   └── index.js       # Router configuration
    │   ├── App.vue            # Root component
    │   └── main.js            # Application entry point
    ├── index.html             # HTML template
    ├── vite.config.js         # Vite configuration
    ├── package.json           # Frontend dependencies
    └── .env.example           # Environment variables template
```

## 🔌 API Endpoints

### Donations
- `POST /api/donations/initialize` - Initialize payment
- `GET /api/donations/verify/:reference` - Verify payment
- `GET /api/donations/stats` - Get donation statistics
- `GET /api/admin/donations` - Get all donations (admin)

### Contact
- `POST /api/contact` - Submit contact form

### Webhooks
- `POST /api/webhooks/paystack` - Paystack webhook handler

## 💳 Paystack Integration

### Setup Paystack Account

1. Sign up at [paystack.com](https://paystack.com)
2. Get your API keys from the dashboard
3. Add your keys to the `.env` files
4. For production, use live keys (starts with `sk_live_` and `pk_live_`)

### Testing Payments

Use Paystack test cards:
- **Success**: 4084084084084081
- **Insufficient Funds**: 5061020000000000094
- **Invalid CVV**: Use any card with CVV 000

## 🗄️ Database Schema

### donators
- id (INT, PRIMARY KEY)
- name (VARCHAR)
- email (VARCHAR)
- phone (VARCHAR)
- country (VARCHAR)
- created_at, updated_at (TIMESTAMP)

### donations
- id (INT, PRIMARY KEY)
- donator_id (INT, FOREIGN KEY)
- amount (DECIMAL)
- currency (VARCHAR)
- reference (VARCHAR, UNIQUE)
- payment_status (VARCHAR)
- donation_type (VARCHAR)
- message (TEXT)
- is_anonymous (BOOLEAN)
- paystack_reference (VARCHAR)
- paystack_response (TEXT)
- created_at, updated_at (TIMESTAMP)

### contact_messages
- id (INT, PRIMARY KEY)
- name (VARCHAR)
- email (VARCHAR)
- subject (VARCHAR)
- message (TEXT)
- is_read (BOOLEAN)
- created_at, updated_at (TIMESTAMP)

## 🎨 Customization

### Colors
Edit the CSS variables in `frontend/src/App.vue`:
```css
:root {
  --primary-color: #2c5282;
  --secondary-color: #48bb78;
  --accent-color: #ed8936;
}
```

### Images
Replace placeholder images with your own:
- Update image URLs in component files
- Place images in `frontend/public/` directory
- Reference them using `/your-image.jpg`

## 🚢 Production Deployment

### Backend

1. **Set production environment variables**
2. **Use a process manager like PM2:**
```bash
npm install -g pm2
pm2 start server.js --name icon-of-change-api
```

3. **Setup reverse proxy (Nginx)**

### Frontend

1. **Build for production:**
```bash
npm run build
```

2. **Deploy the `dist` folder to your hosting service**

### Recommended Hosting
- **Backend**: Heroku, DigitalOcean, AWS EC2
- **Frontend**: Netlify, Vercel, GitHub Pages
- **Database**: AWS RDS, DigitalOcean Managed Database

## 🔒 Security Considerations

- Never commit `.env` files
- Use HTTPS in production
- Validate all user inputs
- Implement rate limiting
- Use prepared statements (Knex does this)
- Keep dependencies updated
- Set up CORS properly

## 📝 License

This project is created for Icon of Change LGB Ghana.

## 🤝 Support

For support, email info@iconofchange.org or contact through the website.

## 👥 Authors

Developed for Icon of Change LGB Ghana

---

**Made with ❤️ for children and elderly persons in Ghana**