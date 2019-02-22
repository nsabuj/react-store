import React, { Component } from 'react';
import { NavLink,withRouter } from 'react-router-dom';





class Nav extends Component {
    render() {
        console.log(this.props.location.pathname);
        return (


            <div className= { this.props.show == true ? "panel panel-left panel-reveal " + 'active' : "panel panel-left panel-reveal" }>

                <div className="swiper-container-subnav multinav">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <nav className="main_nav_underline">
                                <ul>
                                    <li><NavLink to="/" exact activeClassName="active" onClick={this.props.handler}><img src={ require("../Assets/images/icons/gray/home.png")} alt="" title="" /><span>Home</span></NavLink></li>
                                    <li><NavLink to="/about"  activeClassName="active" exact onClick={this.props.handler}><img src={ require("../Assets/images/icons/gray/mobile.png")} alt="" title="" /><span>About</span></NavLink></li>
                                    <li><NavLink activeClassName="active" to="/features" onClick={this.props.handler}><img src={ require("../Assets/images/icons/gray/features.png")} alt="" title="" /><span>Features</span></NavLink ></li>
                                    <li><NavLink  to="#" data-popup=".popup-login" className="open-popup" onClick={this.props.handler}><img src={ require("../Assets/images/icons/gray/lock.png")} alt="" title="" /><span>Login</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/team" onClick={this.props.handler}><img src={ require("../Assets/images/icons/gray/users.png")} alt="" title="" /><span>Team</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/blog" onClick={this.props.handler}><img src={ require("../Assets/images/icons/gray/blog.png")} alt="" title="" /><span>Blog</span></NavLink ></li>

                                    <li><NavLink activeClassName="active" to="/photos" onClick={this.props.handler}><img src={ require("../Assets/images/icons/gray/photos.png")} alt="" title="" /><span>Photos</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/videos" onClick={this.props.handler}><img src={ require("../Assets/images/icons/gray/video.png")} alt="" title="" /><span>Videos</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/music" onClick={this.props.handler}><img src={ require("../Assets/images/icons/gray/music.png")} alt="" title="" /><span>Music</span></NavLink ></li>

                                    <li><NavLink activeClassName="active" to="/shop" onClick={this.props.handler}><img src={ require("../Assets/images/icons/gray/shop.png")} alt="" title="" /><span>Shop</span></NavLink ></li>
                                    <li className="subnav opensubnav"><img src={ require("../Assets/images/icons/gray/categories.png")} alt="" title="" /><span>Sub level menu</span></li>
                                    <li><NavLink activeClassName="active" to="/cart" onClick={this.props.handler}><img src={ require("../Assets/images/icons/gray/cart.png")} alt="" title="" /><span>Cart</span></NavLink ></li>

                                    <li><NavLink activeClassName="active" to="/tables" onClick={this.props.handler}><img src={ require("../Assets/images/icons/gray/tables.png")} alt="" title="" /><span>Tables</span></NavLink ></li>

                                    <li><NavLink activeClassName="active" to="/form" ><img src={ require("../Assets/images/icons/gray/form.png")} alt="" title="" /><span>Custom Form</span></NavLink ></li>


                                    <li><NavLink activeClassName="active" to="tel:012345678" ><img src={ require("../Assets/images/icons/gray/phone.png")} alt="" title="" /><span>Call now!</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/contact" onClick={this.props.handler}><span>Contact</span></NavLink ></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="swiper-slide">
                            <div className="subnav_header backtonav"><img src={ require("../Assets/images/icons/gray/back.png")} alt="" title="" /><span>BACK TO MAIN MENU</span></div>
                            <nav className="main_nav_underline">
                                <ul>

                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/car.png")} alt="" title="" /><span>Cars</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/bus.png")} alt="" title="" /><span>Buses</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/bike.png")} alt="" title="" /><span>Bikes</span></NavLink ></li>

                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/drink.png")} alt="" title="" /><span>Drinks</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/food.png")} alt="" title="" /><span>Food</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/orders.png")} alt="" title="" /><span>Clothes</span></NavLink ></li>

                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/rocket.png")} alt="" title="" /><span>Rockets</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/briefcase.png")} alt="" title="" /><span>Accessories</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/gift.png")} alt="" title="" /><span>Gifts</span></NavLink ></li>
                                    <li className="subnav opensubsubnav"><img src={ require("../Assets/images/icons/gray/categories.png")} alt="" title="" /><span>Third sublevel menu</span></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="swiper-slide">
                            <div className="subnav_header backtosubnav"><img src={ require("../Assets/images/icons/gray/back.png")} alt="" title="" /><span>BACK TO 2 SUBLEVEL MENU</span></div>
                            <nav className="main_nav_underline">
                                <ul>

                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/car.png")} alt="" title="" /><span>Subcategory 01</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/bus.png")} alt="" title="" /><span>Subcategory 02</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/bike.png")} alt="" title="" /><span>Subcategory 03</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/drink.png")} alt="" title="" /><span>Subcategory 04</span></NavLink ></li>
                                    <li><NavLink activeClassName="active" to="/shop"><img src={ require("../Assets/images/icons/gray/food.png")} alt="" title="" /><span>Subcategory 05</span></NavLink ></li>


                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(Nav);
