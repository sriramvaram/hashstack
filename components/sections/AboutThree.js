import Link from 'next/link';
import React from 'react';

const AboutThree = () => {
    return (
        <>
            <section className="about-section-three">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Welcome to tech</span>
                                    <h2>Best IT Technology Services you can Trust</h2>
                                    <h5>The professional approach to technology.</h5>
                                    <div className="text">System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis unde omnis natus error voluptatems accusa.</div>
                                </div>
                                <div className="content-box">
                                    <div className="row">
                                        <div className="about-block-three col-lg-6 col-md-6 col-sm-12">
                                            <h5 className="title"><i className="icon fa fa-arrow-alt-circle-right" /> Cloud Based </h5>
                                            <p className="text">Lorem ipsum dolor sit amet not is consectetur notted</p>
                                        </div>
                                        <div className="about-block-three col-lg-6 col-md-6 col-sm-12">
                                            <h5 className="title"><i className="icon fa fa-arrow-alt-circle-right" /> Full Backup </h5>
                                            <p className="text">Lorem ipsum dolor sit amet not is consectetur notted.</p>
                                        </div>
                                    </div>
                                    <div className="skills">
                                        <div className="skill-item">
                                            <div className="skill-header">
                                                <h6 className="skill-title">Technology</h6>
                                            </div>
                                            <div className="skill-bar">
                                                <div className="bar-inner">
                                                    <div className="bar progress-line" data-width={77} style={{width: `77%`}} >
                                                        <div className="skill-percentage">
                                                            <div className="count-box">
                                                                <span className="count-text" data-speed={3000} data-stop={77}>77</span>%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about-5.jpg" title='Hash Stack' /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about-6.jpg" title='Hash Stack' /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutThree;