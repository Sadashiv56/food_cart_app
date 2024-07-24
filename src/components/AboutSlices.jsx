import { Link } from "react-router-dom"

function AboutSlices() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
              <img src="slices/assets/img/auth.jpg" alt="img" />
              <div className="ct-dots" />
            </div>
            <div className="col-lg-6">
              <div className="section-title-wrap mr-lg-30">
                <h5 className="custom-primary">About Us</h5>
                <h2 className="title">Serving Pizzas By The Slice Since 1987</h2>
                <p className="subtitle">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p className="subtitle">
                  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
                </p>
                <div className="signature">
                  <img src="slices/assets/img/signature.png" alt="signature" />
                </div>
                <Link to="/menu" className="btn-custom">Check our Menu</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutSlices