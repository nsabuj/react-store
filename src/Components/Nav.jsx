import React, { Component } from 'react';






class Nav extends Component {
    render() {
        console.log('nav');
        return (
            <div className="panel panel-left panel-reveal">

                <div className="swiper-container-subnav multinav">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <nav className="main_nav_underline">
                                <ul>
                                    <li><a href="/"><img src={ require("../Assets/images/icons/gray/home.png")} alt="" title="" /><span>Home</span></a></li>
                                    <li><a href="about.html"><img src={ require("../Assets/images/icons/gray/mobile.png")} alt="" title="" /><span>About</span></a></li>
                                    <li><a href="features.html"><img src={ require("../Assets/images/icons/gray/features.png")} alt="" title="" /><span>Features</span></a></li>
                                    <li><a href="#" data-popup=".popup-login" className="open-popup"><img src={ require("../Assets/images/icons/gray/lock.png")} alt="" title="" /><span>Login</span></a></li>
                                    <li><a href="team.html"><img src={ require("../Assets/images/icons/gray/users.png")} alt="" title="" /><span>Team</span></a></li>
                                    <li><a href="blog.html"><img src={ require("../Assets/images/icons/gray/blog.png")} alt="" title="" /><span>Blog</span></a></li>

                                    <li><a href="photos.html"><img src={ require("../Assets/images/icons/gray/photos.png")} alt="" title="" /><span>Photos</span></a></li>
                                    <li><a href="videos.html"><img src={ require("../Assets/images/icons/gray/video.png")} alt="" title="" /><span>Videos</span></a></li>
                                    <li><a href="music.html"><img src={ require("../Assets/images/icons/gray/music.png")} alt="" title="" /><span>Music</span></a></li>

                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/shop.png")} alt="" title="" /><span>Shop</span></a></li>
                                    <li className="subnav opensubnav"><img src={ require("../Assets/images/icons/gray/categories.png")} alt="" title="" /><span>Sub level menu</span></li>
                                    <li><a href="cart.html"><img src={ require("../Assets/images/icons/gray/cart.png")} alt="" title="" /><span>Cart</span></a></li>

                                    <li><a href="tables.html"><img src={ require("../Assets/images/icons/gray/tables.png")} alt="" title="" /><span>Tables</span></a></li>

                                    <li><a href="form.html"><img src={ require("../Assets/images/icons/gray/form.png")} alt="" title="" /><span>Custom Form</span></a></li>


                                    <li><a href="tel:012345678"><img src={ require("../Assets/images/icons/gray/phone.png")} alt="" title="" /><span>Call now!</span></a></li>
                                    <li><a href="contact.html"><span>Contact</span></a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="swiper-slide">
                            <div className="subnav_header backtonav"><img src={ require("../Assets/images/icons/gray/back.png")} alt="" title="" /><span>BACK TO MAIN MENU</span></div>
                            <nav className="main_nav_underline">
                                <ul>

                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/car.png")} alt="" title="" /><span>Cars</span></a></li>
                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/bus.png")} alt="" title="" /><span>Buses</span></a></li>
                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/bike.png")} alt="" title="" /><span>Bikes</span></a></li>

                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/drink.png")} alt="" title="" /><span>Drinks</span></a></li>
                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/food.png")} alt="" title="" /><span>Food</span></a></li>
                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/orders.png")} alt="" title="" /><span>Clothes</span></a></li>

                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/rocket.png")} alt="" title="" /><span>Rockets</span></a></li>
                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/briefcase.png")} alt="" title="" /><span>Accessories</span></a></li>
                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/gift.png")} alt="" title="" /><span>Gifts</span></a></li>
                                    <li className="subnav opensubsubnav"><img src={ require("../Assets/images/icons/gray/categories.png")} alt="" title="" /><span>Third sublevel menu</span></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="swiper-slide">
                            <div className="subnav_header backtosubnav"><img src={ require("../Assets/images/icons/gray/back.png")} alt="" title="" /><span>BACK TO 2 SUBLEVEL MENU</span></div>
                            <nav className="main_nav_underline">
                                <ul>

                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/car.png")} alt="" title="" /><span>Subcategory 01</span></a></li>
                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/bus.png")} alt="" title="" /><span>Subcategory 02</span></a></li>
                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/bike.png")} alt="" title="" /><span>Subcategory 03</span></a></li>
                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/drink.png")} alt="" title="" /><span>Subcategory 04</span></a></li>
                                    <li><a href="shop.html"><img src={ require("../Assets/images/icons/gray/food.png")} alt="" title="" /><span>Subcategory 05</span></a></li>


                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Nav;
