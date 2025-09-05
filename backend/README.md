# Deal Dig Food - Backend API

A Node.js/Express backend API for the Deal Dig Food application with MongoDB integration.

## Features

- RESTful API endpoints for restaurants, cuisines, and daily deals
- MongoDB integration with Mongoose ODM
- TypeScript support
- Error handling middleware
- CORS enabled for frontend integration
- Data seeding script

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd deal-dig-food/backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Update the `.env` file with your MongoDB connection string:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/deal-dig-food
NODE_ENV=development
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

### Seed Database
To populate the database with sample data:
```bash
npm run seed
```

## API Endpoints

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get restaurant by ID
- `GET /api/restaurants/category/:category` - Get restaurants by category
- `GET /api/restaurants/search?q=query` - Search restaurants

### Cuisines
- `GET /api/cuisines` - Get all cuisines

### Daily Deals
- `GET /api/daily-deals` - Get all daily deals

### Health Check
- `GET /api/health` - API health check

## Project Structure

```
src/
├── config/
│   └── database.ts          # MongoDB connection
├── controllers/
│   ├── restaurantController.ts
│   ├── cuisineController.ts
│   └── dailyDealController.ts
├── middleware/
│   └── errorHandler.ts      # Error handling middleware
├── models/
│   ├── Restaurant.ts        # Restaurant schema
│   ├── Cuisine.ts          # Cuisine schema
│   └── DailyDeal.ts        # Daily deal schema
├── routes/
│   ├── restaurants.ts       # Restaurant routes
│   ├── cuisines.ts         # Cuisine routes
│   ├── dailyDeals.ts       # Daily deal routes
│   └── index.ts            # Main router
├── scripts/
│   └── seedData.ts         # Database seeding script
└── server.ts               # Main server file
```

## Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Environment (development/production)

## Scripts

- `npm run dev` - Start development server with nodemon
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run seed` - Seed database with sample data