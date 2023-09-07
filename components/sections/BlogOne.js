import Link from 'next/link';
import React from 'react';

const BlogOne = ({ addClass }) => {
    return (
        <>
            <section className={`news-section ${addClass}`}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">from the blog</span>
                        <h2>News &amp; Articles</h2>
                    </div>
                    <div className="row">
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/news-details"><img src="/images/resource/news-1.jpg" title='Hash Stack' /></Link></figure>
                                    <span className="date"><b>28</b> OCT</span>
                                </div>
                                <div className="content-box">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user" /> by Admin</li>
                                        <li><i className="fa fa-tag" /> Technology</li>
                                    </ul>
                                    <h4 className="title"><Link href="/news-details">Professional technology information &amp; solutions are just like…</Link></h4>
                                </div>
                                <div className="bottom-box">
                                    <Link href="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                    <div className="comments"><i className="fa fa-comments" /> 02</div>
                                </div>
                            </div>
                        </div>
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/news-details"><img src="/images/resource/news-details.jpg" title='Hash Stack' /></Link></figure>
                                    <span className="date"><b>28</b> OCT</span>
                                </div>
                                <div className="content-box">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user" /> by Admin</li>
                                        <li><i className="fa fa-tag" /> Technology</li>
                                    </ul>
                                    <h4 className="title"><Link href="/news-details">Professional technology information &amp; solutions are just like…</Link></h4>
                                </div>
                                <div className="bottom-box">
                                    <Link href="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                    <div className="comments"><i className="fa fa-comments" /> 02</div>
                                </div>
                            </div>
                        </div>
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/news-details"><img src="/images/resource/news-3.jpg" title='Hash Stack' /></Link></figure>
                                    <span className="date"><b>28</b> OCT</span>
                                </div>
                                <div className="content-box">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user" /> by Admin</li>
                                        <li><i className="fa fa-tag" /> Technology</li>
                                    </ul>
                                    <h4 className="title"><Link href="/news-details">Professional technology information &amp; solutions are just like…</Link></h4>
                                </div>
                                <div className="bottom-box">
                                    <Link href="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                    <div className="comments"><i className="fa fa-comments" /> 02</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogOne;