import CommentContainer from "./comment-container";
// import { useEffect } from "react";

function CommentsContainer({ currentArticle, currentArticleComments, setCurrentArticleComments }) {

    const handleBackClick = () => {
        setCurrentArticleComments([])
    }
    const handleOpenClick = () => {
        console.log(currentArticle)
        fetch(`https://bobbys-nc-news.onrender.com/api/articles/${currentArticle.article_id}/comments`)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            setCurrentArticleComments(data.comments)
        })
    }

    if (currentArticle !== null) {
        return (
    <div class="comments-container">
      <h3>Comments</h3>
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
      <button>New Comment</button>
      
    </div>
  );
}
}

export default CommentsContainer;
