const commentFormHandler = async function (event) {
  event.preventDefault();

  const postIdInput = document.querySelector('input[name="post-id"]');
  const bodyInput = document.querySelector('textarea[name="comment-body"]');

  const postId = postIdInput.value.trim();
  const body = bodyInput.value.trim();

  if (body) {
    try {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ postId, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Clear the input fields after successful submission
      postIdInput.value = '';
      bodyInput.value = '';

      // Reload the page to reflect the new comment
      document.location.reload();
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
