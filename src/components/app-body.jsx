// import { useState } from "react";
import Header from './app-header'
import ArticlesFeed from './article-feed'
// import CommentContainer from './comment-container'
// import NewCommentContainer from './new-comment-container'

function AppBody() {
return (
<div>
    <Header/>
    <ArticlesFeed />
    {/* <CommentsContainer/>
    <NewCommentContainer/> */}
</div>
)
}

export default AppBody