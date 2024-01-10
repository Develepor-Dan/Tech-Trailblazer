const postIdInput = document.querySelector('input[name="post-id"]');
const titleInput = document.querySelector('input[name="post-title"]');
const bodyInput = document.querySelector('textarea[name="post-body"]');
const editForm = document.querySelector('#edit-post-form');
const deleteButton = document.querySelector('#delete-btn');

const editFormHandler = async function (event) {
  event.preventDefault();

  const postId = postIdInput.value;
  const title = titleInput.value;
  const body = bodyInput.value;

  try {
    const response = await fetch(`/api/post/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to update the post');
    }

    document.location.replace('/dashboard');
  } catch (error) {
    console.error('Error updating the post:', error);
  }
};

const deleteClickHandler = async function () {
  try {
    const response = await fetch(`/api/post/${postIdInput.value}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Failed to delete the post');
    }

    document.location.replace('/dashboard');
  } catch (error) {
    console.error('Error deleting the post:', error);
  }
};

editForm.addEventListener('submit', editFormHandler);
deleteButton.addEventListener('click', deleteClickHandler);
