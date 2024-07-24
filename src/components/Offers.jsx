import { Link } from "react-router-dom"

function Offers(){
    return (
        <>
          <div className="section light-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30">
                            <img src="/slices/assets/img/misc/cta2.png" alt="img" />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30">
                                <h5 className="custom-primary">Great Offer</h5>
                                <h2 className="title">Buy 1 Get 1 Free</h2>
                                <p className="subtitle">
                                Deal: Purchase one pizza and get another pizza of equal or lesser value for free.
Availability: Specific days of the week or during promotional periods.
Conditions: May require a coupon code, online order, or minimum purchase amount.
                                </p>
                                <p className="subtitle">
                                Choose two pizzas, one to pay for and one for free.
                                Customize each pizza with your preferred crust, sauce, cheese, and toppings.
                                </p>
                                <Link to="/menu" className="btn-custom">Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Offers  