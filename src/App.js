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

console.log(articles)
return (
<div class="app-body">
    <Header/>
    <TopicsContainer
    topics={topics}
    setTopics={setTopics}
    setArticles={setArticles}
    currentArticle={currentArticle}/>
    <ArticlesFeed
    setCurrentArticleComments={setCurrentArticleComments}
    currentArticle={currentArticle}
    setCurrentArticle={setCurrentArticle}
    articles={articles}
    setArticles={setArticles}/>
    <CommentsContainer
    currentArticle={currentArticle}
    currentArticleComments={currentArticleComments}
    setCurrentArticleComments={setCurrentArticleComments}/>
</div>
)
}

export default App
