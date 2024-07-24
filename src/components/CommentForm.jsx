import { useState } from "react";
import {  db } from "../firebase/firebaseConfig";
import { error, success } from "../utils/messages";
import { addDoc, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";


function CommentForm() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [comment, setComment] = useState("");

    let {id} =  useParams()

    let [stars, setStars] = useState(0);

  
    async function addReview(e) {
        e.preventDefault()
            let colref = collection(db,"reviews")
            try {
            await addDoc(colref,{
                id:Number(id),
                name,
                email,
                comment,
                stars,
            })

            success("Thanks For Review")

            setName("")
            setEmail("")
            setComment("")
            
        } catch (err) {
            error("Registration Failed");
        }
    }


    return (
        <>
          <h4>Leave a Review</h4>
                <div className="ct-rating-wrapper">
                  <div className="ct-rating">
                    <i className={`fas fa-star ${stars >=1 && 'activestars'}`} onClick={() => setStars(1)}/>
                    <i className={`fas fa-star ${stars >=2 && 'activestars'}`} onClick={() => setStars(2)}/>
                    <i className={`fas fa-star ${stars >=3 && 'activestars'}`} onClick={() => setStars(3)}/>
                    <i className={`fas fa-star ${stars >=4 && 'activestars'}`} onClick={() => setStars(4)}/>
                    <i className={`fas fa-star ${stars >=5 && 'activestars'}`} onClick={() => setStars(5)}/>
                  </div>
                  <span>Your Review</span>
                </div>  
            <div className="comment-form">
                <form onSubmit={addReview}>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <input type="text" value={name}    onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Full Name" name="fname" />
                        </div>
                        <div className="col-md-6 form-group">
                            <input type="email" value={email}   onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-md-12 form-group">
                            <textarea className="form-control" value={comment}   onChange={(e) => setComment(e.target.value)}  placeholder="Type your comment..." name="comment" rows={7} />
                        </div>
                    </div>
                    <button type="submit" className="btn-custom primary" name="button">Post Review</button>
                </form>
            </div>
        </>
    )
}

export default CommentForm