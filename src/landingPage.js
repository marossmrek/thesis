import React from 'react';
import {Link} from 'react-router-dom';

/*
Theme from :
https://colorlib.com/wp/free-bootstrap-landing-pages-templates/
*/

export class LandingPage extends React.Component{

    render() {
        return (
            <div>
                <div className="logo-menu">
                    <nav className="navbar navbar-default navbar-fixed-top" role="navigation" data-spy="affix" data-offset-top="50">
                        <div className="container">
                            <div className="navbar-header col-md-3">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#home">International faculty</a>
                            </div>
                            <div className="collapse navbar-collapse" id="navbar">
                                <ul className="nav navbar-nav col-md-9 pull-right">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#portfolio">Album</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <section id="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="title">Lorem - Lorem ipsum</h1>
                                <h2 className="subtitle">Praesent sapien massa, convallis a pellentesque nec</h2>

                                <img className="col-md-6 col-sm-6 col-xs-12 animated fadeInLeft" src="assets/img/hero/macbook.png" alt="" />

                                    <div className="col-md-6 col-sm-6 col-xs-12 animated fadeInRight delay-0-5">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                        <Link className="btn btn-common btn-lg" to="/login">Login to app</Link>
                                        <a href="#about" className="btn btn-primary btn-lg">Learn More</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="portfolio">
                    <div className="container">
                        <div className="row">
                            <h1 className="title">Album</h1>
                            <h2 className="subtitle">Lorem Ipsum is simply dummy text</h2>

                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="portfolio-item wow fadeInLeft" data-wow-delay=".5s">
                                    <a href=""><img src="assets/img/portfolio/img1.jpg" alt=""/></a>
                                    <div className="overlay">
                                        <div className="icons">
                                            <a data-lightbox="image1" href="assets/img/portfolio/img1.jpg" className="preview"><i className="fa fa-search-plus fa-4x"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="portfolio-item wow fadeInLeft" data-wow-delay=".7s">
                                    <a href=""><img src="assets/img/portfolio/img2.jpg" alt=""/></a>
                                    <div className="overlay">
                                        <div className="icons">
                                            <a data-lightbox="image1" href="assets/img/portfolio/img2.jpg" className="preview"><i className="fa fa-search-plus fa-4x"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="portfolio-item wow fadeInLeft" data-wow-delay=".9s">
                                    <a href=""><img src="assets/img/portfolio/img3.jpg" alt=""/></a>
                                    <div className="overlay">
                                        <div className="icons">
                                            <a data-lightbox="image1" href="assets/img/portfolio/img3.jpg" className="preview"><i className="fa fa-search-plus fa-4x"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInRight" data-wow-delay="1.1s">
                                <div className="portfolio-item">
                                    <a href=""><img src="assets/img/portfolio/img4.jpg" alt=""/></a>
                                    <div className="overlay">
                                        <div className="icons">
                                            <a data-lightbox="image1" href="assets/img/portfolio/img4.jpg" className="preview"><i className="fa fa-search-plus fa-4x"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInRight" data-wow-delay="1.3s">
                                <div className="portfolio-item">
                                    <a href=""><img src="assets/img/portfolio/img5.jpg" alt=""/></a>
                                    <div className="overlay">
                                        <div className="icons">
                                            <a data-lightbox="image1" href="assets/img/portfolio/img5.jpg" className="preview"><i className="fa fa-search-plus fa-4x"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInRight" data-wow-delay="1.5s">
                                <div className="portfolio-item">
                                    <a href=""><img src="assets/img/portfolio/img6.jpg" alt=""/></a>
                                    <div className="overlay">
                                        <div className="icons">
                                            <a data-lightbox="image1" href="assets/img/portfolio/img6.jpg" className="preview"><i className="fa fa-search-plus fa-4x"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section id="about">
                    <div className="container">
                        <div className="row">
                            <h1 className="title">About us</h1>
                            <h2 className="subtitle">Lorem Ipsum is simply dummy text</h2>

                            <div className="col-md-8 col-sm-12">
                                <p> Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit.
                                    Proin eget tortor risus. Donec sollicitudin molestie malesuada.
                                    Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.
                                    Vivamus suscipit tortor eget felis porttitor volutpat.
                                    Curabitur aliquet quam id dui posuere blandit.
                                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                    Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                    Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                                    Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat.
                                </p>
                            </div>

                            <img className="col-md-4 col-md-4 col-sm-12 col-xs-12" src="assets/img/about/graph.png" alt=""/>

                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="container text-center">
                        <div className="row">
                            <h1 className="title">Contact us</h1>

                            <h2 className="subtitle">Lorem Ipsum is simply dummy text</h2>


                            <form role="form" className="contact-form" method="post">
                                <div className="col-md-6 wow fadeInLeft" data-wow-delay=".5s">
                                    <div className="form-group">
                                        <div className="controls">
                                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="controls">
                                            <input type="email" className="form-control email" placeholder="Email" name="email"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="controls">
                                            <input type="text" className="form-control requiredField" placeholder="Subject" name="subject"/>
                                        </div>
                                    </div>

                                    <div className="form-group">

                                        <div className="controls">
                                            <textarea rows="7" className="form-control" placeholder="Message" name="message"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" className="btn btn-lg btn-common">Send</button><div id="success" style={{color:"34495e"}}></div>

                                </div>
                            </form>

                            <div className="col-md-6 wow fadeInRight">
                                <div className="social-links">
                                    <a className="social" target="_blank"><i className="fa fa-facebook fa-2x"></i></a>
                                    <a className="social" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
                                    <a className="social" target="_blank"><i className="fa fa-google-plus fa-2x"></i></a>
                                    <a className="social" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
                                </div>
                                <div className="contact-info">
                                    <p><i className="fa fa-map-marker"></i> Seattle, WA 00000, USA</p>
                                    <p><i className="fa fa-envelope"></i> info@yourwebsite.com</p>
                                </div>

                                <p>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit.<br/>
                                </p>

                            </div>

                        </div>
                    </div>
                </section>

                <div id="copyright">
                    <div className="container">
                        <div className="col-md-10"><p>© International faculty 2017 All right reserved.</p></div>
                        <div className="col-md-2">
                            <span className="to-top pull-right"><a href="home"><i className="fa fa-angle-up fa-2x"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}