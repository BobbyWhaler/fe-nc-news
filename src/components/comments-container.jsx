import CommentContainer from "./comment-container";

function CommentsContainer({ currentArticleComments, setCurrentArticleComments }) {

    const handleBackClick = () => {
        setCurrentArticleComments([])
    }

  return (
    <div class="comments-container">
      <h3>Comments</h3>
      <button onClick={(event) => handleBackClick()}>Close Comments</button>
      <div>
        {currentArticleComments.map((comment) => {
          return (
        <div>
        <CommentContainer comment={comment}/>
        </div>
        );
        })}
      </div>
      <button>New Comment</button>
      
    </div>
  );
}

export default CommentsContainer;
