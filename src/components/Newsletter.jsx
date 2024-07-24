import { useState } from "react"
import { error, success } from "../utils/messages"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

function Newsletter() {

    let [email, setEmail] = useState("")

    async function signup(e) {
        e.preventDefault()
        if (email == "") {
            error("Please enter email for signup!")
            return
        }
        try {
            let colref = collection(db, "newsletter")
            await addDoc(colref, { email: email })
            success("Thank You for Subscribing!")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <section className="section bg-center bg-cover dark-overlay" style={{ backgroundImage: 'url("/slices/assets/img/bg/1.jpg")' }}>
                <div className="container">
                    <div className="ct-newsletter">
                        <div className="section-title-wrap section-header">
                            <h2 className="title">Join Our Newsletter</h2>
                            <p className="subtitle">
                                Welcome to the July edition of the Pizza Paradise newsletter! We hope you’re enjoying your summer and staying cool. We have some exciting news, delicious deals, and mouth-watering recipes to share with you this month. Let's dive in!
                            </p>
                        </div>
                        <form onSubmit={signup}>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your email address" defaultValue />
                            <button type="submit" className="btn-custom primary" name="button"> Submit <i className="far fa-paper-plane" /> </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Newsletter