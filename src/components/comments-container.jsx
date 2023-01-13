import CommentContainer from "./comment-container";
import NewCommentContainer from "./new-comment-container"
import { useState } from "react";


function CommentsContainer({ currentArticle, currentArticleComments, setCurrentArticleComments }) {
  const [newCommentBody, setNewCommentBody] = useState("")
  const [newCommentContainerStatus, setNewCommentContainerStatus] = useState("closed")

    const handleBackClick = () => {
        setCurrentArticleComments([])
    }
    const handleOpenClick = () => {
        fetch(`https://bobbys-nc-news.onrender.com/api/articles/${currentArticle.article_id}/comments`)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            setCurrentArticleComments(data.comments)
        })
    }
    const handleNewCommentClick = () => {
        setNewCommentContainerStatus("open")
    }
    const handlBackToCommentsClick = () => {
      setNewCommentContainerStatus("closed")
  }

    if (currentArticle !== null && newCommentContainerStatus === "closed") {
        return (
    <div class="comments-container">
      <h3>Comments</h3>
      <button onClick={(event) => handleNewCommentClick()}>New Comment</button>
      <button onClick={(event) => handleBackClick()}>Close Comments</button>
      <button onClick={(event) => handleOpenClick()}>View Comments</button>
      <ul>
        {currentArticleComments.map((comment) => {
          return (
        <CommentContainer
        comment={comment}
        setCurrentArticleComments={setCurrentArticleComments}/>
        );
        })}
      </ul>
    </div>
  );
}
  if (newCommentContainerStatus === "open") {
    return (
      <div>
      <NewCommentContainer
      newCommentBody={newCommentBody}
      setNewCommentBody={setNewCommentBody}
      currentArticle={currentArticle}
      />
      <button onClick={(event) => handlBackToCommentsClick()}>Back to Comments</button>
      </div>
    )
  }
}

export default CommentsContainer;
