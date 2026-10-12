import { FaWhatsapp } from 'react-icons/fa';

const PHONE = "919861573263";
const MESSAGE = "Hi Pravat, I visited your portfolio and wanted to connect with you!"

const WhatsApp = () => {
  const link = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-6 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsApp;