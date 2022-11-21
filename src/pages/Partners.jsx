import React, {useState} from 'react'
import logo1 from '../images/logo.png'
import footer_logo_white from '../images/footer-logo-white.png'

import zd from '../images/zd.png'
import day_1 from '../images/day_1.png'
import daptlif_ from '../images/daptlif_.png'
import smartlife_ from '../images/smartlife_.png'

import Home from './Home'
import Funeral from './Funeral'
import { Contact } from './Contact'
import { Legal } from './Legal'
import { Health } from './Health'
import Claim from './Claim'
import About from './About'

export const Partners = () => {
  const [path, setPath] =useState('')
 
  if(path==='About'){
     return <About/>
  }else if(path==='Funeral'){
         return <Funeral/>
  }else if(path==='Claim'){
         return <Claim/>
  }else if(path==='Health'){
         return <Health/>
  }else if(path==='Legal'){
         return <Legal/>
  }else if(path==='Home'){
         return <Home/>
  }else if(path==='Contact'){
         return <Contact/>
     } else{
  return (
    <div style={{textAlign:'left'}}>


{/* <div id="loader-wrapper">
  <div id="loader"><div className="loader-inner"></div></div>
</div> */}



<div id="page" className="page">



  <header id="header" className="header">


      <div className="wsmobileheader clearfix">
        <a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>
        <span className="smllogo"><img src="images/logo.png" width="180" height="40" alt="mobile-logo"/></span>
        
        <a href="https://api.whatsapp.com/send?phone=27822891681"><i className="fab fa-whatsapp"></i></a>
     </div>


     <div className="headtoppart bg-lightgrey">
        <div className="headerwp clearfix">

           <div className="headertopleft">
              <div className="address clearfix"><a href="https://api.whatsapp.com/send?phone=27822891681"><i className="fab fa-whatsapp"></i>+27 82 289 1681 - Get in touch via WhatsApp!</a>
                </div>
           </div>

          <div className="headertopright">
              <a className="linkedinicon" title="Linkedin" href="#"><i className="fab fa-linkedin-in"></i> <span className="mobiletext02">Linkedin</span></a>
              <a className="facebookicon" title="Facebook" href="#"><i className="fab fa-facebook-f"></i> <span className="mobiletext02">Facebook</span></a>
            </div>

        </div>
      </div>


      <div className="wsmainfull menu clearfix">
        <div className="wsmainwp clearfix">

          <div className="desktoplogo"><a href="#hero-2"><img src={logo1} style={{float:'left', width:'100'}} height="40" alt="header-logo"/></a></div>

          <nav className="wsmenu clearfix">
                        <ul className="wsmenu-list">



                                <li className="nl-simple" aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Home')}><a  >Home </a></li>



                                <li className="nl-simple" aria-haspopup="true" style={{cursor:'pointer'}} onClick={()=>setPath('About')}><a  >About Us </a></li>


                                <li aria-haspopup="true"><a href="#">Products <span className="wsarrow"></span></a>
                                        <ul className="sub-menu">
                                            <li aria-haspopup="true" style={{cursor:'pointer'}} onClick={()=>setPath('Funeral')}><a  >Funeral Insurance</a></li>
                                                <li aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Health')}><a  >Health Insurance</a></li>
                                                <li aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Legal')}><a  >Legal Insurance</a></li>
                                        </ul>
                                    </li>


                                <li className="nl-simple" aria-haspopup="true" style={{cursor:'pointer'}} onClick={()=>setPath('Partners')}><a  >Our Partners </a></li>


                                <li className="nl-simple" aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Claim')}><a  >Claim </a></li>


                                <li className="nl-simple" aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Contact')}><a  >Contact </a></li>


                                <li aria-haspopup="true"><a href="#">Login <span className="wsarrow"></span></a>
                                        <ul className="sub-menu">
                                        <li aria-haspopup="true"><a href="https://dev.zd-solutions.co.za/ords/plexi/r/agent-portal/login_desktop?session=5447060006340" target="_blank">Business Owner</a></li>
														<li aria-haspopup="true"><a href="https://dev.zd-solutions.co.za/ords/f?p=222:LOGIN_DESKTOP" target="_blank">Policyholder</a></li>
														<li aria-haspopup="true"><a href="https://dev.zd-solutions.co.za/ords/f?p=222:LOGIN_DESKTOP" target="_blank">Admin</a></li>
                                        </ul>
                                    </li>


                                    <li className="nl-simple header-btn" aria-haspopup="true"><a href="https://dev.zd-solutions.co.za/ords/plexi/r/agent-portal/login_desktop" target={'_blank'}>Biz Owner SignUp</a></li>
                        </ul>
                    </nav>

        </div>
      </div>


  </header>



  <div id="breadcrumb" className="division">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className=" breadcrumb-holder">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Our Partners</li>
                </ol>
            </nav>

            <h4 className="h4-sm steelblue-color">Our Partners</h4>

          </div>
        </div>
      </div>
    </div>
  </div>



  <div id="blog-page" className="wide-100 blog-page-section division">
    <div className="container">
       <div className="row">

        <aside id="sidebar" className="col-lg-6">

          <div className="popular-posts sidebar-div mb-50">

            <h5 className="h5-sm steelblue-color">Technology Partner</h5>

            <ul className="popular-posts">

              <li className="clearfix d-flex align-items-center">

              <img className="img-fluid" src={zd} alt="blog-post-preview" />

                <div className="post-summary">
                  <p>ZD Solutions is an end to end I.T. Solutions provider specialising in cloud based solutions for the automotive industry. With more than 20 man years of experience, we design, implement and support I.T. Solutions for companies ranging in size from small to midsize businesses.</p>
                </div>

              </li>

            </ul>

          </div>

        </aside>

        <aside id="sidebar" className="col-lg-6">

          <div className="popular-posts sidebar-div mb-50">

            <h5 className="h5-sm steelblue-color">Product Partner</h5>

            <ul className="popular-posts">

              <li className="clearfix d-flex align-items-center">

                <img className="img-fluid" src={day_1} alt="blog-post-preview" />

                <div className="post-summary">
                  <p>Day1 Health offers both comprehensive day-to-day and private hospital benefits at extremely affordable prices and is dual regulated by the Council for Medical Schemes and the Financial Services Conduct Authority. Day1 Health policies are underwritten by African Unity Life. </p>
                </div>

              </li>

            </ul>

          </div>

        </aside>

        <aside id="sidebar" className="col-lg-6">

          <div className="popular-posts sidebar-div mb-50">

            <h5 className="h5-sm steelblue-color">Product Partner</h5>

            <ul className="popular-posts">

              <li className="clearfix d-flex align-items-center">

                <img className="img-fluid" src={daptlif_} alt="blog-post-preview" />

                <div className="post-summary">
                  <p>DAPT Financial Services & Projects provides innovative funeral cover solutions for funeral parlours in South Africa.</p>
                </div>

              </li>

            </ul>

          </div>

        </aside>

        <aside id="sidebar" className="col-lg-6">

          <div className="popular-posts sidebar-div mb-50">

            <h5 className="h5-sm steelblue-color">Product Partner</h5>

            <ul className="popular-posts">

              <li className="clearfix d-flex align-items-center">

                <img className="img-fluid" src={smartlife_} alt="blog-post-preview" />

                <div className="post-summary">
                  <p>Health iAccess an authorized Financial Services Provider (FSP 51443),) and a Juristic Representative under DAPT Financial Services and Projects (FSP 51259). Products are underwritten by Smart Life Insurance Company Limited, an authorized Financial Services Provider(FSP 45983) and a licensed insurer</p>
                </div>

              </li>

            </ul>

          </div>

        </aside>

       </div>
     </div>
  </div>




  <footer id="footer-1" className="bg-image wide-40 footer division">
    <div className="container">


      <div className="row">


        <div className="col-md-6 col-lg-3">
          <div className="footer-info mb-40">

               <img src={footer_logo_white} width="180" height="40" alt="footer-logo"/>


            <p className="p-sm mt-20">We are an integrated financial services company. HiA’s mission and vision are rooted in our name of making health and financial services products accessible in the communities we serve.
            </p>

            <div className="footer-socials-links mt-20">
              <ul className="foo-socials text-center clearfix">

                <li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#" className="ico-twitter"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#" className="ico-google-plus"><i className="fab fa-google-plus-g"></i></a></li>
                <li><a href="#" className="ico-tumblr"><i className="fab fa-tumblr"></i></a></li>


              </ul>
            </div>

          </div>
        </div>


        <div className="col-md-6 col-lg-3">
          <div className="footer-box mb-40">

            <h5 className="h5-xs">Our Location</h5>

            <p>22 Sloane Street, Bryanston</p>
            <p>Johannesburg, 2191, South Africa</p>

            <p className="foo-email mt-20">E: <a href="mailto:info@healthiaccess.co.za">info@healthiaccess.co.za</a></p>

            <p>P: +27(0) 11 516 0503</p>

          </div>
        </div>


        <div className="col-md-6 col-lg-3">
          <div className="footer-box mb-40">

            <h5 className="h5-xs">Working Hours</h5>

            <p className="p-sm">Mon - Thur - <span>8:00 AM - 5:00 PM</span></p>
            <p className="p-sm">Friday - <span>8:00 AM - 3:00 PM</span></p>
            <p className="p-sm">Sat - Sun - <span>Closed</span></p>

          </div>
        </div>


        <div className="col-md-6 col-lg-3">
          <div className="footer-box mb-40">

            <h5 className="h5-xs">WhatsApp</h5>

            <h5 className="h5-xl blue-color">+27(0) 82 289 1681</h5>

            <p className="p-sm mt-15">Contact on this number, always available to assist with information and enquiries.
            </p>

            <p className="foo-email mt-20"><a href="popi.html">Privacy Statement</a></p>

          </div>
        </div>


      </div>


      <div className="bottom-footer">
        <div className="row">
          <div className="col-md-12">
            <p className="footer-copyright">&copy; 2022 <span>Health iAccess</span>. All Rights Reserved</p>
          </div>
        </div>
      </div>


    </div>
  </footer>




</div>


<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/modernizr.custom.js"></script>
<script src="js/jquery.easing.js"></script>
<script src="js/jquery.appear.js"></script>
<script src="js/jquery.stellar.min.js"></script>
<script src="js/menu.js"></script>
<script src="js/sticky.js"></script>
<script src="js/jquery.scrollto.js"></script>
<script src="js/materialize.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/jquery.magnific-popup.min.js"></script>
<script src="js/imagesloaded.pkgd.min.js"></script>
<script src="js/isotope.pkgd.min.js"></script>
<script src="js/hero-form.js"></script>
<script src="js/contact-form.js"></script>
<script src="js/comment-form.js"></script>
<script src="js/appointment-form.js"></script>
<script src="js/jquery.datetimepicker.full.js"></script>
<script src="js/jquery.validate.min.js"></script>
<script src="js/jquery.ajaxchimp.min.js"></script>
<script src="js/wow.js"></script>

<script src="js/custom.js"></script>

<script>
  new WOW().init();
</script>




    </div>
  )
}
}
