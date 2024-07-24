import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import SubHeader from "../components/SubHeader"
import TopNav from "../components/TopNav"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { useUserStore } from "../store/useStore"

function UserOrder() {
    let user = useUserStore((state)=>state.user)

    let [orders, setOrders] = useState([])
    useEffect(() => {
        getOrders()
    },[])

    async function getOrders(){
        let colref = collection(db,"orders")
        
        let q = query(colref,where("uid","==",user.uid))
     
        onSnapshot(q, function(snapShot){
            let result = []
            snapShot.docs.forEach((doc) => {
                console.log(doc)
                result.push({id:doc.id,...doc.data()})
            });
            console.log(result)
            setOrders(result)
        })
    }
    return (
        <>
          <TopNav />
            <SubHeader pagetitle="OrderDetails" />
            <section className="section">
                <div className="container">
                    <form method="post">
                        <div className="row">
                            <div className="col-xl-12 checkout-billing">
                                {/* Order Details Start */}
                                <table className="ct-responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Address</th>
                                            <th>Total Price</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {orders && orders.map((order)=> (
                                        <>
                                          <tr>
                                            <td data-title="Product"> 
                                              {order.id}
                                            </td>
                                            <td data-title="Quantity">{order.address}</td>
                                            <td data-title="Total"> <strong>{order.total}$</strong> </td>
                                            <td data-title="Total"> <strong>{order.status}</strong> </td>
                                        </tr>
                                        </>
                                      ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </form>
                </div>
            </section>
        <Footer />

        </>
    )
}

export default UserOrder