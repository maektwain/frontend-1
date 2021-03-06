import React, { Component } from 'react';
import { Link } from "react-router";
import { Gdpr } from "img";

class WebsiteFooter extends Component {
  render() {
    return (
      <div className="main-container">
        <footer className="footer-6 pb-5">
          <div className="container mt-1">
            <div className="row">
              <div className="menu-vertical col-md-3">
                <ul className="bar__module">
                  <li className="type--uppercase col-sm-4 col-md-3 h5"><Link className="footer-menu-link" to=""> <b>Company</b></Link></li>
                  <li className="type--uppercase col-sm-4 col-md-3 h6"><Link className="footer-menu-link" to="/about"> About Us </Link> </li>
                  <li className="type--uppercase col-sm-4 col-md-3 h6"><Link className="footer-menu-link" to="/terms-and-condtions"> Terms &amp; Conditions </Link></li>
                  <li className="type--uppercase col-sm-4 col-md-3 h6"><Link className="footer-menu-link" to="/privacy-policy"> Privacy Policy </Link></li>
                  
                  

                </ul>
              </div>
              <div className="menu-vertical col-md-3">
                <ul className="bar__module">
                  <li className="type--uppercase col-sm-4 col-md-2 h5"><Link to=""> <b>Product</b> </Link></li>
                  <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/how-it-works"> How It Works </Link></li>
                  <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/pricing"> Pricing </Link></li>
                  <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/signup"> Signup </Link></li>
                  <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/login"> Login (Already a user?) </Link></li>
                  <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/demopage"> SCHEDULE A DEMO </Link></li>
                  <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/customerStories">customer stories</Link></li>
                  <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/featurepage">Features</Link></li>
                  <li className="type--uppercase col-sm-4 col-md-2 h6"> <Link to="/integrations">INTEGRATIONS</Link> </li>
                  

                </ul>
              </div>
              <div className="menu-vertical col-md-2">
                <ul>
                  <li className="type--uppercase col-sm-4 col-md-2 h5"><Link to=""> <b>Resources</b> </Link></li>
                  <li className="type--uppercase col-sm-4 col-md-2 h6"><Link href="https://useinfluence.freshdesk.com/support/home"> FAQs </Link></li>
                  <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/Blog"> Blog </Link></li>
                  <li className="type--uppercase col-sm-4 col-md-2 h6"><Link href="https://angel.co/influence-8/jobs"> Careers </Link> </li>
                  <li className="type--uppercase col-sm-4 col-md-2 h6"><Link to="/contact"> Contact Us </Link></li>
                </ul>
              </div>
    
              <div className="menu-vertical col-md-4 text-center ">
                <ul>
                <Link to="/privacy-policy"> <img alt="GDPR" src={Gdpr} width="100px" height="100px" className="mr-3"/></Link>
                </ul>
              </div>
            </div>
          </div>
            <p> <br/></p>
          <div className="footer__lower text-center-xs unpad--bottom">
            <div className="container">
              <div className="row">
                <div className="col-sm-6"> <span className="type--fine-print">© <span className="update-year">2018 Influence&nbsp;</span>&nbsp; All Rights Reserved</span>
                </div>
                <div className="col-sm-6 text-right text-center-xs">
                  <ul className="social-list list-inline">
                    <li><Link to="/"><i className="socicon socicon-google icon icon--xs"></i></Link></li>
                    <li><Link to="/"><i className="socicon socicon-twitter icon icon--xs"></i></Link></li>
                    <li><Link to="/"><i className="socicon socicon-facebook icon icon--xs"></i></Link></li>
                    <li><Link to="/"><i className="socicon socicon-instagram icon icon--xs"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default WebsiteFooter;
