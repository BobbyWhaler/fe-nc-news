import ArticleContainer from "./article-container";
import SelectedArticleContainer from "./selected-article-container";
import { useState, useEffect } from "react";

function ArticlesFeed({
  currentArticle,
  setCurrentArticle,
  setCurrentArticleComments,
  articles,
  setArticles,
  setCommentsActive,
  commentsActive,
}) {
  const [articleVotes, setArticleVotes] = useState(0);

  useEffect(() => {
    fetch(`https://bobbys-nc-news.onrender.com/api/articles`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, [setArticles]);

  if (currentArticle !== null) {
    return (
      <div>
        <SelectedArticleContainer
          article={currentArticle}
          articleVotes={articleVotes}
          setArticleVotes={setArticleVotes}
          setCommentsActive={setCommentsActive}
          commentsActive={commentsActive}
        />
      </div>
    );
  } else
    return (
        <div className="article-feed">
          {articles.map((article) => {
            return (
              <div>
                <ArticleContainer
                  article={article}
                  setCurrentArticleComments={setCurrentArticleComments}
                  setCurrentArticle={setCurrentArticle}
                />
              </div>
            );
          })}
        </div>
    );
}

export default ArticlesFeed;
