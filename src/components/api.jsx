const patchArticleVote = (article, incVotes, setArticleVotes, setErr) => {
  fetch(
    
    `https://bobbys-nc-news.onrender.com/api/articles/${article.article_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inc_votes: incVotes }),
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err, "< error")
      setArticleVotes((currCount) => currCount - 1)
      setErr("Something went wrong, please try again.")
  }
    )
}

const postNewComment = (article, currentUser, newCommentBody, setErr, setNewCommentBody) => {
  fetch(
    `https://bobbys-nc-news.onrender.com/api/articles/${article.article_id}/comments`,
    {
      
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        username: currentUser,
        body: newCommentBody,
      }),
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err, "< error");
      setNewCommentBody("");
      setErr("Something went wrong, please try again.")
    })
}


module.exports =  {
  patchArticleVote,
  postNewComment }
