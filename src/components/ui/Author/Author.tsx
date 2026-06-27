import Image from "next/image";
import { AuthorType } from "@/types/author";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin  
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

type AuthorTypesProps = {
  author: AuthorType;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const Author = ({ author: author }: AuthorTypesProps) => {
  const rawUrl = author?.image?.url;
  const imageUrl = rawUrl
    ? rawUrl.startsWith("http")
      ? rawUrl
      : `${API_URL}${rawUrl}`
    : "/images/logo.png";

  return (
    <div className="flex items-center gap-4 w-full">
      {/* Columna imagen */}
      <div className="shrink-0">
        <Image
          src={imageUrl}
          alt={author.name}
          width={80}
          height={80}
          priority
          unoptimized
          className="rounded-full object-cover w-[80px] h-[80px]"
        />
      </div>

      {/* Columna contenido */}
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-xs italic text-gray-400">Publicado por:</span>

        <h2
          className="
          font-bold
          text-xl
          sm:text-2xl
          md:text-3xl
          truncate
        "
        >
          {author.name}
        </h2>

        <div className="flex gap-3 mt-2 flex-wrap">
          {/* Iconos redes */}
          <div><FaFacebook /></div>
          <div><FaInstagram /></div>
          <div><FaTiktok  /></div>
          <div><FaYoutube /></div>
          <div><FaLinkedin  /></div>
          <div><BsTwitterX /></div>
        </div>
      </div>
    </div>
  );
};
