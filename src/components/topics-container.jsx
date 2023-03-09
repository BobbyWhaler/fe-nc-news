import { useEffect } from "react";

function TopicsContainer({
  topics,
  setTopics,
  setArticles,
  currentArticle,
  setCurrentTopic,
  setCurrentArticle,
  currentTopic,
  setCommentsActive
}) {

  const handleBackClick = () => {
    setCurrentArticle(null);
    setCommentsActive(false);
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
        <h1 className="topics-header">Topics</h1>
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
    );
  } else
    return (
      <button className="back-to-articles-button" onClick={(event) => handleBackClick()}>Back to Articles</button>
    );
}

export default TopicsContainer;
