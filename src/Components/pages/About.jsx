import React, { Component } from 'react';


class About extends Component {


    render() {


        return (
            <div className="page-content-other">

                <div id="pages_maincontent">

                    <h2 className="page_title">MOBILE PERFECTION</h2>

                    
             <div className="swiper-container-pages">
                        <div className="swiper-wrapper">

                            <div className="swiper-slide">
                                <img src={require("../../Assets/images/page_photo.jpg")} alt="" title="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../../Assets/images/page_photo2.jpg")} alt="" title="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../../Assets/images/page_photo3.jpg")} alt="" title="" />
                            </div>

                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>

                    <div className="page_single layout_fullwidth_padding">

                        <blockquote>
                            This mobile template that can be used to create a mobile website, a mobile web app, or even a native mobile app. The design is using a full width layout that works perfectly on tablets and desktop also. <span>SINDEVO.COM</span>
                        </blockquote>

                        <h3>Short features list</h3>
                        <ul className="features_list">
                            <li><a href="features.html"><img src={require("../../Assets/images/icons/black/electronics.png")} alt="" title="" /><span>For all devices</span></a></li>
                            <li><a href="shop.html"><img src={require("../../Assets/images/icons/black/shop.png")} alt="" title="" /><span>Shop pages</span></a></li>
                            <li><a href="#" data-panel="right" className="open-panel"><img src={require("../../Assets/images/icons/black/users.png")} alt="" title="" /><span>User friendly</span></a></li>
                            <li><a href="photos.html"><img src={require("../../Assets/images/icons/black/photos.png")} alt="" title="" /><span>Photo gallery</span></a></li>
                            <li><a href="blog.html"><img src={require("../../Assets/images/icons/black/blog.png")} alt="" title="" /><span>Blog layout</span></a></li>
                            <li><a href="contact.html"><img src={require("../../Assets/images/icons/black/shop.png")} alt="" title="" /><span>Contact form</span></a></li>
                            <li><a href="tabs.html"><img src={require("../../Assets/images/icons/black/tabs.png")} alt="" title="" /><span>Responsive tabs</span></a></li>
                            <li><a href="Toggle.html"><img src={require("../../Assets/images/icons/black/toggle.png")} alt="" title="" /><span>Toggles</span></a></li>
                            <li><a href="#" data-popup=".popup-social" className="open-popup"><img src={require("../../Assets/images/icons/black/love.png")} alt="" title="" /><span>Social share</span></a></li>
                        </ul>

                        <a href="features.html" className="btn btn--full">VIEW ALL FEATURES</a>

                        <h4>You can use this mobile template for:</h4>
                        <ul className="simple_list">
                            <li>Creating a mobile website</li>
                            <li>Creating a mobile web app</li>
                            <li>Creating a mobile native app (integrated with solutions like phonegap or cordova)</li>
                            <li>Works perfectly on tablets and desktop also</li>
                        </ul>


                        <a href="http://themeforest.net/user/sindevo" className="btn btn--full">BUY IT NOW!</a>


                    </div>

                </div>
            </div>
        );
    }





}


export default About;