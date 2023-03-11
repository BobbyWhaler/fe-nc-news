import ArticleVotes from "./selected-article-components/votes-container";

function SelectedArticleContainer({
  article,
  articleVotes,
  setArticleVotes,
  setCommentsActive,
  commentsActive,
}) {
  console.log(article.body);
  const onCommentsButtonClick = () => {
    if (!commentsActive) {
      setCommentsActive(true);
    } else if (commentsActive) setCommentsActive(false);
  };
  return (
    <div class="selected-article-container">
      <div style={{"border-bottom-style": "solid",
  "border-bottom-width": "0.5px",
  "border-bottom-color": "gray"}}>
        <h2 style={{padding: "0 2rem 0 2rem"}}
        class="article-header">
          {article.title}
          <p class="article-author">by {article.author}</p>
        </h2>
    </div>
        <p class="article-body">{article.body}</p>
      
      <div class="article-bottom-bar">
        <button
          className={
            commentsActive
              ? "article-comments-button-active"
              : "article-comments-button"
          }
          onClick={onCommentsButtonClick}
        >
          Comments
        </button>
        <div style={{ flex: 1 }}></div>
        <ArticleVotes
          article={article}
          articleVotes={articleVotes}
          setArticleVotes={setArticleVotes}
        />
      </div>
    </div>
  );
}

export default SelectedArticleContainer;
