/* app.js */

//require express
var app = require('express')()

//array of posts
var posts = [
  {
    id: 1,
    author: 'John',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Drake',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Events',
    body: 'Blog post number 4'
  }
]

// set view engine to ejs
app.set('view engine', 'ejs')

// set our blog home page
//ES6 arrow functions
//app.get('/', (req, res) => {
app.get('/', function(req, res){
  //render our home.ejs with the list of posts
  res.render('home',{posts: posts})
})

// view of a post in our blog
//ES6 arrow functions
//app.get('/post/:id',(req, res)=>{
app.get('/post/:id', function(req, res){
  //given a post id, find the post in our array
  //ES6 arrow functions
  //var post = posts.filter((post)=>{
  var post = posts.filter(function(post){
    return post.id == req.params.id
  })[0]
  //render the post.ejs template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})

app.listen(8080)

console.log('Listenig on port 8080')
// Result in http://localhost:8080