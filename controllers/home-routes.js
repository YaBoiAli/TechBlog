const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  }).then((postData) => {
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("all-posts", { posts });
  });
});

router.get("/post/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    include: [User, { model: Comment, include: [User] }],
  }).then((postData) => {
    if (postData) {
      const post = postData.get({ plain: true });
      res.render("single-post", { post });
    }
  });
});

//signup

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
