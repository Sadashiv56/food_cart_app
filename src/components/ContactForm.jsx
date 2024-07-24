import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { success } from "../utils/messages"
import { db } from "../firebase/firebaseConfig"

function ContactForm() {
    let [fname,setFname] = useState("")
    let [lname,setLname] = useState("")
    let [email,setEmail] = useState("")
    let [subject,setSubject] = useState("")
    let [msg,setMsg] = useState("")

    async function send(e) {
        e.preventDefault()
        let colref = collection(db,"contact")

        await addDoc(colref,{
            fname,
            lname,
            email,
            subject,
            msg
        })
        success("Thank You For Contacting Us")
        setFname("")
        setLname("")
        setEmail("")
        setSubject("")
        setMsg("")
    }
    return (
        <>
            <div className="section pt-0">
                <div className="container">
                    <div className="section-title-wrap">
                        <h2 className="title">Send us a Message </h2>
                        <p className="subtitle">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. There are many variations of passages
                        </p>
                    </div>
                    <form onSubmit={send}>
                        <div className="row">
                            <div className="form-group col-lg-6">
                                <input value={fname} onChange={(e)=>setFname(e.target.value)} type="text" placeholder="First Name" className="form-control" name="fname"  />
                            </div>
                            <div className="form-group col-lg-6">
                                <input value={lname} onChange={(e)=>setLname(e.target.value)} type="text" placeholder="Last Name" className="form-control" name="lname"  />
                            </div>
                            <div className="form-group col-lg-12">
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email Address" className="form-control" name="email"  />
                            </div>
                            <div className="form-group col-lg-12">
                                <input  value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" placeholder="Subject" className="form-control" name="subject"  />
                            </div>
                            <div className="form-group col-lg-12">
                                <textarea value={msg} onChange={(e)=>setMsg(e.target.value)}  name="message" className="form-control" placeholder="Type your message" rows={8}  />
                            </div>
                        </div>
                        <button type="submit" className="btn-custom primary" name="button">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm