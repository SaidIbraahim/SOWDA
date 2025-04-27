import { FaHeart } from 'react-icons/fa';

const DonateButton = () => {
  return (
    <a
      href="https://www.gofundme.com/f/sowda"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-3 rounded-full shadow-lg flex items-center transition-all hover:scale-105"
      aria-label="Donate Now"
    >
      <FaHeart className="mr-2" />
      <span>Donate</span>
    </a>
  );
};

export default DonateButton; 