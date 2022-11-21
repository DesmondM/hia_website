import React, {useState} from 'react';
import data from '../dataFile.json'
import '../styles/menu.css'
import '../styles/animate.css'
import '../styles/bootstrap.min.css'
import '../styles/flaticon.css'
import '../styles/magnific-popup.css'
import '../styles/responsive.css'
import '../styles/style.css'

import '../styles/jquery.datetimepicker.min.css'
import '../styles/owl.carousel.min.css'
import '../styles/owl.theme.default.min.css'
import '../styles/responsive.css'
import '../styles/timetable.css'

import '../styles/dropdown/fade-down.css'
import '../styles/dropdown/fade-left.css'
import '../styles/dropdown/fade-right.css'
import '../styles/dropdown/fade-up.css'
import '../styles/dropdown/rotate-x.css'
import '../styles/dropdown/rotate-y.css'

import logo1 from '../images/logo.png'
import business_owner from '../images/business_owner.jpg'
import insure_funeral from '../images/insure_funeral.jpg'
import who_we_are from '../images/who_we_are.jpg'
import signature1 from '../images/signature1.png'
import funeral_insurance from '../images/funeral_insurance.jpg'
import health_insurance from '../images/health_insurance.jpg'
import legal_insurance from '../images/legal_insurance.jpg'
import footer_log_white from '../images/footer-logo-white.png'
import hero_12 from '../images/hero-12-img.jpg'
import About from './About';
import Funeral from './Funeral';
import Claim from './Claim';
import { Health } from './Health';
import { Legal } from './Legal';
import { Partners } from './Partners';
import { Contact } from './Contact';

