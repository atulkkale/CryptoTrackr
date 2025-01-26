# CryptoTrackR

CryptoTrackR is a React-based cryptocurrency tracker built as part of a machine test assignment for my new company. The project uses APIs like Coin Cap 2 and Coin Geko to fetch cryptocurrency data and display it on three different routes: Dashboard, Overview, and History.

## Features

- **Real-time Price Data**: 
  - The Dashboard route shows the latest prices for the selected cryptocurrency in both USD and the selected cryptocurrency.
  - The price is updated via a WebSocket connection, with a background color change every 5 seconds to visually indicate the data is being refreshed.
  - All other data (like market cap, total supply, etc.) is fetched via the Coin Cap 2 and Coin Geko APIs, which also update every 5 seconds on all pages.

- **Charts**: 
  - The Dashboard includes a bar chart showing 24-hour percentage data for all available cryptocurrencies, built using `chart.js`.

- **Overview**: 
  - The Overview route provides details like market cap, total supply, and more, as well as a title and description of the selected cryptocurrency.

- **History**: 
  - The History route shows a table of market data with search and filter functionality built using Material UI.
  
- **Error Boundary**: 
  - The project includes an error boundary to handle errors gracefully.

- **Loading & Error States**: 
  - The project has proper handling for loading and error states to ensure a smooth user experience.

## Routes

- **Dashboard**: Displays real-time price information and a 24-hour chart of cryptocurrency data.
- **Overview**: Displays detailed data like market cap, total supply, and description for the selected cryptocurrency.
- **History**: Displays market data in a table with search and filter options.

## Technologies Used

- React
- WebSocket (for real-time price updates)
- Chart.js (for displaying charts)
- Material UI (for UI components)
- Coin Cap 2 API
- Coin Geko API
- Error Boundary

## Installation

1. Clone the repository:

```bash
git clone https://github.com/atulkkale/CryptoTrackr.git
cd CryptoTrackr
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```bash
http://localhost:5173
```

## Timeframe

This project was completed within 3 days as part of a timed assignment.

## Project Link

Check out the live version of the CryptoTrackR:
[CryptoTrackr on Vercel](https://crypto-currency-trackr.vercel.app/)

## Screenshots

![Screenshot 2025-01-26 030612](https://github.com/user-attachments/assets/76e843e0-adc7-473b-aef5-54d8d9833823)
![Screenshot 2025-01-26 030655](https://github.com/user-attachments/assets/10c5b427-01cf-4e8f-b188-476e204bd14e)
