import { useState } from "react";
import { postNewComment } from "./api";

function NewCommentContainer({
  newCommentBody,
  setNewCommentBody,
  currentArticle,
}) {
  const currentUser = "tickle122";

  const [err, setErr] = useState(null);
  const [submit, setSubmit] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr(null);
    if (newCommentBody.length === 0) {
      setErr("comments must be more than 0 characters");
    }
    if (newCommentBody.length > 0) {
      postNewComment(
        currentArticle,
        currentUser,
        newCommentBody,
        setErr,
        setNewCommentBody
      );
      setSubmit("done");
      setNewCommentBody("");
    }
  };

  return err ? (
    <p>{err}</p>
  ) : (
    <div>
      {!err && submit ? <p>Comment posted</p> : null}
      <form onSubmit={handleSubmit}>
        <h4>{currentUser}</h4>
        <textarea
          onChange={(event) => {
            console.log(event.target.value);
            setNewCommentBody(event.target.value);
          }}
          value={newCommentBody}
          rows={4}
          cols={40}
        />
        <button class="post-comment-button" type="submit">Post Comment</button>
      </form>
    </div>
  );
}

export default NewCommentContainer;
