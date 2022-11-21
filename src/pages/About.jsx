import React, {useState} from 'react'
import logo1 from '../images/logo.png'
import footer_logo_white from '../images/footer-logo-white.png'
import image_04 from '../images/image-04.png'
import team_1 from '../images/team_1.jpg'
import business_owner from '../images/business_owner.jpg'
import insure_funeral from '../images/insure_funeral.jpg'
import who_we_are from '../images/who_we_are.jpg'
import signature1 from '../images/signature1.png'
import funeral_insurance from '../images/funeral_insurance.jpg'
import health_insurance from '../images/health_insurance.jpg'
import legal_insurance from '../images/legal_insurance.jpg'
import footer_log_white from '../images/footer-logo-white.png'
import Home from './Home'
import Funeral from './Funeral'
import { Partners } from './Partners'
import { Contact } from './Contact'
import { Legal } from './Legal'
import { Health } from './Health'
import Claim from './Claim'

const About = () => {
  
    const [path, setPath] =useState('')
 
    if(path==='Home'){
       return <Home/>
    }else if(path==='Funeral'){
           return <Funeral/>
    }else if(path==='Claim'){
           return <Claim/>
    }else if(path==='Health'){
           return <Health/>
    }else if(path==='Legal'){
           return <Legal/>
    }else if(path==='Partners'){
           return <Partners/>
    }else if(path==='Contact'){
           return <Contact/>
       } else{
    return (
       <>
        




{/* <div id="loader-wrapper">
    <div id="loader"><div className="loader-inner"></div></div>
</div> */}




<div id="page" className="page">



    <header id="header" className="header">


        <div className="wsmobileheader clearfix">
            <a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>
            <span className="smllogo"><img src={logo1} width="180" height="40" alt="mobile-logo"/></span>
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

                <div className="desktoplogo"><a href="#hero-2"><img src={logo1}  width="180" height="40" alt="header-logo"/></a></div>


                <nav className="wsmenu clearfix">
                        <ul className="wsmenu-list">



                                <li className="nl-simple" aria-haspopup="true"><a href="index.html">Home </a></li>


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
                                <li className="breadcrumb-item active" aria-current="page">About Us</li>
                              </ol>
                        </nav>


                        <h4 className="h4-sm steelblue-color">About Us</h4>

                    </div>
                </div>
            </div>
        </div>
    </div>





    <section id="info-2" className="wide-60 info-section division">
        <div className="container">
            <div className="row d-flex align-items-center">



                <div className="col-lg-6">
                    <div className="txt-block pc-30 mb-40 wow fadeInUp" data-wow-delay="0.4s">


                         <span className="section-id blue-color">WELCOME TO</span>


                        <h3 className="h3-md steelblue-color">Health iAccess, also known as HiA</h3>


                        <p className="mb-30">We are an integrated financial services company. HiA’s mission and vision are rooted in our name of making health and financial services products accessible in the communities we serve, be it individuals or institutions/groups.
                        </p>

                        <p className="mb-30">By continuously offering a range of products, we make it easy for our customers to fulfill a variety of needs, while providing our business owners with an opportunity to earn across various streams. In essence:
                        </p>


                        <div className="row">

                            <div className="col-xl-6">


                                <div className="box-list m-top-15">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                    <p className="p-sm">We partner and source financial services products.</p>
                                </div>

                                <div className="box-list">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                    <p className="p-sm">We distribute innovatively, while driving affordability and accessibility.</p>
                                </div>


                            </div>

                            <div className="col-xl-6">


                                <div className="box-list">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                    <p className="p-sm">We intend to make it easy for communities to access our products, be it sales or the claims process.</p>
                                </div>


                                <div className="box-list m-top-15">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                    <p className="p-sm">Technology is at the heart of what we do!</p>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>



                <div className="col-lg-6">
                    <div className="info-2-img wow fadeInUp" data-wow-delay="0.6s">
                    <img className="img-fluid" src={image_04} alt="info-image"/>
                    </div>
                </div>


            </div>
        </div>
    </section>



    <section id="services-4" className="wide-60 services-section division">
        <div className="container">


            <div className="row">
                <div className="col-lg-10 offset-lg-1 section-title">


                    <h3 className="h3-md steelblue-color">Meet our Team</h3>

                    <p>Our team has more than 40 years’ experience in the insurance industry, thus, we are able to give our clients quality, affordable products for your needs.
                    </p>

                </div>
            </div>


             <div className="row">



                <div className="col-md-6 col-lg-3">
                    <div className="sbox-4 wow fadeInUp" data-wow-delay="0.4s">

                    <img className="img-fluid" src={team_1} alt="content-image" />

                        <div className="sbox-4-txt">
                            <h5 className="h5-md lime-color"><a href="our_team_majake.html">Motseki Majake</a></h5>
                            <p>Chief Executive Officer
                            </p>
                        </div>

                    </div>
                </div>


                <div className="col-md-6 col-lg-3">
                    <div className="sbox-4 wow fadeInUp" data-wow-delay="0.6s">

                        <img className="img-fluid" src={team_1} alt="content-image" />

                        <div className="sbox-4-txt">
                            <h5 className="h5-md lime-color"><a href="#">Reuben Phala</a></h5>
                            <p>Commercial Director
                            </p>
                        </div>

                    </div>
                </div>



                <div className="col-md-6 col-lg-3">
                    <div className="sbox-4 wow fadeInUp" data-wow-delay="0.8s">


                        <img className="img-fluid" src={team_1} alt="content-image" />


                        <div className="sbox-4-txt">
                            <h5 className="h5-md lime-color"><a href="#">Duane Donnelly</a></h5>
                            <p>Chief Technology Officer
                            </p>
                        </div>

                    </div>
                </div>



                <div className="col-md-6 col-lg-3">
                    <div className="sbox-4 wow fadeInUp" data-wow-delay="1s">


                        <img className="img-fluid" src={team_1} alt="content-image" />


                        <div className="sbox-4-txt">
                            <h5 className="h5-md lime-color"><a href="#">Morgan Molefe</a></h5>
                            <p>Systems Developer
                            </p>
                        </div>

                    </div>
                </div>


             </div>
         </div>
    </section>



    <section id="banner-2" className="pt-50 banner-section division">
        <div className="bg-scroll bg-inner bg-image division">
            <div className="container white-color">
                <div className="row d-flex align-items-center">



                    <div className="col-lg-5">
                        <div className="banner-2-img">
                            <img className="img-fluid" src="images/image-05.png" alt="banner-image" />
                        </div>
                    </div>



                    <div className="col-lg-6 offset-lg-1">
                        <div className="banner-txt pc-30 wow fadeInUp" data-wow-delay="0.4s">


                             <span className="section-id id-color">Earn Unlimited Income</span>


                            <h3 className="h3-lg">Become an HiA Business Owner</h3>


                            <p>You are just one step away being your own Boss or starting your own Financial Services Business. Signup now and start selling funeral, health and legal insurance policies and earn unlimited income whilst working at the convenience.
                            </p>


                            <a href="all-doctors.html" className="btn btn-tra-white blue-hover">Join Now</a>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>



    <section id="contacts-1" className="wide-60 contacts-section division">
        <div className="container">



            <div className="row">
                <div className="col-lg-10 offset-lg-1 section-title">


                    <h3 className="h3-md steelblue-color">Have a Question? Get In Touch</h3>


                    <p>Have a question? Want to become a business owner selling our insurance products? Give us a call
                       or send an email to contact the Health iAccess.
                    </p>

                </div>
            </div>


            <div className="row">



                 <div className="col-md-5 col-lg-4">


                     <div className="contact-box mb-40">
                        <h5 className="h5-sm steelblue-color">General Enquiries</h5>
                        <p>22 Sloane Street, Bryanston, 2191</p>
                        <p>Johannesburg, 2191 South Africa</p>
                        <p>Phone: +27(0) 11 516 0503</p>
                        <p>WhatsApp: +27(0) 82 289 1681</p>
                        <p>Email: <a href="mailto:info@healthiaccess.co.za" className="blue-color">info@healthiaccess.co.za</a></p>
                     </div>


                     <div className="contact-box mb-40">
                        <h5 className="h5-sm steelblue-color">Business Owners</h5>
                        <p>22 Sloane Street, Bryanston, 2191</p>
                        <p>Johannesburg, 2191 South Africa</p>
                        <p>Phone: +27(0) 11 516 0503</p>
                        <p>WhatsApp: +27(0) 82 289 1681</p>
                        <p>Email: <a href="mailto:benefits@healthiaccess.co.za" className="blue-color">benefits@healthiaccess.co.za</a></p>
                     </div>

                     <div className="contact-box mb-40">
                        <h5 className="h5-sm steelblue-color">Working Hours</h5>
                        <p>Monday – Thur : 8:00 AM - 5:00 PM</p>
                        <p>Friday : 8:00 AM - 3:00 PM</p>
                     </div>

                </div>



                 <div className="col-md-7 col-lg-8">
                     <div className="form-holder mb-40">
                         <form name="contactForm" className="row contact-form">


                            <div id="input-name" className="col-md-12 col-lg-6">
                                <input type="text" name="name" className="form-control name" placeholder="Enter Your Name*" required/>
                            </div>

                            <div id="input-email" className="col-md-12 col-lg-6">
                                <input type="text" name="email" className="form-control email" placeholder="Enter Your Email*" required/>
                            </div>

                            <div id="input-phone" className="col-md-12 col-lg-6">
                                <input type="tel" name="phone" className="form-control phone" placeholder="Enter Your Phone Number*" required/>
                            </div>


                            <div id="input-patient" className="col-md-12 col-lg-6 input-patient">
                                <select id="inlineFormCustomSelect3" name="patient" className="custom-select patient" required>
                                                        <option value="">Have Made Contact Before?</option>
                                                        <option>New Client</option>
                                                        <option>New Business Owner</option>
                                                        <option>Existing Client</option>
                                                        <option>Registered Business Owner</option>
                                                        <option>Other</option>
                                </select>
                            </div>

                            <div id="input-subject" className="col-lg-12">
                                <input type="text" name="subject" className="form-control subject" placeholder="Subject*" required/>
                            </div>

                            <div id="input-message" className="col-lg-12 input-message">
                                <textarea className="form-control message" name="message" rows="6" placeholder="Your Message ..." required></textarea>
                            </div>

                         
                            <div className="col-lg-12 mt-15 form-btn">
                                <button type="submit" className="btn btn-blue blue-hover submit">Send Your Message</button>
                            </div>


                            <div className="col-lg-12 contact-form-msg text-center">
                                <div className="sending-msg"><span className="loading"></span></div>
                            </div>

                        </form>

                     </div>
                 </div>


             </div>


        </div>
    </section>



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



    </>
  )
}
}

export default About