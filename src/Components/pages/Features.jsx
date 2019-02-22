import React, { Component } from 'react';
import { NavLink,withRouter } from 'react-router-dom';

class Features extends Component {


    render() {

        return (
            <div className="page-content-other">
            <div id="pages_maincontent">

                <h2 className="page_title">SMART FEATURES</h2>

                <div className="page_single layout_fullwidth_padding">

                    <ul className="features_list_detailed">

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/electronics.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4><NavLink to="/about">For all devices</NavLink></h4>
                                <NavLink to="/about">Created for all screens, mobile and desktop. Full width layout with touch enabled sections.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/photos.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4><NavLink to="/photos">Photo gallery</NavLink></h4>
                                <NavLink to="/photos">Easy create your own photo gallery app or mobile website. List and full screen options available.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/blog.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4><NavLink to="/blog">Blog layout</NavLink></h4>
                                <NavLink to="/blog">Create your news app with the blog layout and comments sections included.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/shop.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4><NavLink to="/shop">Shop</NavLink></h4>
                                <NavLink to="/shop">Mobile eccomerce solution. Layout designs to create NavLinkmobile shop with categories and shopping cart integrated.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/user.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4> <NavLink to="#" data-popup=".popup-login" className="open-popup">User login</NavLink></h4>
                                <NavLink to="#" data-popup=".popup-login" className="open-popup">Static login and register HTML forms with validation.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/lock.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4><NavLink to="#" data-panel="right" className="open-panel">User account</NavLink></h4>
                                <NavLink to="#" data-panel="right" className="open-panel">Create an user account page with profile image and custom menu.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/tabs.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4> <NavLink to="/tabs">Responsive tabs</NavLink></h4>
                                <NavLink to="/tabs">Add responsive tabs to any page or section in your app.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/toggle.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4><NavLink to="/toggle-2">Toggles</NavLink></h4>
                                <NavLink to="/toggle-2">Add content with toggles will save NavLinklot of space in your app layout.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/tables.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4> <NavLink to="/tables">Tables</NavLink></h4>
                                <NavLink to="/tables">Create NavLinktable section for your services and price plans.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/slider.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4><NavLink to="/about">Images slider</NavLink></h4>
                                <NavLink to="/about">Create an image slider from your photos.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/tabs.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4><NavLink to="/contact">Contact form</NavLink></h4>
                                <NavLink to="/contact">Receive messages from your clients using the allready build in php/ajax contact form.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/form.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4><NavLink to="/form">Custom form inputs</NavLink></h4>
                                <NavLink to="/form">Build custom forms with inputs, selects, radio, checkboxes.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/message.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4><NavLink to="/chat">Chat messages layout</NavLink></h4>
                                <NavLink to="/chat">Create your custom chat room using the messages layout included.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/love.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4><NavLink to="#" data-popup=".popup-social" className="open-popup">Social share</NavLink></h4>
                                <NavLink to="#" data-popup=".popup-social" className="open-popup">Allow users to follow you on your social websites.</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className="feat_small_icon"><img src={require("../../Assets/images/icons/black/phone.png")} alt="" title="" /></div>
                            <div className="feat_small_details">
                                <h4><NavLink to="tel:123456" className="external">Call Us button</NavLink></h4>
                                <NavLink to="tel:123456" className="external">Create NavLinkdirect call button for mobile with a phone number.</NavLink>
                            </div>
                        </li>




                    </ul>
                </div>


            </div>
            </div>
        )
    }
}

export default Features;