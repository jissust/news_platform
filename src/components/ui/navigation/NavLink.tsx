"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/noticias") {
      return pathname === `/noticias` || pathname.startsWith(`/noticia/`);
    }
    return pathname === `/${path}`;
  };

  const linkClass = (path: string) =>
    `font-semibold hover:text-gold ${
      isActive(path) ? "text-gold" : "text-white"
    }`;

  return (
    <>
      <Link href={`/opcion-1`} className={linkClass("/opcion-1")}>
        opcion-1
      </Link>
      <Link href={`/opcion-2`} className={linkClass("/opcion-2")}>
        opcion-2
      </Link>
    </>
  );
};
