import { useParams } from "react-router-dom"
import { menu } from "../data/db"
import Navbar from "../components/Navbar"
import TopNav from "../components/TopNav"
import Footer from "../components/Footer"
import SubHeader from "../components/SubHeader"
import CommentForm from "../components/CommentForm"
import Commentlist from "../components/Commentlist"
import { useState } from "react"
import { useCartStore } from "../store/cartStore"


function UsermenuDetails() {

  let { id } = useParams()

  let pizza = menu.find((pizza) => pizza.id == id)

  let [size, setSize] = useState(11)

  let [add1, setAdd1] = useState(0)
  let [add2, setAdd2] = useState(0)
  let [add3, setAdd3] = useState(0)
  let [add4, setAdd4] = useState(0)

  let [cheese1, setCheese1] = useState(0)
  let [cheese2, setCheese2] = useState(0)
  let [cheese3, setCheese3] = useState(0)
  let [cheese4, setCheese4] = useState(0)

  function selectSize(s) {
    setSize(s)
  }

  let [price, setPrice] = useState(pizza.price)
  let [quantity, setQuantity] = useState(1)
  let [dough, setDough] = useState(0)
  let [crust,setCrust] = useState(0)

  function increment(amt){
   let fprice =  (pizza.price + amt + crust + add1 + add2 + add3 + add4 + cheese1 + cheese2 + cheese3 + cheese4 + dough ) * quantity
      setPrice(fprice)
  }

  let addToCart = useCartStore((state)=>state.addToCart)
  
  function addpizza(e){
    e.preventDefault()
    addToCart({...pizza,quantity:quantity,tprice:price })
}

  return (
    <>
      <Navbar />
      <div className="aside-overlay aside-trigger" />
      {/* Header Start */}
      <TopNav />

      <SubHeader pagetitle="UsermenuDetails"/>
      {/* Subheader End */}
      <div className="section product-single">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              {/* Main Thumb */}
              <div className="product-thumb">
                <img src={pizza.url} alt="pizza" />
              </div>
              {/* /Main Thumb */}
            </div>
            <div className="col-md-7">
              <div className="product-content">
                {/* Product Title */}
                <h2 className="title">{pizza.title}</h2>
                {/* /Product Title */}
                <div className="favorite">
                  <i className="far fa-heart" />
                </div>
                {/* Rating */}
                <div className="ct-rating-wrapper">
                  <div className="ct-rating">
                    <i className="fas fa-star active" />
                    <i className="fas fa-star active" />
                    <i className="fas fa-star active" />
                    <i className="fas fa-star active" />
                    <i className="fas fa-star" />
                  </div>
                  <span>(24 ratings)</span>
                </div>
                {/* /Rating */}
                {/* Price */}
                <div className="price-wrapper">
                  <p className="product-price">{price}$</p>
                </div>
                {/* /Price */}
                {/* Product Short Description */}
                <p>{pizza.description}</p>
                {/* /Product Short Description */}
                {/* Variations */}
                <div className="customize-variations">
                  <div className="customize-size-wrapper">
                    <h5>Size: </h5>
                    <div className={`customize-size ${size == 11 && "active"}`} onClick={() =>{
                       selectSize(11)
                       increment(0)
                    }} >
                      11
                    </div>
                    <div className={`customize-size ${size == 16 && "active"}`} onClick={() => {
                      selectSize(16) 
                      increment(4)
                    }}>
                      16
                    </div>
                    <div className={`customize-size ${size == 21 && "active"}`} onClick={() => {
                      selectSize(21)
                      increment(6)
                    }}>
                      21
                    </div>
                  </div>
                  <div className="row">
                    {/* Variation Start */}
                    <div className="col-lg-6 col-12">
                      <div className="customize-variation-wrapper">
                        <i className="flaticon-bread-roll" />
                        <h5>Dough</h5>
                        <div className="customize-variation-item" data-price={0.00}>
                          <div className="custom-control custom-radio">
                            <input onChange={(e)=>{
                              if(e.target.checked){
                                  setDough(0)
                              }else{
                                  setDough(0)
                              }
                           }} type="radio"  id="regularDough1" name="dough1" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="regularDough1">Regular</label>
                          </div>
                          <span>+0.00$</span>
                        </div>
                        <div className="customize-variation-item" data-price={2.00}>
                          <div className="custom-control custom-radio">
                            <input  onChange={(e)=>{
                              if(e.target.checked){
                                  setDough(2)
                              }else{
                                  setDough(0)
                              }
                            }} type="radio" id="thinDough1" name="dough1" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="thinDough1">Hand Flipped</label>
                          </div>
                          <span>+2.00$</span>
                        </div>
                        <div className="customize-variation-item" data-price={4.00}>
                          <div className="custom-control custom-radio">
                            <input onChange={(e)=>{
                              if(e.target.checked){
                                  setDough(4)
                              }else{
                                  setDough(0)
                              }
                            }} type="radio" id="multiGrainDough1" name="dough1" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="multiGrainDough1">Multi Grain</label>
                          </div>
                          <span>+4.00$</span>
                        </div>
                      </div>
                    </div>
                    {/* Variation End */}
                    {/* Variation Start */}
                    <div className="col-lg-6 col-12">
                      <div className="customize-variation-wrapper">
                        <i className="flaticon-pizza-slice" />
                        <h5>Crust</h5>
                        <div className="customize-variation-item" data-price={4.00}>
                          <div className="custom-control custom-radio">
                            <input  onChange={(e)=>{
                              if(e.target.checked){
                                  setCrust(4)
                              }else{
                                  setCrust(0)
                              }
                            }} type="radio" id="cheeseCrust1" name="crust1" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="cheeseCrust1">Cheese</label>
                          </div>
                          <span>+4.00$</span>
                        </div>
                        <div className="customize-variation-item" data-price="3.25">
                          <div className="custom-control custom-radio">
                            <input onChange={(e)=>{
                              if(e.target.checked){
                                  setCrust(3.25)
                              }else{
                                  setCrust(0)
                              }
                            }} type="radio" id="butterCrust1" name="crust1" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="butterCrust1">Butter</label>
                          </div>
                          <span>+3.25$</span>
                        </div>
                      </div>
                    </div>
                    {/* Variation End */}
                    {/* Variation Start */}
                    <div className="col-lg-6 col-12">
                      <div className="customize-variation-wrapper">
                        <i className="flaticon-pizza-and-cutted-slice" />
                        <h5>Add</h5>
                        <div className="customize-variation-item" data-price={2.00}>
                          <div className="custom-control custom-checkbox">
                            <input onChange={(e)=>setAdd1(2)} type="checkbox" className="custom-control-input" id="addChicken1" />
                            <label className="custom-control-label" htmlFor="addChicken1">Chicken</label>
                          </div>
                          <span>+2.00$</span>
                        </div>
                        <div className="customize-variation-item" data-price="1.20">
                          <div className="custom-control custom-checkbox">
                            <input onChange={(e)=>setAdd2(1.2)} type="checkbox" className="custom-control-input" id="addFourCheese1" />
                            <label className="custom-control-label" htmlFor="addFourCheese1">Four Cheese</label>
                          </div>
                          <span>+1.20$</span>
                        </div>
                        <div className="customize-variation-item" data-price="0.75">
                          <div className="custom-control custom-checkbox">
                            <input onChange={(e)=>setAdd3(0.75)} type="checkbox" className="custom-control-input" id="addFreshMushroom1" />
                            <label className="custom-control-label" htmlFor="addFreshMushroom1">Fresh Mushroom</label>
                          </div>
                          <span>+0.75$</span>
                        </div>
                        <div className="customize-variation-item" data-price="0.25">
                          <div className="custom-control custom-checkbox">
                            <input onChange={(e)=>setAdd4(0.25)} type="checkbox" className="custom-control-input" id="addBellPepper1" />
                            <label className="custom-control-label" htmlFor="addBellPepper1">Bell Peppers</label>
                          </div>
                          <span>+0.25$</span>
                        </div>
                      </div>
                    </div>
                    {/* Variation End */}
                    {/* Variation Start */}
                    <div className="col-lg-6 col-12">
                      <div className="customize-variation-wrapper">
                        <i className="flaticon-cheese" />
                        <h5>Cheese</h5>
                        <div className="customize-variation-item" data-price={1.00}>
                          <div className="custom-control custom-checkbox">
                            <input onChange={(e)=>setCheese1(1)} type="checkbox" className="custom-control-input" id="cheeseMozarella1" />
                            <label className="custom-control-label" htmlFor="cheeseMozarella1">Mozarella</label>
                          </div>
                          <span>+1.00$</span>
                        </div>
                        <div className="customize-variation-item" data-price="1.25">
                          <div className="custom-control custom-checkbox">
                            <input onChange={(e)=>setCheese2(1.25)} type="checkbox" className="custom-control-input" id="cheeseCheddar1" />
                            <label className="custom-control-label" htmlFor="cheeseCheddar1">Cheddar</label>
                          </div>
                          <span>+1.25$</span>
                        </div>
                        <div className="customize-variation-item" data-price="3.75">
                          <div className="custom-control custom-checkbox">
                            <input onChange={(e)=>setCheese3(3.75)} type="checkbox" className="custom-control-input" id="cheeseGruyer1" />
                            <label className="custom-control-label" htmlFor="cheeseGruyer1">Gruyere</label>
                          </div>
                          <span>+3.75$</span>
                        </div>
                        <div className="customize-variation-item" data-price="0.25">
                          <div className="custom-control custom-checkbox">
                            <input onChange={(e)=>setCheese4(0.25)} type="checkbox" className="custom-control-input" id="cheeseBlueCheese1" />
                            <label className="custom-control-label" htmlFor="cheeseBlueCheese1">Blue Cheese</label>
                          </div>
                          <span>+0.25$</span>
                        </div>
                      </div>
                    </div>
                    {/* Variation End */}
                  </div>
                </div>
                {/* /Variations */}
                {/* Add To Cart Form */}
                <form className="atc-form" >
                  <div className="form-group">
                    <label>Quantity</label>
                    <div className="qty">
                      <span onClick={()=>setQuantity(quantity-1)} className="qty-subtract"><i className="fas fa-minus" /></span>
                      <input type="text" name="qty" value={quantity} />
                      <span onClick={()=>setQuantity(quantity+1)} className="qty-add"><i className="fas fa-plus" /></span>
                    </div>
                  </div>
                  <button onClick={addpizza} type="submit" name="button" className="btn-custom secondary"> Order <i className="fas fa-shopping-cart" /> </button>
                </form>
                {/* /Add To Cart Form */}
                {/* Product Meta */}
                <ul className="product-meta">
                  <li>
                    <span>Categories: </span>
                    <div className="product-meta-item">
                      <a href="#">Pizza</a>
                    </div>
                  </li>
                  <li>
                    <span>Tags: </span>
                    <div className="product-meta-item">
                      <a href="#">Pizza</a>,
                      <a href="#">Cheese</a>,
                      <a href="#">Cheesy Crusts</a>
                    </div>
                  </li>
                  <li>
                    <span>SKU: </span>
                    <div className="product-meta-item">
                      <span>N/A</span>
                    </div>
                  </li>
                </ul>
                {/* /Product Meta */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section pt-0">
        <div className="container">
          {/* Additional Information Start */}
          <div className="product-additional-info">
            <ul className="nav" id="bordered-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="tab-product-desc-tab" data-bs-toggle="pill" href="#tab-product-desc" role="tab" aria-controls="tab-product-desc" aria-selected="true">Description</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tab-product-reviews-tab" data-bs-toggle="pill" href="#tab-product-reviews" role="tab" aria-controls="tab-product-reviews" aria-selected="false">Reviews (25)</a>
              </li>
            </ul>
            <div className="tab-content" id="bordered-tabContent">
              <div className="tab-pane fade show active" id="tab-product-desc" role="tabpanel" aria-labelledby="tab-product-desc-tab">
                <h4>Description</h4>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica
              </div>
              <div className="tab-pane fade" id="tab-product-reviews" role="tabpanel" aria-labelledby="tab-product-reviews-tab">
              
                {/* Review Form start */}
                <CommentForm />
                {/* Review Form End */}
                {/* Reviews Start */}
                <Commentlist /> 
                {/* Reviews End */}
              </div>
            </div>
          </div>
          {/* Additional Information End */}
        </div>
      </div>
      {/* Related Start */}
      <div className="section section-padding related-products pt-0">
        <div className="container">
          <h3>You might also like</h3>
          <div className="row menu-v2">
            {/* Product Start */}
            <div className="col-lg-4 col-md-6">
              <div className="product">
                <div className="favorite">
                  <i className="far fa-heart" />
                </div>
                <a className="product-thumb" href="menu-item-v1.html"> <img src="/slices/assets/img/prods-sm/1.png" alt="menu item" /> </a>
                <div className="product-body">
                  <div className="product-desc">
                    <h4> <a href="menu-item-v1.html">Four Cheese</a> </h4>
                    <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc</p>
                    <a href="#" className="btn-custom light btn-sm shadow-none" data-bs-toggle="modal" data-bs-target="#customizeModal"> Customize <i className="fas fa-plus" /> </a>
                  </div>
                  <div className="product-controls">
                    <p className="product-price">12.99$</p>
                    <a href="#" className="order-item btn-custom btn-sm shadow-none">Order <i className="fas fa-shopping-cart" /> </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Product End */}
            {/* Product Start */}
            <div className="col-lg-4 col-md-6">
              <div className="product">
                <div className="favorite">
                  <i className="far fa-heart" />
                </div>
                <a className="product-thumb" href="menu-item-v1.html"> <img src="/slices/assets/img/prods-sm/2.png" alt="menu item" /> </a>
                <div className="product-body">
                  <div className="product-desc">
                    <h4> <a href="menu-item-v1.html">Barbqeue Chicken</a> </h4>
                    <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc</p>
                    <a href="#" className="btn-custom light btn-sm shadow-none" data-bs-toggle="modal" data-bs-target="#customizeModal"> Customize <i className="fas fa-plus" /> </a>
                  </div>
                  <div className="product-controls">
                    <p className="product-price">12.99$</p>
                    <a href="#" className="order-item btn-custom btn-sm shadow-none">Order <i className="fas fa-shopping-cart" /> </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Product End */}
            {/* Product Start */}
            <div className="col-lg-4 col-md-6">
              <div className="product">
                <div className="favorite">
                  <i className="far fa-heart" />
                </div>
                <a className="product-thumb" href="menu-item-v1.html"> <img src="/slices/assets/img/prods-sm/5.png" alt="menu item" /> </a>
                <div className="product-body">
                  <div className="product-desc">
                    <h4> <a href="menu-item-v1.html">Vegetarian</a> </h4>
                    <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc</p>
                    <a href="#" className="btn-custom light btn-sm shadow-none" data-bs-toggle="modal" data-bs-target="#customizeModal"> Customize <i className="fas fa-plus" /> </a>
                  </div>
                  <div className="product-controls">
                    <p className="product-price">12.99$</p>
                    <a href="#" className="order-item btn-custom btn-sm shadow-none">Order <i className="fas fa-shopping-cart" /> </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Product End */}
          </div>
        </div>
      </div>

      <Footer />


    </>
  )
}

export default UsermenuDetails