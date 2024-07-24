import { useState } from "react"
import Footer from "../components/Footer"
import SubHeader from "../components/SubHeader"
import TopNav from "../components/TopNav"
import { useUserStore } from "../store/useStore"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { error, success } from "../utils/messages"
import { useCartStore } from "../store/cartStore"
import { useNavigate } from "react-router-dom"

function UserCheckout() {
    let [fname,setFname] = useState("")
    let [lname,setLname] = useState("")
    let [company,setCompany] = useState("")
    let [address,setAddress] = useState("")
    let [city,setCity] = useState("")
    let [phone,setPhone] = useState("")
    let [email,setEmail] = useState("")
    let [notes,setNotes] = useState("")


    let user = useUserStore((state)=>state.user)
    let cart = useCartStore((state)=>state.cart)
    let total = useCartStore((state)=>state.total)
    let clearCart = useCartStore((state)=>state.clearCart)
    
    let navigate = useNavigate()
    
    async function checkout(e){
        e.preventDefault()
        
        try {
            let colref = collection(db,"orders")
            await addDoc(colref,{
                uid:user.uid,
                fname,
                lname,
                company,
                address,
                city,
                phone,
                email,
                notes,
                items:cart,
                total,
                status:"Placed"
            })
            success("Thank Your Order Have Been Recieved")
            clearCart()
            navigate("/order")
        } catch (err) {
            error("Order Failed")
        }
    }
    return (
        <>
            <div className="aside-overlay aside-trigger" />
            <TopNav />
            <SubHeader pagetitle="Checkout" />
            <section className="section">
                <div className="container">
                    <form onSubmit={checkout}>
                        <div className="row">
                            <div className="col-xl-12">
                                <h4>Billing Details</h4>
                                <div className="row">
                                    <div className="form-group col-xl-6">
                                        <label>First Name <span className="text-danger">*</span></label>
                                        <input value={fname} onChange={ (e)=>setFname(e.target.value) } type="text" placeholder="First Name" name="fname" className="form-control"  />
                                    </div>
                                    <div className="form-group col-xl-6">
                                        <label>Last Name <span className="text-danger">*</span></label>
                                        <input value={lname} onChange={ (e)=>setLname(e.target.value) } type="text" placeholder="Last Name" name="lname" className="form-control"  />
                                    </div>
                                    <div className="form-group col-xl-12">
                                        <label>Company Name</label>
                                        <input value={company} onChange={ (e)=>setCompany(e.target.value) } type="text" placeholder="Company Name (Optional)" name="cname" className="form-control"  />
                                    </div>
                                    <div className="form-group col-xl-12">
                                        <label>Street Address <span className="text-danger">*</span></label>
                                        <input value={address} onChange={ (e)=>setAddress(e.target.value) } type="text" placeholder="Street Address One" name="addr-1" className="form-control"  />
                                    </div>
                                    <div className="form-group col-xl-12">
                                        <label>Town / City <span className="text-danger">*</span></label>
                                        <input value={city} onChange={ (e)=>setCity(e.target.value) } type="text" placeholder="Town/City" name="town" className="form-control"  />
                                    </div>
                                    <div className="form-group col-xl-6">
                                        <label>Phone Number <span className="text-danger">*</span></label>
                                        <input value={phone} onChange={ (e)=>setPhone(e.target.value) }  type="text" placeholder="Phone Number" name="phone" className="form-control"  />
                                    </div>
                                    <div className="form-group col-xl-6">
                                        <label>Email Address <span className="text-danger">*</span></label>
                                        <input value={email} onChange={ (e)=>setEmail(e.target.value) } type="email" placeholder="Email Address" name="email" className="form-control"  />
                                    </div>
                                    <div className="form-group col-xl-12 mb-0">
                                        <label>Order Notes</label>
                                        <textarea value={notes} onChange={ (e)=>setNotes(e.target.value) } name="name" rows={5} className="form-control" placeholder="Order Notes (Optional)"  />
                                    </div>
                                </div>
                                {/* /Buyer Info */}
                            </div>
                            <p className="small">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a className="btn-link" href="#">privacy policy.</a> </p>
                                <button type="submit" className="btn-custom primary btn-block">Place Order</button>
                        </div>
                    </form>
                </div>
            </section>
            {/* Checkout End */}
        
            <Footer />

        </>
    )
}
export default UserCheckout