import { useEffect } from "react";

function TopicsContainer({
  topics,
  setTopics,
  setArticles,
  currentArticle,
  setCurrentTopic,
  setCurrentArticle,
  currentTopic,
  setCommentsActive,
}) {

  const handleBackClick = () => {
    setCurrentArticle(null);
    setCommentsActive(false);
  };

  const handleSortByClick = (sortByQuery) => {
    if (currentTopic === null) {
      fetch(
        `https://bobbys-nc-news.onrender.com/api/articles?sort_by=${sortByQuery}`
      )
        .then((response) => response.json())
        .then((data) => {
          setArticles(data.articles);
        });
    } else {
      fetch(
        `https://bobbys-nc-news.onrender.com/api/articles?sort_by=${sortByQuery}&topic=${currentTopic}`
      )
        .then((response) => response.json())
        .then((data) => {
          setArticles(data.articles);
        });
    }
  };

  const handleClick = (topic) => {
    setCurrentTopic(topic.slug);
    fetch(
      `https://bobbys-nc-news.onrender.com/api/articles?topic=${topic.slug}`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  };

  useEffect(() => {
    fetch(`https://bobbys-nc-news.onrender.com/api/topics`)
      .then((response) => response.json())
      .then((data) => {
        setTopics(data.topics);
      });
  }, [setTopics]);

  if (currentArticle === null) {
    return (
      <div className="topics-container">
        <div
          style={{
            color: "aliceblue",
            display: "flex",

          }}
        >
          <label style={{
            color: "aliceblue",
            padding: "10px",
            "justify-content": "center",
            "font-size": "1rem",
            "font-weight": "bold",
          }}>SORT BY</label>
          <select
          style={{flex: 1, marginRight: "1rem"}}
            onChange={(event) => {
              handleSortByClick(event.target.value);
            }}
          >
            <option value="">Default</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
          {/* <button
            style={{
              padding: "16px",
              "border-width": "0",
              "transition-duration": "0.4s",
              "font-size": "14px",
              "font-weight": "bold",
              "font-family": "helvetica",
              "background-color": "black",
              color: "aliceblue",
            }}
            onClick={(event) => {
              handleSortByClick();
            }}
          >
            Sort
          </button> */}
        </div>
        <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
        <h1
          style={{
            color: "aliceblue",
            padding: "10px",
            "justify-content": "center",
            "font-size": "1rem",
            "font-weight": "bold",
          }}
        >
          TOPICS
        </h1>
        {topics.map((topic) => {
          return (
            <button
              className={
                currentTopic === topic.slug
                  ? "topic-button-active"
                  : "topic-button"
              }
              onClick={(event) => {
                handleClick(topic);
              }}
            >
              {topic.slug}
            </button>
          );
        })}
      </div>
      </div>
    );
  } else
    return (
      <button
        className="back-to-articles-button"
        onClick={(event) => handleBackClick()}
      >
        Back to Articles
      </button>
    );
}

export default TopicsContainer;
