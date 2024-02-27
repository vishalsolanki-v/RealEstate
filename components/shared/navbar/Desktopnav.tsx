import Image from "next/image";
import Link from "next/link";
import React from "react";

const Desktopnav = () => {
  return (
    <>
        <div className="md:flex hidden">
          <div className="gap-2 flex-center">
            <Link href="/">
              <h5 className="navbar-button">About Us</h5>
            </Link>
            <Link href="/">
              <h5 className="navbar-button">Property</h5>
            </Link>
            <Link href="/">
              <h5 className="navbar-button">Agent</h5>
            </Link>
            <Link href="/">
              <h5 className="navbar-button">Contact Us</h5>
            </Link>
          </div>
        </div>
    </>
  );
};

export default Desktopnav;
