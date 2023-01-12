function sendArticleVote(article, inc_votes, setArticleVotes, setErr) {
    fetch(`https://bobbys-nc-news.onrender.com/api/articles/${article.article_id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ "inc_votes": inc_votes })
})
.then((response) => response.json())
.then((json) => console.log(json, "< success"))
.catch((err) => {
  console.log(err, "< error")
  setArticleVotes((currCount) => currCount - 1);
  setErr('Something went wrong, please try again.')
})
;
}

export default sendArticleVote;