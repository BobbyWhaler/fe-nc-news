function ArticleContainer({
  article,
  setCurrentArticle,
  setCurrentArticleComments,
}) {

    function formatDate(item) {
        let year = item.slice(0, 4);
        let month = item.slice(5, 7);
        let day = item.slice(8, 10);
        return day + "-" + month + "-" + year;
      }

  const handleArticleClick = (article) => {
    setCurrentArticle(article);
    fetch(
      `https://bobbys-nc-news.onrender.com/api/articles/${article.article_id}/comments`
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentArticleComments(data.comments);
      });
  };

  console.log(article)

  return (
    <div class="article-container">
      <div>
        <h2
          style={{
            padding: "1rem 1rem 0 1rem",
          }}
        >
          {article.title}{" "}
          <p
            style={{
              "font-size": "16px",
              color: "red",
            }}
          >
            by {article.author}{" "}
            <span style={{ color: "white" }}>
              &bull; {article.topic.toUpperCase()}
              &bull; <span style={{
              color: "gray",
              fontWeight: "normal",
              opacity: 0.6,
            }}>{formatDate(article.created_at)}</span>
            </span>
          </p>
        </h2>
      </div>
      <div
        style={{
          margin: "0 0 1rem 2rem",
          padding: "0 1rem 0 1rem",
          "border-radius": "12px",
          "border-style": "solid",
          "border-width": "1px",
          "border-color": "dimgray",
        }}
      >
        <p>{article.body}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0 1rem 0 0",
          "background-color": "black",
        }}
      >
        <button
          className="select-article-button"
          onClick={(event) => handleArticleClick(article)}
        >
          Select Artical
        </button>
        <div style={{ flex: 1 }}></div>
        <p>VOTES {article.votes}</p>
      </div>
    </div>
  );
}

export default ArticleContainer;
