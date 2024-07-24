import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import TopNav from "../components/TopNav"

function UserContact() {
    return (
        <>
        <div>
            <TopNav />
            <div className="contact-wrapper">
                <div className="ct-contact-map-wrapper">
                    {/* <div id="contactPageMap" className="ct-contact-map" /> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8143289726486!2d72.921762575077!3d22.548626979508796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4f9b4f29c001%3A0x6f36f98b301bc841!2sUltron%20Technologies%20-%20Ethical%20Hacking%20%7C%20Coding%20Classes%20%7C%20Summer%20Internship%20%7C%20Graphic%20Design%20%7C%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1719140849021!5m2!1sen!2sin" width="100%" height={850} allowfullscreen="" loading="lazy" ></iframe>
                </div>
                <div className>
                    <div className="section section-padding">
                        <div className="container">
                            <div className="contact-info">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="ct-info-box">
                                            <i className="flaticon-location" />
                                            <h5>Find Us</h5>
                                            <span>445 Mount Eden Road, Mount Eden</span>
                                            <span>21 Greens Road RD 2 Ruawai 0592</span>
                                            <span> +123 456 789 </span>
                                            <span> info@example.com </span>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="ct-info-box">
                                            <i className="flaticon-online-booking" />
                                            <h5>Opening Hours</h5>
                                            <span><span>Mon - Wed:</span> 8:00am - 8:00pm</span>
                                            <span><span>Thu:</span> 8:00am - 5:00pm</span>
                                            <span><span>Fri:</span> 8:00am - 8:00pm</span>
                                            <span><span>Sat - Sun:</span> 8:00am - 2:00pm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
            <Footer />
            </div>
        </>
    )
}

export default UserContact