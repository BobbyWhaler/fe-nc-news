function CommentContainer({comment}) {

    function formatDate() {
        
        let year = comment.created_at.slice(0, 4)
        let month = comment.created_at.slice(5, 7)
        let day = comment.created_at.slice(8, 10)
        return day + "-" + month + "-" + year
    }

    return (
    <div>
    <h3>{comment.author}</h3>
    <p>{comment.body}</p>
    <p>Posted on: {formatDate(comment.created_at)}</p>
    <div>Votes: {comment.votes} /\ \/</div>
    </div>
    )
}

export default CommentContainer