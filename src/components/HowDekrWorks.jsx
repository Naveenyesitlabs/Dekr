"use client";

import React from "react";
import shareicon from "@/assets/share-icon.svg";
// import whistle from '../assets/whistle-texture.png';
import Image from "next/image";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";

const HowDekrWorks = () => {
  return (
    <>
      <div className="how-works-sec has-texture cmn-100" id="how-dekr-works">
        <div className="texture oval-texture">
          {/* <Image src={OvalImages} alt="Texture Oval" /> */}
          <Image
            src="/images/oval-texture-2.png"
            alt="circle-tecture"
            width={500}
            height={300}
            unoptimized
          />
        </div>
        <div className="texture whistle-texture">
          {/* <Image src={whistle} alt="texture Whistle"/> */}
          <Image
            src="/images/whistle-texture.png"
            alt="Dekr"
            width={500}
            height={300}
            unoptimized
          />
        </div>
        <div className="container">
          <div className="how-works-inr">
            <div className="sec-head head-white text-center">
              <h2>How Dekr Works</h2>
            </div>

            <div className="how-work-cards-row hw-cmn-sec pt-0">
              <div className="row">
                <div className="col-lg-3 ">
                  <div className="how-work-card">
                    <div className="hw-cd-count"></div>
                    <h3>Discover Investment Opportunities</h3>
                    <p>
                      Swipe through curated stock and crypto cards powered by
                      Dekr&#39;s momentum model, showing you what&#39;s heating
                      up (and why).
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 ">
                  <div className="how-work-card">
                    <div className="hw-cd-count"></div>
                    <h3>Learn with Every Interaction</h3>
                    <p>
                      Every card teaches you something—fast facts, plain-English
                      explanations, and smart moves.
                    </p>
                    <p>No MBA required.</p>
                  </div>
                </div>
                <div className="col-lg-3 ">
                  <div className="how-work-card">
                    <div className="hw-cd-count"></div>
                    <h3>Chat with Your AI Financial Coach</h3>
                    <p>
                      Got a question? Confused by a term? Just ask. Our AI coach
                      explains it clearly, instantly, like your smartest friend
                      would.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 ">
                  <div className="how-work-card">
                    <div className="hw-cd-count"></div>
                    <h3>Build and Manage Your Portfolio</h3>
                    <p>
                      Create your personalized deck of investments, track
                      performance, and adjust with confidence.
                    </p>
                    <p>Swipe left on confusion.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hw-work-financial-sec hw-cmn-sec">
              <div className="row">
                <div className="col-lg-4 ">
                  <div className="sec-head head-white">
                    <h2>Why Financial Literacy (and a Good Coach) Matters</h2>
                    <p>
                      Stack the future in your favor with skills that stick.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="cmn-list-wrp">
                    <p>
                      Smart money moves aren&#39;t just about picking the <br />{" "}
                      right stocks. They&#39;re about understanding the game{" "}
                      <br /> you&#39;re playing.
                    </p>
                    <p>
                      Studies show that people with strong financial knowledge
                      are:
                    </p>
                    <div className="cmn-list">
                      <ul>
                        <li>
                          More likely to invest successfully <span>*</span>
                        </li>
                        <li>Better at saving and planning for real goals</li>
                        <li>Less likely to panic when the market wobbles</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="cmn-list-wrp">
                    <p>Yet too many people are left to figure it out alone.</p>
                    <p>
                      Dekr changes that—with built-in education, real <br />{" "}
                      talk, and an AI coach who&#39;s always ready to explain
                      things without the jargon.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hw-work-badhabits-sec hw-cmn-sec">
              <div className="row">
                <div className="col-lg-4 ">
                  <div className="sec-head head-white">
                    <h2>Beat the Bad Habits of Investing</h2>
                    <p>
                      know what you&#39;re doing—and why you&#39;re doing it.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="bad-habits-cards-wrp">
                    <div className="bad-habits-card">
                      <h3>Loss Aversion</h3>
                      <p>Fear of losing = selling too soon. </p>
                      <a
                        href="https://en.wikipedia.org/wiki/Disposition_effect"
                        target="_blank"
                      >
                        Disposition Effect
                        {/* <Image src={shareicon} alt="Icon"/> */}
                        <ArrowSquareOutIcon size={24} />
                      </a>
                    </div>
                    <div className="bad-habits-card">
                      <h3>Overconfidence</h3>
                      <p>Thinking you&#39;re invincible = big mistakes.</p>
                      <a
                        href="https://kossolinger.com/investor-psychology-behavioral-biases-that-can-lead-to-costly-mistakes/"
                        target="_blank"
                      >
                        Behavioral Biases
                        {/* <Image src={shareicon} alt="Icon"/> */}
                        <ArrowSquareOutIcon size={24} />
                      </a>
                    </div>
                    <div className="bad-habits-card">
                      <h3>Herd Mentality</h3>
                      <p>Following the crowd off a cliff.</p>
                      <a
                        href="https://online.mason.wm.edu/blog/behavioral-biases-that-can-impact-investing-decisions"
                        target="_blank"
                      >
                        Behavioral Biases
                        {/* <Image src={shareicon} alt="Icon"/> */}
                        <ArrowSquareOutIcon size={24} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 ">
                  <div className="cmn-para">
                    <p>
                      Investors lose money not just because of bad picks <br />{" "}
                      —but because of bad psychology.
                    </p>
                    <p>Dekr fixes this.</p>
                    <p>
                      Our smart insights, bite-sized lessons, and steady
                      coaching help you invest with *brains over <br />{" "}
                      feelings*.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowDekrWorks;
