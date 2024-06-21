import SiteConfig from "@/app/config/site";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa6";
import { FaHackerNews } from "react-icons/fa6";

const Footer = () => {
  const nav = SiteConfig.nav;
  return (
    <>
      <div className="mx-auto p-10 max-w-7xl">
        <footer className="footer  text-base-content">
          <nav>
            <h4 className="footer-title">Pages</h4>
            {nav?.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                rel={item.rel}
                className="link link-hover"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <nav>
            <h4 className="footer-title">Links</h4>
            <Link href={SiteConfig.whatsAppAddress} className="link link-hover">
              Support Team
            </Link>
            <Link
              href="https://magnitify.vercel.app/"
              className="link link-hover"
            >
              Magnitify
            </Link>
          </nav>
          <nav>
            <h4 className="footer-title">Social</h4>
            <div className="grid grid-flow-col gap-4">
              <FaGithub className="fill-current" />
              <FaProductHunt className="fill-current" />
              <FaHackerNews className="fill-current" />
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
