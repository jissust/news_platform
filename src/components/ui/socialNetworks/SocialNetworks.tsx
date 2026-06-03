import { FaInstagram, FaWhatsapp, FaPhone, FaMailBulk } from "react-icons/fa";

export const SocialNetworks = () => {
  const handleContactClick = (method: string) => {
    console.log(method);
    //sendGTMEvent({ event: "contact_click", method, location: "footer" });
  };

  return (
    <div className="flex gap-4 text-center justify-center">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300 text-xl"
        onClick={() => handleContactClick("instagram")}
      >
        <FaInstagram />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300 text-xl"
        onClick={() => handleContactClick("whatsapp")}
      >
        <FaWhatsapp />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300"
        onClick={() => handleContactClick("phone")}
      >
        <FaPhone />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300 text-xl"
        onClick={() => handleContactClick("email")}
      >
        <FaMailBulk />
      </a>
    </div>
  );
};
