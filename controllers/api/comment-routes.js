const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const { body } = req.body;
    const { userId } = req.session;

    const newComment = await Comment.create({
      body,
      userId,
    });

    res.status(201).json(newComment); // Use 201 status code for resource creation
  } catch (err) {
    console.error('Error creating comment:', err);
    res.status(500).json({ error: 'Internal Server Error' }); // Provide a generic error message
  }
});

module.exports = router;
