# Crypto Coins Dashboard

This project is a simple crypto dashboard built with React and TypeScript. It displays a list of cryptocurrencies, with information on each coin's name, symbol, price, and supply. The dashboard includes pagination and is responsive, adapting to both larger and smaller screens.

## Features

- **Data Fetching**: Fetches cryptocurrency data from [Coinlore API](https://api.coinlore.net/api/tickers/) on component mount.
- **Pagination**: Supports navigation between pages to view a limited number of coins at a time.
- **Responsive Layout**:
  - A table format for larger screens.
  - A card format for mobile and smaller devices.
  
## Tech Stack

- **React** with **TypeScript**
- **TailwindCSS** for styling
- **Coinlore API** for cryptocurrency data

## Getting Started

### Prerequisites

- **Node.js** (>= 14.0)
- **npm** (>= 6.0) or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate into the project directory:
   ```bash
   cd Norebase
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server:

```bash
npm run dev
```

The application will run on `http://localhost:5173`.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

## Components

- **Home Component**: Fetches and displays cryptocurrency data with pagination.
- **Responsive Design**: The layout automatically adjusts for smaller screens, switching from a table to card view.

## Code Highlights

- **Data Fetching**: The data is fetched from the Coinlore API using the `fetch` API within a `useEffect` hook.
- **Pagination Logic**: The code manages pagination by slicing the `coins` array based on the `currentPage` state.
- **Conditional Rendering**: The layout renders differently on larger screens (`table` layout) and smaller screens (`card` layout) for an optimal user experience.

## Usage

- **Next and Previous Buttons**: Use the buttons to navigate between pages.
- **Responsiveness**: Resize the browser to see the layout switch between table and card formats.

## API Reference

Data is fetched from [Coinlore's Tickers API](https://api.coinlore.net/api/tickers/), which provides the following fields amongs many others:

- **id**: Unique identifier for the coin.
- **name**: Name of the coin.
- **symbol**: Ticker symbol of the coin.
- **price_usd**: Current price in USD.
- **tsupply**: Total supply of the coin.

## Possible Improvements

- **Search & Filtering**: Implement search functionality to filter coins by name or symbol.