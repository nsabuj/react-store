import React, { Component } from 'react';
import { withRouter,NavLink } from 'react-router-dom';




class Header extends Component {

  constructor(props) {
    super(props);
    // var currentRoutes = this.context.router.getCurrentRoutes();
    //  var lastRoute = this.props.routes[this.props.routes.length-1]
    // console.log(lastRoute);
  }
  render() {


    if (this.props.location.pathname=='/') {
      return (
        <div className="navbar navbar--fixed navbar--fixed-top">
          <div className="navbar__col navbar__col--title">
            <NavLink to="/">mobili</NavLink>
          </div>
          <div className="navbar__col navbar__col--icon navbar__col--icon-right">
            <NavLink to="#" data-panel="left" className="open-panel" onClick={this.props.navpopup} ><img src={require("../Assets/images/icons/white/menu.png")} alt="" title="" /></NavLink>
          </div>
        </div>

      );
    } else {
      return (


        <div className="navbar navbar--fixed navbar--fixed-top navbar--bg">
        <div className="navbar__col navbar__col--title">
          <NavLink to="/">mobili</NavLink>
        </div>
        <div className="navbar__col navbar__col--icon navbar__col--icon-right">
          <NavLink to="/cart"><img src={require("../Assets/images/icons/white/cart.png")} alt="" title="" /><span className="navbar__icon-bullet">3</span></NavLink>
        </div>
        <div className="navbar__col navbar__col--icon navbar__col--icon-right">
          <NavLink to="#" data-panel="right" className="open-panel"><img src={require("../Assets/images/icons/white/user.png")} alt="" title="" /></NavLink>
        </div>
        <div className="navbar__col navbar__col--icon navbar__col--icon-right">
          <NavLink to="#" data-panel="left" className="open-panel" onClick={this.props.navpopup}><img src={require("../Assets/images/icons/white/menu.png")} alt="" title="" /></NavLink>
        </div>
        </div>


      );
    }


  }
}

export default withRouter(Header);
