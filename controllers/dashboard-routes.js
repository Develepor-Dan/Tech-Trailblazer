const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

// Use async/await and try/catch for better error handling

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts-admin', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    console.error('Error retrieving posts:', err);
    res.status(500).redirect('login'); // Handle errors more gracefully
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).render('404'); // Render a 404 page for better user experience
    }
  } catch (err) {
    console.error('Error retrieving post for editing:', err);
    res.status(500).redirect('login'); // Handle errors more gracefully
  }
});

module.exports = router;
