// "use client";

// import JoinWaitList from "@/components/JoinWaitList";
// import Image from "next/image";
// import Link from "next/link";
// import { DiscordLogoIcon, SealCheckIcon, ShareFat } from "@phosphor-icons/react";

// export default function Home() {
//   return (
//     <>
//       <div className="hero-sec has-texture">
//         <div className="texture circle-texture">
//           <Image
//             src="/images/circle-tecture.png"
//             alt="Circle texture"
//             width={500}
//             height={300}
//             unoptimized
//           />
//         </div>
//         <div className="container">
//           <div className="hero-inr row">
//             <div className="hero-heading">
//               <Image
//                 src="/images/vector.png"
//                 alt="home-screen"
//                 width={100}
//                 height={100}
//                 unoptimized
//               />
//               <h1>
//                 Thank you for joining <br /> Dekr!
//               </h1>
//             </div>
//           </div>
//           <div className="btn-wrp">
//             <a
//               href="#url"
//               data-bs-target="#joinModal"
//               data-bs-toggle="modal"
//               className="hdr-btn waitlist-btn"
//             >
//               <ShareFat size={24} />
//               Share with friends
//             </a>
//             <a
//               href="https://discord.com/invite/wQdWAVNzBN"
//               target="_blank"
//               className="hdr-btn discord-btn"
//             >
//               <DiscordLogoIcon size={24} />
//               Join the Discord
//             </a>
//           </div>
//         </div>
//       </div>

//       <JoinWaitList />
//     </>
//   );
// }

"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import JoinWaitList from "@/components/JoinWaitList";
import Image from "next/image";
import Link from "next/link";
import {
  DiscordLogoIcon,
  SealCheckIcon,
  ShareFat,
} from "@phosphor-icons/react";

export default function Home() {
  const router = useRouter();
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Join me on Dekr!",
          text: "Check out Dekr – the smarter, simpler way to invest. Join the waitlist here:",
          url: "https://dekr.io/",
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Sharing is not supported on this device. Copy the URL manually.");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("https://dekr.io/");
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // cleanup
  }, [router]);
  return (
    <>
      <div className="hero-sec has-texture thank-you-page">
        <div className="texture circle-texture">
          <Image
            src="/images/circle-tecture.png"
            alt="Circle texture"
            width={500}
            height={300}
            unoptimized
          />
        </div>
        <div className="container">
          <div className="hero-inr row">
            <div className="hero-heading">
              <Image
                src="/images/vector.png"
                alt="home-screen"
                width={100}
                height={100}
                unoptimized
              />
              <h1>
                Thank you for joining <br /> Dekr!
              </h1>
            </div>
          </div>

          {/* === New Section Starts Here === */}
          <div
            className="thank-you-text"
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "450px",
              flexDirection: "column",
            }}
          >
            <p>
              You’re officially on the waitlist for the smarter, simpler way to
              invest.
            </p>
            <p>While you’re here, here’s what to expect next:</p>

            <ul className="thank-you-list" style={{ marginLeft: "30px" }}>
              <li>
                <SealCheckIcon size={35} weight="light" />
                <span>
                  PRIORITY ACCESS → YOU’LL BE THE FIRST TO KNOW WHEN DEKR
                  LAUNCHES.
                </span>
              </li>
              <li>
                <SealCheckIcon size={35} weight="light" />
                <span>
                  INSIDER UPDATES → GET SNEAK PEEKS, TIPS, AND EARLY DEMOS.
                </span>
              </li>
              <li>
                <SealCheckIcon size={35} weight="light" />
                <span>
                  EXCLUSIVE PERKS → FOUNDING MEMBERS GET BONUSES WE’LL NEVER
                  OFFER AGAIN.
                </span>
              </li>
            </ul>

            <p>
              In the meantime, keep an eye on your inbox—your welcome email is
              already on the way.
            </p>
            <p>
              And if you want to help shape the future of investing, share Dekr
              with a friend and climb the waitlist faster.
            </p>
          </div>
          {/* === New Section Ends Here === */}
        </div>
        <div
          className="btn-wrp"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "80px",
          }}
        >
          <button className="hdr-btn waitlist-btn" onClick={handleShare}>
            <ShareFat size={24} />
            Share with friends
          </button>
          <a
            href="https://discord.com/invite/wQdWAVNzBN"
            target="_blank"
            className="hdr-btn discord-btn"
          >
            <DiscordLogoIcon size={24} />
            Join the Discord
          </a>
        </div>
        <div className="bottom-text">—The Dekr Team</div>
      </div>

      <JoinWaitList />
    </>
  );
}
