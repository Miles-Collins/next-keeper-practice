"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div>
      <div
        className="
      flex
      flex-row
      items-center
      "
      >
        <Image
          alt="Logo"
          className="hidden md:block cursor-pointer"
          height={50}
          width={50}
          src={"/images/KeeperLogo.png"}
        />
        <span
          className="
        text-2xl
        "
        >
          eeper
        </span>
      </div>
    </div>
  );
};

export default Logo;
