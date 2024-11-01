import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../app/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="logo" height={30} width={30} />
        <p
          className={cn("text-lg text-neutral-700 pb-0", headingFont.className)}
        >
          Campero
        </p>
      </div>
    </Link>
  );
};
