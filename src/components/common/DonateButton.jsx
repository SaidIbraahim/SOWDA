import { FaHeart } from 'react-icons/fa';

// Donate button component with GoFundMe link
const DonateButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href="https://gofund.me/32716c10"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
      >
        <FaHeart className="mr-2" />
        <span>Donate Now</span>
      </a>
    </div>
  );
};

export default DonateButton; 