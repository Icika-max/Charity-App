import React from "react";
import './contact.css'

function Contacts(){
    return (
        <div className="contact-info">
            <div className="head pb-5">
                <div className="container py-5">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="font-weight-light text-center py-3">CONTACT US</h1>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="row pt-3">
                                        <div className="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                                            <span className="image-logos"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                        </div>
                                        <div className="col-lg-10 col-md-9 col-sm-9 col-9">
                                            <h3 className="font-weight-light">FIND US AT THE OFFICE</h3>
                                            <p>Moringa School, Ngong Lane plaza,<br/> Nairobi,<br/> Kenya</p>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                                            <span className="image-logos"><i class="fa fa-address-book" aria-hidden="true"></i></span>
                                        </div>
                                        <div className="col-lg-10 col-md-9 col-sm-9 col-9">
                                            <h3 className="font-weight-light">CALL US THROUGH</h3>
                                            <p>George Karanja<br/> +254 727 446 611,<br/> Mon-Fri, 8:00 - 17:00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                                                <label className="form-label" htmlFor="first-name-input">First Name</label>
                                                <input type="text" id="first-name-input" className="form-control" placeholder="First Name"/>
                                            </div>
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                                                <label className="form-label" htmlFor="last-name-input">Last Name</label>
                                                <input type="text" id="last-name-input" className="form-control" placeholder="Last Name"/>
                                            </div>
                                        </div>
                                        <label htmlFor="email-input">Email</label>
                                        <input id="email-input" className="form-control" type="Email" placeholder ="Example: johnjohn@gmail.com"/>
                                        <label htmlFor="message-input">Your Message</label>
                                        <textarea  className="form-control mb3" id="message-input" cols="10" rows="6" placeholder="Message goes here"></textarea>
                                        <input type="checkbox"/><label>I'm not a robot</label><br/><button className="btn btn-primary float-right">Submit Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts