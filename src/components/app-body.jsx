import { useState } from "react";
import Header from './app-header'
import ArticlesFeed from './article-feed'
import CommentsContainer from './comments-container'
// import NewCommentContainer from './new-comment-container'

function AppBody() {

const [currentArticleComments, setCurrentArticleComments] = useState([])

return (
<div class="app-body">
    <Header/>
    <ArticlesFeed setCurrentArticleComments={setCurrentArticleComments}/>
    <CommentsContainer
    currentArticleComments={currentArticleComments}
    setCurrentArticleComments={setCurrentArticleComments}/>
</div>
)
}

export default AppBody