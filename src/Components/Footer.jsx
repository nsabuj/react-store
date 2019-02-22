import React, { Component } from 'react';
import { connect } from "react-redux";
import { addArticle } from "../Store/actions/index";
import { withRouter,NavLink } from 'react-router-dom';

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}



class FooterArea extends Component {

  state={
    navshow:false
  }
  
  render() {

    if(this.props.location.pathname=='/'){

    
    return (
        <div className="swiper-container-toolbar swiper-toolbar">
        <div className="swiper-pagination-toolbar"></div>
        <div className="swiper-wrapper">
          <div className="swiper-slide toolbar-icon">
            <NavLink to="#" data-panel="right" className="open-panel" onClick = {this.props.handler.bind(this)} ><img src={require("../Assets/images/icons/blue/user.png")} alt="" title="" /></NavLink>
            <NavLink to="shop/"><img src={require("../Assets/images/icons/blue/shop.png")} alt="" title="" /></NavLink>
            <NavLink to="#" data-popup=".popup-social" className="open-popup"><img src={require("../Assets/images/icons/blue/twitter.png")} alt="" title="" /></NavLink>
            <NavLink to="photos/"><img src={require("../Assets/images/icons/blue/photos.png")} alt="" title="" /></NavLink>
            <NavLink to="contact/">Contact</NavLink>
          </div>
          <div className="swiper-slide toolbar-icon">
            <NavLink to="features/"><img src={require("../Assets/images/icons/blue/features.png")} alt="" title="" /></NavLink>
            <NavLink to="music/"><img src={require("../Assets/images/icons/blue/music.png")} alt="" title="" /></NavLink>
            <NavLink to="#" data-popup=".popup-login" className="open-popup"><img src={require("../Assets/images/icons/blue/lock.png")} alt="" title="" /></NavLink>
            <NavLink to="videos/"><img src={require("../Assets/images/icons/blue/video.png")} alt="" title="" /></NavLink>
            <NavLink to="tel:12345678" ><img src={require("../Assets/images/icons/blue/phone.png")} alt="" title="" /></NavLink>
          </div>

        </div>
      </div>

    );

    }else{

      return (
        <div></div>
      );

    }
  }
}



const Footer= connect(mapDispatchToProps)(FooterArea);


export default  withRouter(Footer);