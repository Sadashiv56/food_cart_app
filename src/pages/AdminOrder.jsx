import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import SubHeader from "../components/SubHeader"
import TopNav from "../components/TopNav"
import { collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { useUserStore } from "../store/useStore"
import { success } from "../utils/messages"

function AdminOrder() {
    let user = useUserStore((state) => state.user)
    let [orders, setOrders] = useState([])

    useEffect(() => {
        getOrders()
    }, [])

    async function getOrders() {
        let colref = collection(db, "orders")



        onSnapshot(colref, function (snapShot) {
            let result = []
            snapShot.docs.forEach((doc) => {
                console.log(doc)
                result.push({ id: doc.id, ...doc.data() })
            })
            console.log(orders)
            setOrders(result)
        })
    }
    async function updateStatus(id, status) {
        console.log(id, status)
        let docref = doc(db, "orders", id)
        await updateDoc(docref, {
            status: status
        })
        success("Order Status Updated")
    }

    async function removeOrder(id) {
        let docref = doc(db, "orders", id)
        await deleteDoc(docref)
    }
    return (
        <>
            <TopNav />
            <SubHeader pagetitle="adminorder" />
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
                                            <th>Product</th>
                                            <th>Total Price</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders && orders.map((order) => (
                                            <>
                                                <tr>
                                                    <td data-title="Product">
                                                        {order.id}
                                                    </td>
                                                    <td data-title="Quantity">{order.address}</td>
                                                    <td data-title="Total"> <strong>{order.total}$</strong> </td>
                                                    <td data-title="Total">
                                                        <select value={order.status} onChange={(e) => {
                                                            updateStatus(order.id, e.target.value)
                                                        }}>
                                                            <option value="Placed">Placed</option>
                                                            <option value="Delivered">Delivered</option>
                                                            <option value="Completed">Completed</option>
                                                        </select>
                                                    </td>
                                                    <td data-title="Delete" className="remove">
                                                        <button onClick={() => { removeOrder(order.id) }} type="button" className="close-btn close-danger remove-from-cart">
                                                            <span />
                                                            <span />
                                                        </button>
                                                    </td>
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

export default AdminOrder