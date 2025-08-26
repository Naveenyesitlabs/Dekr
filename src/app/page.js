"use client";

import Community from "@/components/Community";
import HowDekrWorks from "@/components/HowDekrWorks";
import JoinWaitList from "@/components/JoinWaitList";
import Image from "next/image";
// import circleTexture from "@/assets/circle-tecture.png";
// import OvalImages from "@/assets/oval-texture.png";
// import homeScreen from "@/assets/home-screen.png";
// import loadScreen from "@/assets/load-screen.png";
// import discoverScreen from "@/assets/discover-screen.png";
// import coachScreen from "@/assets/coach-screen.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero-sec has-texture">
        <div className="texture circle-texture">
          {/* <Image src={circleTexture} alt="Texture Image" /> */}
          <Image src="/images/circle-tecture.png" alt="Circle texture" width={500} height={300} unoptimized />
        </div>
        <div className="container">
          <div className="hero-inr row">
            <div className="hero-heading">
              <h1>Stack the Future in <br /> Your Favor with Dekr.</h1>
            </div>
            <div className="hero-body">
              <div className="hero-images">
                {/* <div className="hero-images-dek">
                  <Image src="/images/banner-dek.svg" alt="home-screens" width={500} height={300} unoptimized />
                </div> */}
                <div className="hero-img-single">
                  {/* <Image src={homeScreen} alt="Mobile Screen Preview" /> */}
                  <Image src="/images/home-screen.png" alt="home-screen" width={500} height={300} unoptimized />
                </div>
                <div className="hero-img-single">
                  {/* <Image src={loadScreen} alt="Mobile Screen Preview" /> */}
                  <Image src="/images/load-screen.png" alt="load-screen" width={500} height={300} unoptimized />
                </div>
                <div className="hero-img-single">
                  {/* <Image src={discoverScreen} alt="Mobile Screen Preview" /> */}
                  <Image src="/images/discover-screen.png" alt="discover-screen" width={500} height={300} unoptimized />
                </div>
                <div className="hero-img-single">
                  {/* <Image src={coachScreen} alt="Mobile Screen Preview" /> */}
                  <Image src="/images/coach-screen.png" alt="coach-screen" width={500} height={300} unoptimized />
                </div>
              </div>

              <div className="hero-content">
                <p>
                  Dekr combines real-time market signals with interactive
                  financial education and an AI chat coach to help you invest
                  confidently—even if you&#39;re just starting out.
                </p>

                <Link
                  href="#url"
                  className="cmn-btn"
                  data-bs-target="#joinModal"
                  data-bs-toggle="modal"
                >
                  Join the Waitlist
                </Link>
                <p className="hero-content-btm-txt -d-flex">
                  or
                  <Link
                    href="https://discord.com/invite/wQdWAVNzBN"
                    target="_blank"
                  >
                    Join our Discord
                  </Link>
                  to help shape the future of investing together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Goals Section Begin --> */}
      <div className="goals-how-wrap">
        <div className="goals-sec has-texture">
          <div className="texture oval-texture">
            {/* <Image src={OvalImages} alt="Texture Oval" /> */}
            <Image src="/images/oval-texture.png" alt="circle-tecture" width={500} height={300} unoptimized />
          </div>
          <div className="container">
            <div className="goals-inr">
              <div className="row">
                <div className="col-lg-6">
                  <div className="gaols-left">
                    <div className="sec-head mb-0">
                      <h2>Hit Your Real-Life Goals</h2>
                      <p>If your money’s just sitting, it’s not growing.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="goals-right">
                    <h3>
                      Smart investing turns “maybe someday” into “definitely
                      happening”:
                    </h3>
                    <div className="goals-list">
                      <ul>
                        <li>Save for a down payment</li>
                        <li>Take that dream vacation</li>
                        <li>Build a nest egg that actually matters</li>
                        <li>Fund your kid’s college dreams</li>
                        <li>Retire the way you want</li>
                      </ul>
                    </div>
                    <p>
                      With Dekr, you’re not just throwing darts—you’re taking
                      shots with a coach who knows where the target is.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- End Of Goals Section --> */}

        <HowDekrWorks />
      </div>
      {/* <!-- Performance Section Begin --> */}

      <div className="performance-sec cmn-100">
        <div className="container">
          <div className="performance-inr">
            <div className="sec-head head-warm-pink text-center mb-4">
              <h2 className="h3-title">Momentum Model Performance</h2>
              <p>
                Smart investing isn&#39;t luck—it&#39;s strategy. Here&#39;s the proof:
              </p>
            </div>
            <div className="performance-table">
              <table>
                <thead>
                  <tr>
                    <th>Strategy</th>
                    <th>5-Year Return</th>
                    <th>1-Year Return</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>NASDAQ-100</p> <p>Buy and Hold (QQQ)</p>
                    </td>
                    <td>+154%</td>
                    <td>+25%</td>
                  </tr>
                  <tr>
                    <td>Dekr Momentum Model</td>
                    <td>+200%</td>
                    <td>+35%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="performance-sec-notes">
              <p>
                That&#39;s nearly $5,000 more—simply by following smarter
                signals.
              </p>
              <p className="head-para">
                Lesson: Catch the right trends, and you ride higher.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- End Of Performance Section --> */}

      <Community />
      <JoinWaitList />
    </>
  );
}

