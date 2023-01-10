import './App.css';
import { useState } from "react";
import Header from './components/app-header'
import ArticlesFeed from './components/article-feed'
import CommentsContainer from './components/comments-container'
// import NewCommentContainer from './new-comment-container'

function App() {

const [currentArticleComments, setCurrentArticleComments] = useState([])
const [currentArticle, setCurrentArticle] = useState(null)

return (
<div class="app-body">
    <Header/>
    <ArticlesFeed
    setCurrentArticleComments={setCurrentArticleComments}
    currentArticle={currentArticle}
    setCurrentArticle={setCurrentArticle}/>
    <CommentsContainer
    currentArticle={currentArticle}
    currentArticleComments={currentArticleComments}
    setCurrentArticleComments={setCurrentArticleComments}/>
</div>
)
}

export default App
