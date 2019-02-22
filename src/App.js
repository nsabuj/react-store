import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import "./Assets/css/swiper.css";
import "./Assets/css/style.css";
import './Assets/css/custom.css';
import CommonRoutes from './Routes/CommonRoutes';
import $ from 'jquery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { connect } from "react-redux";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showHideSidenav: false,
      showHideUsernav: false
    }

    $(document).ready(function () {
      "use strict";





      $(".open-popup").on('click', function (e) {
        var popupClass = $(this).data("popup");
        var popup = $(popupClass);
        popup.css({ display: 'block' }).addClass('active');
      });
      $(".close-popup").on('click', function (e) {
        var popupClassclose = $(this).data("popup");
        var popupclose = $(popupClassclose);
        popupclose.removeClass('active');
      });

    });





  }



  toggleUsernav = () => {

    console.log(this.state.showHideUsernav);
    this.setState({
      showHideUsernav: (this.state.showHideUsernav == false) ? true : false
    });
    if (this.state.showHideUsernav) {

      document.body.classList.remove('with-panel-right-reveal');
      document.body.classList.add('panel-closing');

    } else {
      document.body.classList.add('with-panel-right-reveal');
    }


  }


  toggleSidenav=()=> {
    
    this.setState({
      showHideSidenav: (this.state.showHideSidenav == false) ? true : false
    });
    if (this.state.showHideSidenav) {

      document.body.classList.remove('with-panel-left-reveal');
      document.body.classList.add('panel-closing');

    } else {
      document.body.classList.add('with-panel-left-reveal');
    }


    if (this.state.showHideUsernav && !this.state.showHideSidenav) {

      document.body.classList.remove('with-panel-right-reveal');
      document.body.classList.add('panel-closing');
      this.setState({
        showHideUsernav: (this.state.showHideUsernav == false) ? true : false
      });

    }

  }


  render() {

    //  if(this.state.showHideSidenav){
    //   menu.push('active');
    //   panel_overlay.push('active');
    //   panel_overlay.push('show');
    //  }

    console.log(this.state.showHideUsernav);

    return (
      
        <div className="app">
        <div id="mobile_wrap">
          <div className={this.state.showHideSidenav == true || this.state.showHideUsernav == true ? "panel-overlay " + 'active show' : "panel-overlay"} onClick={this.toggleSidenav.bind(this)} ></div>

          {/* nav */}
          
          {/* <CommonRoutes/> */}

          <Nav  show={this.state.showHideSidenav}  handler={this.toggleSidenav}/>

          
          {/* <Route path="/about" component={About} /> */}


          <div className={this.state.showHideUsernav == true ? "panel panel-right panel-reveal " + 'active' : "panel panel-right panel-reveal"} >
            <div className="user_login_info">

              <div className="user_thumb">

                <div className="user_details">
                  <p>Welcome, <span>Nathalie</span></p>
                </div>
                <div className="user_avatar"><img src={require("./Assets/images/avatar3.jpg")} alt="" title="" /></div>
              </div>

              <nav className="user-nav">
                <ul>
                  <li><a href="features/"><img src={require("./Assets/images/icons/gray/settings.png")} alt="" title="" /><span>Account Settings</span></a></li>
                  <li><a href="features/"><img src={require("./Assets/images/icons/gray/briefcase.png")} alt="" title="" /><span>My Account</span></a></li>
                  <li><a href="features/"><img src={require("./Assets/images/icons/gray/message.png")} alt="" title="" /><span>Messages</span><strong>12</strong></a></li>
                  <li><a href="features/"><img src={require("./Assets/images/icons/gray/love.png")} alt="" title="" /><span>Favorites</span><strong>5</strong></a></li>
                  <li><a href="index/"><img src={require("./Assets/images/icons/gray/lock.png")} alt="" title="" /><span>Logout</span></a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="views">

            <div className="view view-main">



              <div className="pages">

                <div data-page="index" className="page homepage">
                  <div className="page-content">

               <Header navpopup={this.toggleSidenav} />

                    <CommonRoutes/>
                    <Route exact path="/" render={props => (
                      <React.Fragment>

                        <div className="swiper-container slidertoolbar">
                          <div className="swiper-wrapper">

                            <div className="swiper-slide swiper-slide-1" >

                              <div className="slider-caption">

                                <h2 data-swiper-parallax="-100%">Mobile UI KIT</h2>
                                <p data-swiper-parallax="-30%">Design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.</p>
                                <a href="about/" className="slider-caption__more" data-swiper-parallax="-60%">READ MORE</a>
                              </div>
                            </div>

                            <div className="swiper-slide swiper-slide-2" >

                              <div className="slider-caption">

                                <h2 data-swiper-parallax="-100%" className="title--white">Multipurpose</h2>
                                <p data-swiper-parallax="-30%" className="text--white">You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.</p>
                                <a href="about/" className="slider-caption__more" data-swiper-parallax="-60%">READ MORE</a>
                              </div>

                            </div>
                            <div className="swiper-slide swiper-slide-3" >

                              <div className="slider-caption">

                                <h2 data-swiper-parallax="-100%" className="title--white">Web &amp; Native</h2>
                                <p data-swiper-parallax="-30%" className="text--white">You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.</p>
                                <a href="about/" className="slider-caption__more" data-swiper-parallax="-60%">READ MORE</a>
                              </div>

                            </div>
                          </div>
                          <div className="swiper-pagination"></div>
                          <div className="swiper-button-prev"></div>
                          <div className="swiper-button-next"></div>
                        </div>
                      </React.Fragment>
                    )} />
                    <Footer handler={this.toggleUsernav} />


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
        </div>
        
      
    );
  }




}

// const mapStateToProps = state => {
//   return { navShow: state.navShow };
// };



export default App;
