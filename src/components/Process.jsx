import { Link } from "react-router-dom"

function Process() {
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="section-title-wrap section-header text-center">
                        <h5 className="custom-primary">How We Do It</h5>
                        <h2 className="title">We Deliver Your Food In 4 Steps</h2>
                        <p className="subtitle">
                            By following these steps, you can ensure a smooth process from ordering to enjoying your pizza, making the entire experience delightful.
                            Share the experience with friends or family for a more enjoyable meal.</p>
                    </div>
                    <div className="row infographics-2">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="ct-infographic-item">
                                <i className="flaticon-online-booking" />
                                <h4>Order</h4>
                                <p>Browse online reviews or ask for recommendations.
                                    Visit the pizzeria's website or app, or call them directly.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="ct-infographic-item">
                                <i className="flaticon-calories" />
                                <h4>Cook</h4>
                                <p>Mix flour, water, yeast, salt, and olive oil.
                                    Knead the dough and let it rise for about 1-2 hours.
                                    Roll out the dough to the desired thickness.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="ct-infographic-item">
                                <i className="flaticon-delivery-man" />
                                <h4>Deliver</h4>
                                <p>Place the hot pizza in an insulated delivery bag to keep it warm.
                                    Ensure the pizza is secure to avoid toppings shifting during transport.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="ct-infographic-item">
                                <i className="flaticon-food-tray" />
                                <h4>Enjoy</h4>
                                <p>Set the table with napkins, plates, and utensils.
Pour drinks (e.g., soda, beer, or wine).Serve hot, ensuring each slice has a good.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="section-btn">
                        <Link to="/menu" className="btn-custom">Order Online</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Process