// "use client";

// import Community from "@/components/Community";
// import HowDekrWorks from "@/components/HowDekrWorks";
// import JoinWaitList from "@/components/JoinWaitList";
// import Image from "next/image";
// import circleTexture from "../assets/circle-tecture.png";
// import OvalImages from "../assets/oval-texture.png";
// import homeScreen from "../assets/home-screen.png";
// import loadScreen from "../assets/load-screen.png";
// import discoverScreen from "../assets/discover-screen.png";
// import coachScreen from "../assets/coach-screen.png";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//       <div className="hero-sec has-texture">
//         <div className="texture circle-texture">
//           <Image src={circleTexture} alt="Texture Image" />
//         </div>
//         <div className="container">
//           <div className="hero-inr row">
//             <div className="hero-heading">
//               <h1>Stack the Future in Your Favor with Dekr.</h1>
//             </div>
//             <div className="hero-body">
//               <div className="hero-images">
//                 <div className="hero-img-single">
//                   <Image src={homeScreen} alt="Mobile Screen Preview" />
//                 </div>
//                 <div className="hero-img-single">
//                   <Image src={loadScreen} alt="Mobile Screen Preview" />
//                 </div>
//                 <div className="hero-img-single">
//                   <Image src={discoverScreen} alt="Mobile Screen Preview" />
//                 </div>
//                 <div className="hero-img-single">
//                   <Image src={coachScreen} alt="Mobile Screen Preview" />
//                 </div>
//               </div>

//               <div className="hero-content">
//                 <p>
//                   Dekr combines real-time market signals with interactive
//                   financial education and an AI chat coach to help you invest
//                   confidently—even if you&#39;re just starting out.
//                 </p>
//                 <Link
//                   href="#url"
//                   className="cmn-btn"
//                   data-bs-target="#joinModal"
//                   data-bs-toggle="modal"
//                 >
//                   Join the Waitlist
//                 </Link>
//                 <p className="hero-content-btm-txt -d-flex">
//                   or
//                   <Link
//                     href="https://discord.com/invite/wQdWAVNzBN"
//                     target="_blank"
//                   >
//                     Join our Discord
//                   </Link>
//                   to help shape the future of investing together.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <!-- Goals Section Begin --> */}

//       <div className="goals-sec has-texture">
//         <div className="texture oval-texture">
//           <Image src={OvalImages} alt="Texture Oval" />
//         </div>
//         <div className="container">
//           <div className="goals-inr">
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="gaols-left">
//                   <div className="sec-head mb-0">
//                     <h2>Hit Your Real-Life Goals</h2>
//                     <p>If your money’s just sitting, it’s not growing.</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="goals-right">
//                   <h3>
//                     Smart investing turns “maybe someday” into “definitely
//                     happening”:
//                   </h3>
//                   <div className="goals-list">
//                     <ul>
//                       <li>Save for a down payment</li>
//                       <li>Take that dream vacation</li>
//                       <li>Build a nest egg that actually matters</li>
//                       <li>Fund your kid’s college dreams</li>
//                       <li>Retire the way you want</li>
//                     </ul>
//                   </div>
//                   <p>
//                     With Dekr, you’re not just throwing darts—you’re taking
//                     shots with a coach who knows where the target is.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <!-- End Of Goals Section --> */}

//       <HowDekrWorks />

//       {/* <!-- Performance Section Begin --> */}

//       <div className="performance-sec cmn-100">
//         <div className="container">
//           <div className="performance-inr">
//             <div className="sec-head head-warm-pink text-center mb-5">
//               <h2 className="h3-title">Momentum Model Performance</h2>
//               <p>
//                 Smart investing isn&#39;t luck—it&#39;s strategy. Here&#39;s the
//                 proof:
//               </p>
//             </div>
//             <div className="performance-table">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Strategy</th>
//                     <th>5-Year Return</th>
//                     <th>1-Year Return</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <p>NASDAQ-100</p> <p>Buy and Hold (QQQ)</p>
//                     </td>
//                     <td>+154%</td>
//                     <td>+25%</td>
//                   </tr>
//                   <tr>
//                     <td>Dekr Momentum Model</td>
//                     <td>+200%</td>
//                     <td>+35%</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div className="performance-sec-notes">
//               <p>
//                 That&#39;s nearly $5,000 more—simply by following smarter
//                 signals.
//               </p>
//               <p className="head-para">
//                 Lesson: Catch the right trends, and you ride higher.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <!-- End Of Performance Section --> */}

//       <Community />
//       <JoinWaitList />
//     </>
//   );
// }
