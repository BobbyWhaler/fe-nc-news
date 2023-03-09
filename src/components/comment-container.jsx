import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CommentContainer({ comment }) {
  function formatDate() {
    let year = comment.created_at.slice(0, 4);
    let month = comment.created_at.slice(5, 7);
    let day = comment.created_at.slice(8, 10);
    return day + "-" + month + "-" + year;
  }

  return (
    <div class="comment-container">
      <div class="comment-container-body">
        <h3>
          {comment.author}{" "}
          <span
            style={{
              color: "gray",
              fontWeight: "normal",
              opacity: 0.6,
              fontSize: 12,
            }}
          >
            {" "}
            . {formatDate(comment.created_at)}
          </span>
        </h3>
        <p>{comment.body}</p>
      </div>
      <div class="comment-container-votes">
        <div class="comment-votes-button-container">
        <button
          class="comment-votes-button"
        >
          <ArrowDropUpIcon fontSize="medium" />
        </button>
        <button
          class="comment-votes-button"
        >
          <ArrowDropDownIcon fontSize="medium" />
        </button>
        </div>
        <p class="comment-votes-count"> {comment.votes}</p>
      </div>
    </div>
  );
}

export default CommentContainer;
