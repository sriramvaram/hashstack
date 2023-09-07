import Link from 'next/link';
import React from 'react';

const AboutFive = () => {
    return (
        <>
            <section className="about-section-five style-two pt-0">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-6 col-md-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Welcome to tech</span>
                                    <h2>Expert of Software Programming</h2>
                                    <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first</div>
                                </div>
                                <ul className="list-style-three">
                                    <li>Nullam vel orci ac</li>
                                    <li>Maecenas id libero</li>
                                    <li>Donec eu arcu non</li>
                                    <li>Proin mattis purus</li>
                                </ul>
                                <div className="btn-box d-flex align-items-center">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                                    <Link href="tel:+91(8800)9806" className="info-btn">
                                        <i className="icon fa fa-phone" />
                                        <small>Call Anytime</small><br /> + 88 ( 9800 ) 6802
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-xl-6 col-lg-6 col-md-12 ">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image overlay-anim wow fadeInUp"><img src="/images/resource/about-11.jpg" title='Hash Stack' /></figure>
                                    <div className="experience">
                                        <strong>26</strong>
                                        <div className="text">Years <br />Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutFive;