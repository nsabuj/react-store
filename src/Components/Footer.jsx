import React, { Component } from 'react';






class Footer extends Component {
  render() {
    return (
        <div className="swiper-container-toolbar swiper-toolbar">
        <div className="swiper-pagination-toolbar"></div>
        <div className="swiper-wrapper">
          <div className="swiper-slide toolbar-icon">
            <a href="#" data-panel="right" className="open-panel"><img src={require("../Assets/images/icons/blue/user.png")} alt="" title="" /></a>
            <a href="shop.html"><img src="images/icons/blue/shop.png" alt="" title="" /></a>
            <a href="#" data-popup=".popup-social" className="open-popup"><img src={require("../Assets/images/icons/blue/twitter.png")} alt="" title="" /></a>
            <a href="photos.html"><img src="images/icons/blue/photos.png" alt="" title="" /></a>
            <a href="contact.html"><img src="images/icons/blue/contact.html" alt="" title="" /></a>
          </div>
          <div className="swiper-slide toolbar-icon">
            <a href="features.html"><img src="images/icons/blue/features.png" alt="" title="" /></a>
            <a href="music.html"><img src="images/icons/blue/music.png" alt="" title="" /></a>
            <a href="#" data-popup=".popup-login" className="open-popup"><img src={require("../Assets/images/icons/blue/lock.png")} alt="" title="" /></a>
            <a href="videos.html"><img src="images/icons/blue/video.png" alt="" title="" /></a>
            <a href="tel:12345678" ><img src="images/icons/blue/phone.png" alt="" title="" /></a>
          </div>

        </div>
      </div>

    );
  }
}

export default Footer;
