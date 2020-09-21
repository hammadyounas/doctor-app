import React from 'react'

const Contact = () => {
    return (
        <article className="content contact white-bg" id="chaptercontact" >
            <div className="inner">
                <h2>Get in touch</h2>
                <div className="title-divider"></div>
                <h3>FAQ</h3>
                {/* <!-- <p>আমার সাম্প্রতিক রোগের বিবরণ অথবা মেডিকেল ডকুমেন্টেশন কিভাবে স্বাস্থ্যবই এ আপডেট  হবে?</p> --> */}
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    সাম্প্রতিক রোগের বিবরণ অথবা মেডিকেল ডকুমেন্টেশন কিভাবে স্বাস্থ্যবই এ আপডেট হবে?
                    </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                আপনার সাম্প্রতিক রোগের তথ্য এবং মেডিকেল ডকুমেন্টেশন আমাদের কাছে পৌঁছে দিলে আমাদের ক্লিনিসিয়ানরা তা আপনার স্বাস্থ্যবই এ সংযুক্ত করবেন।
                  </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    কম্পিউটার এবং মোবাইল ছাড়া আর কিভাবে স্বাস্থ্যবই পাওয়া যাবে?
                    </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                স্বাস্থ্যবই পোর্টাল থেকে আপনার স্বাস্থ্যবই পিডিএফ আকারে ডাউনলোড করে প্রিন্ট করে নিতে পারেন। অথবা আমাদের কাস্টমার কেয়ার এ ফোন করে প্রিন্টেড কপি পেতে পারেন।
                  </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    কি কি ধরণের মেডিকেল ডকুমেন্টেশন স্বাস্থ্যবই এ সংযুক্ত করা যাবে?
                    </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                আপনার যে কোনো মেডিকেল ডকুমেন্টেশন যেমন প্রেসক্রিপশন, ল্যাব রিপোর্ট, ECG, X-RAY, MRI রিপোর্ট
                  </div>
                        </div>
                    </div>
                </div>
                <div className="full-divider"></div>
                <div className="contact-con margin-top50">
                    <div className="container-sub">
                        <div className="row">
                            <div className="contact-details">
                                <div className="col-6">
                                    <div className="contact-text">
                                        <div className="col-2 icon-block address"><i className="fa fa-map-marker"></i></div>
                                        <div className="flot-left"> <strong>Trio MedTech Limited</strong>
                                            PO Box 11111 Uttara,
                            Dhaka 1207, Bangladesh. </div>
                                    </div>
                                    <div className="contact-text">
                                        <div className="col-2 icon-block phone"><i className="fa fa-phone"></i></div>
                                        <div className="flot-left"> <strong>Phone</strong>
                                            +880-456-7890 </div>
                                    </div>
                                    <div className="contact-text">
                                        <div className="col-2 icon-block email"><i className="fa fa-envelope"></i></div>
                                        <div className="flot-left"> <strong>Email</strong>
                                            <a href="mailto:hello@shasthoboi.com">hello@shasthoboi.com</a>
                                        </div>
                                    </div>
                                    <div className="contact-text"><a href="https://www.facebook.com" target="_blank"><i
                                        className="fa fa-facebook col-2 icon-block"></i></a>
                                        <div className="flot-left"> <strong>facebook page</strong>
                                            <a href="https://www.facebook.com/Shasthoboi-104841131132516" >Shasthoboi</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 m-margin-top30">
                                    <h3>Our Location map</h3>
                                    <div>
                                        <iframe width="600" height="350" style={{ border: 0 }} src="https://www.google.com/maps/embed/v1/place?q=place_id:Eh1Mb25nIFdhbGssIE5ldyBNYWxkZW4gS1QzLCBVSyIuKiwKFAoSCWX9CLNnCXZIEXfeP0vebhD1EhQKEgmpkcdCETtaAhF6JYgyQ6D4xA&key=AIzaSyDACkrHwB6nGN_2nX6RxHZSLfZAgxYJyoA" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Contact
