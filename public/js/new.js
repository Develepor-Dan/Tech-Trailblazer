const newFormHandler = async function (event) {
     event.preventDefault();
   
     const title = document.querySelector('input[name="post-title"]').value;
     const body = document.querySelector('textarea[name="post-body"]').value;
   
     try {
       const response = await fetch('/api/post', {
         method: 'POST',
         body: JSON.stringify({
           title,
           body,
         }),
         headers: {
           'Content-Type': 'application/json',
         },
       });
   
       if (!response.ok) {
         throw new Error('Failed to create a new post');
       }
   
       document.location.replace('/dashboard');
     } catch (error) {
       console.error('Error creating a new post:', error);
       // Handle the error or provide user feedback
     }
   };
   
   document
     .querySelector('#new-post-form')
     .addEventListener('submit', newFormHandler);
   