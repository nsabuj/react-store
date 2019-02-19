import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import './App.css';
import "./Assets/css/swiper.css";
import "./Assets/css/style.css";
//import CommonRoutes from './Routes/CommonRoutes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './Components/pages/About'

class App extends Component {
  render() {



    return (
      <Router>
      <div className="App" id="mobile_wrap">
        <div className="panel-overlay"></div>

        {/* nav */}
        <Nav />
        {/* <CommonRoutes/> */}
     

          <Route path="/about" component={About} />

  
        <div className="panel panel-right panel-reveal">
          <div className="user_login_info">

            <div className="user_thumb">

              <div className="user_details">
                <p>Welcome, <span>Nathalie</span></p>
              </div>
              <div className="user_avatar"><img src="images/avatar3.jpg" alt="" title="" /></div>
            </div>

            <nav className="user-nav">
              <ul>
                <li><a href="features.html"><img src={require("./Assets/images/icons/gray/settings.png")} alt="" title="" /><span>Account Settings</span></a></li>
                <li><a href="features.html"><img src={require("./Assets/images/icons/gray/briefcase.png")} alt="" title="" /><span>My Account</span></a></li>
                <li><a href="features.html"><img src={require("./Assets/images/icons/gray/message.png")} alt="" title="" /><span>Messages</span><strong>12</strong></a></li>
                <li><a href="features.html"><img src={require("./Assets/images/icons/gray/love.png")} alt="" title="" /><span>Favorites</span><strong>5</strong></a></li>
                <li><a href="index.html"><img src={require("./Assets/images/icons/gray/lock.png")} alt="" title="" /><span>Logout</span></a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="views">

          <div className="view view-main">



            <div className="pages">

              <div data-page="index" className="page homepage">
                <div className="page-content">

                  <div className="navbar navbar--fixed navbar--fixed-top">
                    <div className="navbar__col navbar__col--title">
                      <a href="index.html">mobili</a>
                    </div>
                    <div className="navbar__col navbar__col--icon navbar__col--icon-right">
                      <a href="#" data-panel="left" className="open-panel"><img src={require("./Assets/images/icons/white/menu.png")} alt="" title="" /></a>
                    </div>
                  </div>


                  <div className="swiper-container slidertoolbar">
                    <div className="swiper-wrapper">

                      <div className="swiper-slide swiper-slide-1" >

                        <div className="slider-caption">

                          <h2 data-swiper-parallax="-100%">Mobile UI KIT</h2>
                          <p data-swiper-parallax="-30%">Design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.</p>
                          <a href="about.html" className="slider-caption__more" data-swiper-parallax="-60%">READ MORE</a>
                        </div>
                      </div>

                      <div className="swiper-slide swiper-slide-2" >

                        <div className="slider-caption">

                          <h2 data-swiper-parallax="-100%" className="title--white">Multipurpose</h2>
                          <p data-swiper-parallax="-30%" className="text--white">You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.</p>
                          <a href="about.html" className="slider-caption__more" data-swiper-parallax="-60%">READ MORE</a>
                        </div>

                      </div>
                      <div className="swiper-slide swiper-slide-3" >

                        <div className="slider-caption">

                          <h2 data-swiper-parallax="-100%" className="title--white">Web &amp; Native</h2>
                          <p data-swiper-parallax="-30%" className="text--white">You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.</p>
                          <a href="about.html" className="slider-caption__more" data-swiper-parallax="-60%">READ MORE</a>
                        </div>

                      </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  </div>

                    <Footer/>


                </div>
              </div>
            </div>



          </div>
        </div>


        <div className="popup popup-login">
          <div className="content-block">
            <h4>LOGIN</h4>
            <div className="loginform">
              <form id="LoginForm" method="post">
                <input type="text" name="Username" className="form_input required" placeholder="username" />
                <input type="password" name="Password" className="form_input required" placeholder="password" />
                <div className="forgot_pass"><a href="#" data-popup=".popup-forgot" className="open-popup">Forgot Password?</a></div>
                <input type="submit" name="submit" className="form_submit" id="submit" value="SIGN IN" />
              </form>
              <div className="signup_bottom">
                <p>Don't have an account?</p>
                <a href="#" data-popup=".popup-signup" className="open-popup">SIGN UP</a>
              </div>
            </div>
            <div className="close_popup_button">
              <a href="#" className="close-popup" data-popup=".popup-login"><img src={require("./Assets/images/icons/black/menu_close.png")} alt="" title="" /></a>
            </div>
          </div>
        </div>


        <div className="popup popup-signup">
          <div className="content-block">
            <h4>REGISTER</h4>
            <div className="loginform">
              <form id="RegisterForm" method="post">
                <input type="text" name="Username" className="form_input required" placeholder="Username" />
                <input type="text" name="Email" className="form_input required" placeholder="Email" />
                <input type="password" name="Password" className="form_input required" placeholder="Password" />
                <input type="submit" name="submit" className="form_submit" id="submitregister" value="SIGN UP" />
              </form>
              <h5>- OR REGISTER WITH A SOCIAL ACCOUNT -</h5>
              <div className="signup_social">
                <a href="http://www.facebook.com/" className="signup_facebook">FACEBOOK</a>
                <a href="http://www.twitter.com/" className="signup_twitter">TWITTER</a>
              </div>
            </div>
            <div className="close_popup_button">
              <a href="#" className="close-popup" data-popup=".popup-signup"><img src={require("./Assets/images/icons/black/menu_close.png")} alt="" title="" /></a>
            </div>
          </div>
        </div>


        <div className="popup popup-forgot">
          <div className="content-block">
            <h4>FORGOT PASSWORD</h4>
            <div className="loginform">
              <form id="ForgotForm" method="post">
                <input type="text" name="Email" className="form_input required" placeholder="email" />
                <input type="submit" name="submit" className="form_submit" id="submitforgot" value="RESEND PASSWORD" />
              </form>
              <div className="signup_bottom">
                <p>Check your email and follow the instructions to reset your password.</p>
              </div>
            </div>
            <div className="close_popup_button">
              <a href="#" className="close-popup" data-popup=".popup-forgot"><img src={require("./Assets/images/icons/black/menu_close.png")} alt="" title="" /></a>
            </div>
          </div>
        </div>


        <div className="popup popup-social">
          <div className="content-block">
            <h4>Social Share</h4>
            <p>Share icons solution that allows you share and increase your social popularity.</p>
            <ul className="social_share">
              <li><a href="http://twitter.com/"><img src={require("./Assets/images/icons/black/twitter.png")} alt="" title="" /><span>TWITTER</span></a></li>
              <li><a href="http://www.facebook.com/"><img src={require("./Assets/images/icons/black/facebook.png")} alt="" title="" /><span>FACEBOOK</span></a></li>
              <li><a href="http://plus.google.com/"><img src={require("./Assets/images/icons/black/gplus.png")} alt="" title="" /><span>GOOGLE</span></a></li>
              <li><a href="http://www.dribbble.com/"><img src={require("./Assets/images/icons/black/dribbble.png")} alt="" title="" /><span>DRIBBBLE</span></a></li>
              <li><a href="http://www.linkedin.com/"><img src={require("./Assets/images/icons/black/linkedin.png")} alt="" title="" /><span>LINKEDIN</span></a></li>
              <li><a href="http://www.pinterest.com/"><img src={require("./Assets/images/icons/black/pinterest.png")} alt="" title="" /><span>PINTEREST</span></a></li>
            </ul>
            <div className="close_popup_button"><a href="#" className="close-popup" data-popup=".popup-social"><img src={require("./Assets/images/icons/black/menu_close.png")} alt="" title="" /></a></div>
          </div>
        </div>

      </div>
      </Router>
    );
  }
}

export default App;
