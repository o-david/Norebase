import { useEffect, useState } from "react";
import Loader from "../components/Loader";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  price_usd: string;
  tsupply: string;
}

const Home = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api.coinlore.net/api/tickers/");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCoins(data.data);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);

  const paginatedCoins = coins.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < coins.length)
      setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="overflow-auto text-left justify-start sm:pt-10">
      {error && <div className="text-red-500">{error}</div>}
      {/* Table for Larger Screens */}
      <table className="w-[95%] mx-auto border-collapse border border-gray-200 hidden sm:table">
        <thead>
          <th className="p-4 max-w-[30%] w-[30%]">💰 Coin</th>
          <th className="p-4 max-w-[20%] w-[20%]">📄 Code</th>
          <th className="p-4 max-w-[20%] w-[20%]">😛 Price</th>
          <th className="p-4 max-w-[30%] w-[30%]">📉 Total Supply</th>
        </thead>
        <tbody>
          {paginatedCoins.map((coin, index) => (
            <tr
              key={coin.id}
              className={`text-sm ${
                index % 2 === 0 ? "bg-gray-400" : "bg-white"
              }`}
            >
              <td className="p-4 w-[30%] max-w-[30%]">{coin.name}</td>
              <td className="p-4 max-w-[20%] w-[20%]">{coin.symbol}</td>
              <td className="p-4 w-[20%] max-w-[20%]">${coin.price_usd}</td>
              <td className="p-4 w-[30%] max-w-[30%]">
                {coin.tsupply} {coin.symbol}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Table for Smaller Devices */}
      <div className="sm:hidden w-[95%] mx-auto">
        {paginatedCoins.map((coin, index) => (
          <div
            key={coin.id}
            className={`p-2 ${
              index % 2 === 0 ? "bg-gray-300" : "bg-white"
            } mb-4 w-full rounded-md`}
          >
            <div className="flex justify-start gap-4 text-left">
              <div className="w-1/2">
                <span className="font-bold">💰 Coin:</span>
                <span className="block pl-1">{coin.name}</span>
              </div>
              <div className="w-1/2">
                <span className="font-bold">📜 Code:</span>
                <span className="block pl-1">{coin.symbol}</span>
              </div>
            </div>

            <div className="flex justify-start gap-4 text-left mt-2">
              <div className="w-1/2">
                <span className="font-bold">😛 Price:</span>
                <span className="block pl-1">${coin.price_usd}</span>
              </div>
              <div className="w-1/2">
                <span className="font-bold">📊 Supply:</span>
                <span className="block pl-1">{coin.tsupply}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between w-[95%] mx-auto items-center my-4">
        {currentPage > 1 ? (
          <button
            onClick={handlePrevPage}
            className="p-2 rounded-md hover:ring-2 hover:ring-gray-500"
          >
            &larr; Previous
          </button>
        ) : (
          <span className="w-20"></span> // Empty span for alignment
        )}

        {currentPage * itemsPerPage < coins.length && (
          <button
            onClick={handleNextPage}
            className="p-2 rounded-md hover:ring-2 hover:ring-gray-500"
          >
            Next &rarr;
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
