/* app.js */

// require and init express
const app = require('express')()

// fake posts to simulate the database
const posts = [
  {
    id: 1,
    author: 'Giovani',
    title: 'Welcome to our blog',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Heytor',
    title: 'Talking about Minecraft',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Gisele',
    title: 'Learning to cook well',
    body: 'Blog post number 3'
  }
]

// set the view engine to ejs
app.set('view engine', 'ejs');

// blog home page
app.get('/', (req, res) => {
  // render home.ejs with the list of posts
  res.render('home', {posts: posts})
})

// blog post
app.get('/post/:id', (req, res) => {
  // find the post in the posts array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})

app.listen(8080)

console.log('listening on port 8080')
