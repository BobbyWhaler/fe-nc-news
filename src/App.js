import './App.css';
import { useState } from "react";
import Header from './components/app-header'
import ArticlesFeed from './components/article-feed'
import CommentsContainer from './components/comments-container'
import TopicsContainer from './components/topics-container'
function App() {

const [currentArticleComments, setCurrentArticleComments] = useState([])
const [currentArticle, setCurrentArticle] = useState(null)
const [articles, setArticles] = useState([])
const [topics, setTopics] = useState([])
const [currentTopic, setCurrentTopic] = useState(null)
const [commentsActive, setCommentsActive] = useState(false)

console.log(commentsActive)
return (
<div class={!commentsActive ? "app-body" : "app-body-with-comments"}>
    <Header/>
    <TopicsContainer
    topics={topics}
    setTopics={setTopics}
    setArticles={setArticles}
    currentArticle={currentArticle}
    setCurrentTopic={setCurrentTopic}
    setCurrentArticle={setCurrentArticle}
    currentTopic={currentTopic}
    setCommentsActive={setCommentsActive}/>
    <ArticlesFeed
    setCurrentArticleComments={setCurrentArticleComments}
    currentArticle={currentArticle}
    setCurrentArticle={setCurrentArticle}
    articles={articles}
    setArticles={setArticles}
    currentTopic={currentTopic}
    setCommentsActive={setCommentsActive}
    commentsActive={commentsActive}/>
    <CommentsContainer
    currentArticle={currentArticle}
    currentArticleComments={currentArticleComments}
    setCurrentArticleComments={setCurrentArticleComments}
    commentsActive={commentsActive}/>
</div>
)
}

export default App
