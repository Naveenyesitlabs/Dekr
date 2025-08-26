import Image from 'next/image'
import React from 'react'
// import circleTexture from '@/assets/circle-tecture.png';
import circleTexture from '../assets/circle-tecture.png';

const Community = () => {
    return (
        <>
            {/* <!-- Community Section Begin --> */}

            <div className="community-sec" id='community'>
                <div className="community-wrp has-texture">
                    <div className="texture circle-texture">
                        {/* <Image src={circleTexture} alt="Texture" /> */}
                        <Image src="/images/circle-tecture.png" alt="Circle texture" width={500} height={300} unoptimized />
                    </div>
                    <div className="container">
                        <div className="community-inr">
                            <div className="sec-head mb-5">
                                <h2 className="h3-title">Join a Community of Learners</h2>
                            </div>
                            <div className="cmn-list-wrp">
                                <p>Investing shouldn't feel lonely. With Dekr, you join:</p>
                                <div className="cmn-list">
                                    <ul>
                                        <li>A friendly Discord community</li>
                                        <li>A growing network of smart, curious investors</li>
                                        <li>A movement to make investing simple, social, and actually enjoyable</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="head-para">Learn from others. Share wins. Celebrate progress.</p>
                        </div>
                    </div>
                </div>

                <div className="waitlist-wrp">
                    <div className="container">
                        <div className="waitlist-inr">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="waitlist-left">
                                        <div className="sec-head">
                                            <h2>Ready to Stack the <br /> Future in Your Favor?</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="waitlist-right">
                                        <h3>Join the Dekr Waitlist Today</h3>
                                        <div className="cmn-list">
                                            <p>Early users get:</p>
                                            <ul>
                                                <li>Exclusive early access</li>
                                                <li>Founding member perks</li>
                                                <li>A front-row seat to the future of investing and learning</li>
                                            </ul>
                                        </div>
                                        <a href="#url" className="cmn-btn" data-bs-target="#joinModal" data-bs-toggle="modal">Join the Waitlist</a>
                                        <p className='waitlist-para'>Or come say hello in <a href="https://discord.com/invite/wQdWAVNzBN"
                                            target="_blank">Discord</a> —we're building something special.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <!-- End of Community Section --> */}
        </>
    )
}

export default Community
