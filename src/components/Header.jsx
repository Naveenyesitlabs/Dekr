"use client";
import Link from "next/link";
import React, { useState } from "react";
import JoinWaitList from "./JoinWaitList";
import Image from "next/image";
import logo from "@/assets/logo.svg";
// import SealCheck from "@/assets/SealCheck.svg";
import discord from "@/assets/DiscordLogo.svg";
import { DiscordLogoIcon, SealCheckIcon } from "@phosphor-icons/react";

const Header = () => {
  const [openJoinModal, setOpenJoinModal] = useState(false);

  return (
    <>
      <header className="main-head">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" href="/">
              <Image src={logo} height={100} width={100} alt="Logo" />
            </Link>
            <button
              className="navbar-toggler navbar-toggler-main"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="stick"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="navbar-inr-wrp ms-auto">
                <Link className="navbar-brand" href="/">
                  <Image src={logo} height={100} width={100} alt="Logo" />
                </Link>

                <ul className="navbar-nav ms-auto">
                  <li>
                    <Link
                      scroll={true}
                      href="#how-dekr-works"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("how-dekr-works")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      How Dekr Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#community"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("community")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Learn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#community"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("community")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Community
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="btn-wrp">
                <a
                  href="#url"
                  data-bs-target="#joinModal"
                  data-bs-toggle="modal"
                  className="hdr-btn waitlist-btn"
                >
                  {/* <Image src={SealCheck} height={0} width={0} alt="icon" />  */}
                  <SealCheckIcon size={24} />
                  Join the Waitlist
                </a>
                <a
                  href="https://discord.com/invite/wQdWAVNzBN"
                  target="_blank"
                  className="hdr-btn discord-btn"
                >
                  {/* <Image src={discord} alt="icon" />  */}
                  <DiscordLogoIcon size={24} />
                  Join the Discord
                </a>
              </div>
            </div>
          </nav>
        </div>
        <button
          className="navbar-toggler"
          id="navoverlay"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
      </header>

      <JoinWaitList openModal={setOpenJoinModal} />
    </>
  );
};

export default Header;
