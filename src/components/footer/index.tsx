import {
  FacebookIcon,
  Instagram,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="m-4 bg-black text-white p-7 rounded-lg flex items-center flex-col">
      <div className="space-y-5 flex items-center flex-col">
        <div className="flex space-x-2 ">
          <Link href={"#"}>
            <div className="p-2 bg-gray-700 rounded-full ">
              <InstagramIcon className="w-5 h-5" />
            </div>
          </Link>
          <Link href={"#"}>
            <div className="p-2 bg-gray-700 rounded-full ">
              <FacebookIcon className="w-5 h-5" />
            </div>
          </Link>
          <Link href={"#"}>
            <div className="p-2 bg-gray-700 rounded-full ">
              <TwitterIcon className="w-5 h-5" />
            </div>
          </Link>
          <Link href={"#"}>
            <div className="p-2 bg-gray-700 rounded-full ">
              <LinkedinIcon className="w-5 h-5" />
            </div>
          </Link>
        </div>
        <p className="text-xs">&copy; Ciganos Encantados, Inc. 2024.</p>
      </div>
    </section>
  );
};

export default Footer;
