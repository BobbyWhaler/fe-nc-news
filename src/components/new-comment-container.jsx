import { useState } from "react"
import { postNewComment } from "./api"

function NewCommentContainer({ newCommentBody, setNewCommentBody, currentArticle }) {

const currentUser = "tickle122"

const [err, setErr] = useState(null)
const [submit, setSubmit] = useState(null)

const handleSubmit = (event) => {
    event.preventDefault()
    setErr(null)
    if (newCommentBody.length === 0) {
        setErr("comments must be more than 0 characters")
    }
    if (newCommentBody.length > 0) {
    postNewComment(currentArticle, currentUser, newCommentBody, setErr, setNewCommentBody)
    setSubmit("done")
    setNewCommentBody("")
    }
};

    if (err) { return <p>{err}</p> }
    if (!err && submit) {
    return (
    <div>
    <p>Comment posted</p>
     <form class="new-comment-container" onSubmit={handleSubmit}>
     <h4>{currentUser}</h4>
     <label>type here:
     <input value={newCommentBody} onChange={(event) => {
        console.log(event.target.value)
        setNewCommentBody(event.target.value)}}></input>
    </label>
     <button type="submit">Post Comment</button>
    </form>
     </div>
    )} else return (
        <form class="new-comment-container" onSubmit={handleSubmit}>
        <h4>{currentUser}</h4>
        <label>type here:
        <input value={newCommentBody} onChange={(event) => {setNewCommentBody(event.target.value)}}></input>
       </label>
        <button type="submit">Post Comment</button>
       </form>
    )
}

export default NewCommentContainer