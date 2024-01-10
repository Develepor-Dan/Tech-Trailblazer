const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// Get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ['username'] }], // Only include necessary attributes from the User model
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts', { posts });
  } catch (err) {
    console.error('Error retrieving posts:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ['username'] },
        {
          model: Comment,
          include: [{ model: User, attributes: ['username'] }],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });
      res.render('single-post', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.error('Error retrieving single post:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Redirect to homepage if already logged in
const redirectToHomeIfLoggedIn = (req, res, next) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    next();
  }
};

// Get login page
router.get('/login', redirectToHomeIfLoggedIn, (req, res) => {
  res.render('login');
});

// Get signup page
router.get('/signup', redirectToHomeIfLoggedIn, (req, res) => {
  res.render('signup');
});

module.exports = router;
