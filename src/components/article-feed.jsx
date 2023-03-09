import ArticleContainer from './article-container'
import SelectedArticleContainer from './selected-article-container'
import { useState, useEffect } from "react";

function ArticlesFeed(
    {currentArticle,
    setCurrentArticle,
    setCurrentArticleComments,
    articles,
    setArticles,
    currentTopic,
    setCommentsActive,
    commentsActive } ) {

      const [articleVotes, setArticleVotes] = useState(0);
      const [sortByQuery, setSortByQuery] = useState("")

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
      const handleSortByClick = () => {
        if (currentTopic === null) {
        fetch(`https://bobbys-nc-news.onrender.com/api/articles?sort_by=${sortByQuery}`)
          .then((response) => response.json())
          .then((data) => {
            setArticles(data.articles);
          })
        }
        else {
            fetch(`https://bobbys-nc-news.onrender.com/api/articles?sort_by=${sortByQuery}&topic=${currentTopic}`)
            .then((response) => response.json())
            .then((data) => {
              setArticles(data.articles);
            })    
        }
        }
      

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
            <label>sort by:</label>
            <select value={sortByQuery}
            onChange={(event) => {setSortByQuery(event.target.value)}}
            >
              <option value="">Default</option>
              <option value="created_at">Date</option>
              <option value="comment_count">Comment Count</option>
              <option value="votes">Votes</option>
            </select>
            <button onClick={(event) => {handleSortByClick()}}>Sort</button>
            {articles.map((article) => {
              return (
                <div>
                  <ArticleContainer
                    article={article}
                    setCurrentArticleComments={setCurrentArticleComments}
                    articleVotes={articleVotes}
                    setArticleVotes={setArticleVotes}
                  />
                  <button className="select-article-button" onClick={(event) => handleArticleClick(article)}>
                    Select Artical
                  </button>
                </div>
              );
            })}
          </div>
        );
    }

export default ArticlesFeed