const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// Use try-catch blocks for each route to handle errors consistently

router.post('/', withAuth, async (req, res) => {
  try {
    const body = req.body;
    const newPost = await Post.create({ ...body, userId: req.session.userId });
    res.status(201).json(newPost); // Use 201 status code for successful resource creation
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error: Post-Route /' }); // Provide a generic error message
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).json({ error: 'Post not found' }); // Provide a specific error message
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error: Post-Route /:id' });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const affectedRows = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error: Delete-Post-Route /:id' });
  }
});

module.exports = router;