const Home = () => {

    const [modalOneIsOpen, setOneIsOpen] = useState(false);
    const [openQueryFields, setOpenQueryFields] = useState(false);
    const [userValues, setUserValues] = useState({
      age: "",
      membership: "",
      cover: "",
    });
 
    const handlePremiumInput = (e)=> {
        e.preventDefault();
        setUserValues({
          ...userValues,
          [e.target.name]: e.target.value,
        });
      };
    
      const openModal = () => {
        setOneIsOpen(true);
      };
      const openFields = () => {
        setOpenQueryFields(true);
      };

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
 }else if(path==='Partners'){
        return <Partners/>
 }else if(path==='Contact'){
        return <Contact/>
    } else{
 return (
 
 <div style={{textAlign:'left'}}>
   
 {/* <div className="loader-wrapper">
    <div className="loader"><div className="loader-inner"></div></div>
</div>  */}


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

                <div className="desktoplogo"><a href="#hero-2"><img src={logo1} style={{float:'left', width:'100'}} height="40" alt="header-logo"/></a></div>


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




    <section id="hero-12" className="bg-blue hero-section division">


        <div className="container">
            <div className="row">
                <div className="col-md-7 col-lg-7">
                    <div className="hero-txt white-color">

                        <h3>Welcome to</h3>
                        <h3>Health iAccess</h3>
                        <p className="p-md">An Integrated Financial Services Company
                        </p>

                        <div className="box-list">
                            <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                            <p className="p-md">Sign up to become a HiA Business Owner and Earn Unlimited Income, or
                            </p>
                        </div>

                        <div className="box-list mb-15">
                            <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                            <p className="p-md">Get an instant quotation for our Insurance Products
                            </p>
                        </div>

                        <a href="about-us.html" className="btn btn-tra-white blue-hover">SignUp</a>

                    </div>
                </div>
            </div>
        </div>

        <div className="hero-12-img" >
          </div>


    </section>




    <section id="about-4" className="wide-60 about-section division">
        <div className="container">
            <div className="row">

                <div className="col-lg-4">
                    <div className="abox-4 mb-40 mt-50 wow fadeInUp" data-wow-delay="0.4s">

                        <img className="img-fluid" src={insure_funeral} alt="about-image" />

                        <div className="abox-4-txt">

                            <h3 className="h2-xs steelblue-color"><a href="all-services.html">Get Instant Funeral or Primary Health Insurance Quote</a></h3>


                            <div className="blog-categories sidebar-div mt-20 mb-50">

                                <ul>
                                    <li><a><i className="fas fa-angle-double-right blue-color"></i> Provide us with few basic details.</a></li>
                                    <li><a><i className="fas fa-angle-double-right blue-color"></i> Get an instant quote.</a></li>
                                    <li><a><i className="fas fa-angle-double-right blue-color"></i> Request a call back or sign up.</a></li>
                                </ul>

                            </div>


                        </div>

                    </div>
                </div>


                <div className="col-lg-4 ">
                    <div id="hero-section-form" className="text-center mb-40 mt-50">
                        <form name="heroForm" className="row hero-form bg-blue wow fadeInUp" data-wow-delay="0.3s">

                    <div className="col-md-12 white-color ">
                                <h4 className="h4-xs">Get a Quote Instantly</h4>
                            </div>

                            <div id="input-name" className="col-lg-12">
                                <input type="text" name="name" className="form-control name" placeholder="Enter Your Full Name*" required/>
                            </div>

                                            <div id="input-doctor" className="col-md-12 input-doctor">
                                <select id="inlineFormCustomSelect2" name="doctor" className="custom-select doctor" required>
                                    <option value="">What are you looking for ?</option>
                                                            <option>Funeral Insurance</option>
                                      <option>Health Insurance</option>
                                      <option>Legal Insurance</option>
                                </select>
                            </div>

                            <div id="input-doctor" className="col-md-12 input-doctor">
                                <select id="inlineFormCustomSelect2"  className="custom-select doctor" required
                                name="cover"
                                onChange={handlePremiumInput}>
                                    <option value={"R15 000"}>Select Amount</option>
                                     
                                      <option value={"R15 000"}>R15 000</option>
                                      <option value={"R20 000"}>R20 000</option>
                                      <option value={"R25 000"}>R25 000</option>
                                      <option value={"R30 000"}>R30 000</option>
                                </select>
                            </div>

                            <div id="input-doctor" className="col-md-12 input-doctor">
                                <select id="inlineFormCustomSelect2"  className="custom-select doctor" required
                                 name="membership"
                                 onChange={handlePremiumInput}
                                >
                                    <option value={"Member Only"}>I want to cover</option>
                                      <option value={"Member Only"}>Member Only</option>
                                      <option value={"Member & Children"}>Member + Children</option>
                                      <option value={"Family"}>Family</option>
                                      <option value={"Extended"}>Extended Family</option>
                                </select>
                            </div>

                            <div id="input-email" className="col-lg-12">
                            <select id="inlineFormCustomSelect2"  className="custom-select doctor" required
                                 name="age"
                                 onChange={handlePremiumInput}
                                >
                                    <option value={"18-64"}>Select your age</option>
                                      <option value={"18-64"}>18-64</option>
                                      <option value={"65-74"}>65-74</option>
                                      <option value={"75-84"}>75-84</option>
                                             </select>
                            
                            
                                  </div>



                            <div className="col-lg-12 form-btn">
                                <button type="submit" className="btn btn-orange tra-white-hover submit">How Much Will I Pay?</button>
                            </div>

                            <div className="col-lg-12 hero-form-msg text-center">
                                <div className="sending-msg"><span className="loading"></span></div>
                            </div>
                             
                            {data
            .filter(
              (record) =>
                record.membershipCover === `${userValues.membership}` &&
                record.payout === `${userValues.cover}` &&
                record.age === `${userValues.age}`
            )
            .map((filteredRecords) => (
              <p style={{color:'#fff',
            
              }}>
                {" "}
                
                <span
                  style={{
                    display: "block",
                    color:'#fff',
                    textAlign:'left',
                    width: "95%",
                    height:'40px',
                    margin: "auto",
                    fontSize: "80px",
                  }}
                >
                 
                  {filteredRecords.premium}
                </span>
                <p style={{ marginRight:'-55px', marginTop:'50px', padding: '0 0 15px 0', float:'center'}}>Per Month</p>
                 <button
                  type="submit" className="btn btn-orange tra-white-hover submit"
                  
                  style={{
                    background:'yellow', border: '2px solid yellow'

                  }}
                  
                ><a href='https://dev.zd-solutions.co.za/ords/plexi/plexi/r/forms/hia-new-funeral/'>
                  Click to Apply
                  </a></button> 
              </p>
            ))}


                        </form>

                     

                    </div>
                </div>


                <div className="col-lg-4">
                    <div className="abox-4 mb-40 mt-50 wow fadeInUp" data-wow-delay="0.4s">

                        <img className="img-fluid" src={business_owner} alt="about-image" />

                        <div className="abox-4-txt">

                            <h3 className="h2-xs steelblue-color"><a href="all-services.html">Become a HiA Business Owner</a></h3>


                            <div className="blog-categories sidebar-div mt-20 mb-50">

                                <ul>
                                    <li><a><i className="fas fa-angle-double-right blue-color"></i> Signup or register online now.</a></li>
                                    <li><a><i className="fas fa-angle-double-right blue-color"></i> Fulfil the requirements.</a></li>
                                    <li><a><i className="fas fa-angle-double-right blue-color"></i> Start selling insurance products.</a></li>
                                    <li><a><i className="fas fa-angle-double-right blue-color"></i> Earn unlimited income.</a></li>
                                    <li><a><i className="fas fa-angle-double-right blue-color"></i> Invite others to join.</a></li>
                                    <li><a><i className="fas fa-angle-double-right blue-color"></i> Grow your business network.</a></li>
                                </ul>

                            </div>



                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>




    <section id="info-4" className="bg-lightgrey wide-60 info-section division">
        <div className="container">
            <div className="row d-flex align-items-center">



                <div className="col-lg-6">
                    <div className="info-4-img mb-40 text-center wow fadeInUp" data-wow-delay="0.6s">
                        <img className="img-fluid" src={who_we_are} alt="info-image"/>
                    </div>
                </div>


                <div className="col-lg-6">
                    <div className="txt-block pc-30 mb-40 wow fadeInUp" data-wow-delay="0.4s">

                    <h3 className="h3-md steelblue-color"><img className="img-fluid" src={signature1} width="275" height="105" alt="HiA" />
                            is an Integrated Financial Services Company.</h3>

                        <p className="mb-30">We are an integrated financial services company. HiA’s mission and vision are rooted in our name of making health and financial services products accessible in the communities we serve, be it individuals or institutions/groups.
                        </p>

                        <p className="mb-30">We started Health iAccess anchored on providing affordable health care products. To that extent, we have partnered with Day1 Health as Primary Health Care provider. The long-term vision is to provide Health Services in an affordable way, be it Personal Health and/or  Financial Health. We have included funeral insurance as part of our offering.
                        </p>

                        <p className="mb-30">By continuously offering a range of products, we make it easy for our customers to fulfill a variety of needs, while providing our business owners with an opportunity to earn across various streams. In essence:
                        </p>



                        <div className="blog-categories sidebar-div mt-10 mb-20">

                            <ul>
                                <li><a><i className="fas fa-angle-double-right blue-color"></i> We partner and source financial services products.</a></li>
                                <li><a><i className="fas fa-angle-double-right blue-color"></i> We distribute innovatively, while driving affordability.</a></li>
                                <li><a><i className="fas fa-angle-double-right blue-color"></i> It easy for communities to access our products.</a></li>
                                <li><a><i className="fas fa-angle-double-right blue-color"></i> Technology is at the heart of what we do!.</a></li>
                            </ul>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    </section>




    <section id="services-5" className="wide-100 services-section division">
        <div className="container">


            <div className="row">
                <div className="col-lg-10 offset-lg-1 section-title">

                    <h3 className="h3-md steelblue-color">Our Products</h3>

                    <p>We offer a range of financial services products that include primary health insurance and funeral insurance. We continuously engage with other parties to bring more innovative products onto our platform; products that cater for a variety of needs within the insurance and financial services space.
                    </p>

                </div>
            </div>

             <div className="row">


                             <div className="col-lg-4">
                     <div className="blog-post wow fadeInUp" data-wow-delay="0.4s">

                         <div className="blog-post-img">
                            <img className="img-fluid" src={funeral_insurance} alt="blog-post-image" />
                        </div>

                        <div className="blog-post-txt">

                            <h5 className="h5-sm steelblue-color"><a href="single-post.html">Funeral Insurance</a></h5>

                            <p>Funeral Insurance Plan that pays cash at competitive premium. We also have plans that cater for Extended Family Members, be it inlaws or parents.
                            </p>

                        </div>

                    </div>
                 </div>

                         <div className="col-lg-4">
                     <div className="blog-post wow fadeInUp" data-wow-delay="0.6s">

                         <div className="blog-post-img">
                            <img className="img-fluid" src={health_insurance} alt="blog-post-image" />
                        </div>

                        <div className="blog-post-txt">

                            <h5 className="h5-sm steelblue-color"><a href="single-post.html">Health Insurance</a></h5>

                            <p>HiA (Health iAccess) have been accredited to sell primary health insurance products administered Day 1 Health. The products covers both day to day doctor visits or emergency hospitalization.
                            </p>

                        </div>

                    </div>
                 </div>

                     <div className="col-lg-4">
                     <div className="blog-post wow fadeInUp" data-wow-delay="0.8s">

                         <div className="blog-post-img">
                            <img className="img-fluid" src={legal_insurance} alt="blog-post-image" />
                        </div>

                        <div className="blog-post-txt">

                            <h5 className="h5-sm steelblue-color"><a href="single-post.html">Legal Insurance</a></h5>

                            <p>For a reasonable amount, our legal cover protects you against litigation that includes civil, labour, or criminal matters at a minimum cost. This products is provided through our product partners.
                            </p>

                        </div>

                    </div>
                 </div>

                </div>

            <div className="row">
            </div>

        </div>
    </section>





    <section id="info-6" className="bg-blue info-section division">


        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-lg-6">
                    <div className="info-9-table white-color wow fadeInUp" data-wow-delay="0.4s">


                        <h3 className="h3-md">BECOME an HiA BUSINESS OWNER</h3>

                        <p>You are few steps away becoming your own Boss or starting your own Financial Services Business. HiA has adopted a network marketing model to drive distribution of financial services products. We go to market through HiA appointed Business Owners (BO) who form an integral part of the HiA distribution eco-system. Some of the benefits for our BOs include:
                        </p>

                        <table className="table">
                            <tbody>
                                <tr>
                                      <td>Introduction to financial services.</td>
                                </tr>
                                <tr>
                                      <td>Opportunity to learn and understand primary health, funeral and other insurance products.</td>
                                </tr>
                                    <tr>
                                      <td>Opportunity to grow in a network marketing company with endless income potential.</td>
                                </tr>
                                    <tr>
                                      <td>Opportunity to make an impact in the community.</td>
                                </tr>
                                <tr>
                                      <td>Manage own time.</td>
                                </tr>
                                <tr>
                                      <td>Earn an income or create an additional income stream.</td>
                                </tr>
                              </tbody>
                        </table>

                        <a href="#" className="btn btn-tra-white blue-hover mb-25 mt-25">Register/Signup</a>




                        <h5 className="h5-sm">Signup now and become a BO today!</h5>



                    </div>
                </div>
            </div>
        </div>

        <div className="info-9-img bg-fixed text-center"></div>

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
                        <p>Email: <a href="mailto:sales@healthiaccess.co.za" className="blue-color">sales@healthiaccess.co.za</a></p>
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
                                    <option value="">Have You Made Contact Before?*</option>
                                    <option>New Business Owner</option>
                                    <option>New Insurance CLient</option>
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

                        <img src={footer_log_white} width="180" height="40" alt="footer-logo"/>

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
export default Home