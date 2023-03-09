import CommentContainer from "./comment-container";
import NewCommentContainer from "./new-comment-container";
import { useState } from "react";

function CommentsContainer({
  currentArticle,
  currentArticleComments,
  setCurrentArticleComments,
  commentsActive,
}) {
  const [newCommentBody, setNewCommentBody] = useState("");
  const [newCommentContainerStatus, setNewCommentContainerStatus] =
    useState(false);

  const handleNewCommentClick = () => {
    !newCommentContainerStatus ? setNewCommentContainerStatus(true) : setNewCommentContainerStatus(false);
  };

  if (commentsActive) {
    if (currentArticle) {
      return (
        <div class="comments-container">
          <h3 class="comments-header">Comments</h3>
          {!newCommentContainerStatus ? (
            <div class="comments-feed">
                {currentArticleComments.map((comment) => {
                  return (
                    <CommentContainer
                      comment={comment}
                      setCurrentArticleComments={setCurrentArticleComments}
                    />
                  );
                })}
            </div>
          ) : (
            <div class="new-comment-container">
              <NewCommentContainer
                newCommentBody={newCommentBody}
                setNewCommentBody={setNewCommentBody}
                currentArticle={currentArticle}
              />
            </div>
          )}

          <div class="comments-bottom-bar">
            <button
              class={
                newCommentContainerStatus
                  ? "new-comment-button-active"
                  : "new-comment-button"
              }
              onClick={(event) => handleNewCommentClick()}
            >
              New Comment
            </button>
          </div>
        </div>
      );
    }
  } else if (!commentsActive) return null;
}

export default CommentsContainer;
