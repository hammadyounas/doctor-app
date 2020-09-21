import React from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;
const Contact = ({ handleLocation, }) => {
    const callback = (e) => {
        console.log(e)
    }
    return (
        <article
            className="content contact white-bg"
            id="chaptercontact"
            onClick={() => handleLocation("#chaptercontact")}>
            <div className="inner">
                <h2>Get in touch</h2>
                <div className="title-divider"></div>
                <h3>FAQ</h3>
                {/* <!-- <p>আমার সাম্প্রতিক রোগের বিবরণ অথবা মেডিকেল ডকুমেন্টেশন কিভাবে স্বাস্থ্যবই এ আপডেট  হবে?</p> --> */}
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <Collapse defaultActiveKey={['1']} onChange={callback}>
                            <Panel header="সাম্প্রতিক রোগের বিবরণ অথবা মেডিকেল ডকুমেন্টেশন কিভাবে স্বাস্থ্যবই এ আপডেট হবে?" key="1">
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        আপনার সাম্প্রতিক রোগের তথ্য এবং মেডিকেল ডকুমেন্টেশন আমাদের কাছে পৌঁছে দিলে আমাদের ক্লিনিসিয়ানরা তা আপনার স্বাস্থ্যবই এ সংযুক্ত করবেন।
                                     </div>
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                    <div className="card">
                        <Collapse defaultActiveKey={['2']} onChange={callback}>
                            <Panel header="কম্পিউটার এবং মোবাইল ছাড়া আর কিভাবে স্বাস্থ্যবই পাওয়া যাবে?" key="1">
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        স্বাস্থ্যবই পোর্টাল থেকে আপনার স্বাস্থ্যবই পিডিএফ আকারে ডাউনলোড করে প্রিন্ট করে নিতে পারেন। অথবা আমাদের কাস্টমার কেয়ার এ ফোন করে প্রিন্টেড কপি পেতে পারেন।
                                     </div>
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                    <div className="card">
                        <Collapse defaultActiveKey={['3']} onChange={callback}>
                            <Panel header="কি কি ধরণের মেডিকেল ডকুমেন্টেশন স্বাস্থ্যবই এ সংযুক্ত করা যাবে?" key="1">
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        আপনার যে কোনো মেডিকেল ডকুমেন্টেশন যেমন প্রেসক্রিপশন, ল্যাব রিপোর্ট, ECG, X-RAY, MRI রিপোর্ট
                                     </div>
                                </div>
                            </Panel>
                        </Collapse>
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
                                        <div className="flot-left"> <strong>TTrio MedTech Limited</strong><br/>
                                        Rear Of 37 Green Street,<br/>
                                        London, UK, E7 8DA. </div>
                                    </div>
                                    <div className="contact-text">
                                        <div className="col-2 icon-block phone"><i className="fa fa-phone"></i></div>
                                        <div className="flot-left"> <strong>Phone</strong><br/> (+44) 7818833164</div>
                                    </div>
                                    <div className="contact-text">
                                        <div className="col-2 icon-block email"><i className="fa fa-envelope"></i></div>
                                        <div className="flot-left"> <strong>Email</strong>
                                            <a href="mailto:hello@shasthoboi.com"><br/>hello@shasthoboi.com</a>
                                        </div>
                                    </div>
                                    {/* <div className="contact-text"><a href="https://www.facebook.com" target="_blank"><i
                                        className="fa fa-facebook col-2 icon-block"></i></a>
                                        <div className="flot-left"> <strong>facebook page</strong>
                                            <a href="https://www.facebook.com/Shasthoboi-104841131132516" ><br/>Shasthoboi</a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-6 m-margin-top30">
                                    <h3>Our Location map</h3>
                                    <div>
                                        <iframe width="600" height="350" style={{ border: 0 }} src="https://www.google.com/maps/embed/v1/place?q=REAR%20OF%2037%20GREEN%20STREET%2C%20LONDON%2C%20UK%2C%20E7%208DA&key=AIzaSyDACkrHwB6nGN_2nX6RxHZSLfZAgxYJyoA"></iframe>
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
