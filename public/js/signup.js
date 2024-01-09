const signupFormHandler = async function(event) {
     event.preventDefault();
   
     const usernameEl = document.querySelector('#username-input-signup');
     const passwordEl = document.querySelector('#password-input-signup');
   
     try {
       const response = await fetch('/api/user', {
         method: 'POST',
         body: JSON.stringify({
           username: usernameEl.value,
           password: passwordEl.value,
         }),
         headers: {
           'Content-Type': 'application/json',
         },
       });
   
       if (response.ok) {
         document.location.replace('/dashboard');
       } else {
         // Handle non-successful responses
         const responseData = await response.json(); // Assuming the server sends details about the error
         alert(`Failed to sign up: ${responseData.message}`);
       }
     } catch (error) {
       // Handle network or unexpected errors
       console.error('Error during signup:', error);
       alert('An unexpected error occurred during signup');
     }
   };
   
   document
     .querySelector('#signup-form')
     .addEventListener('submit', signupFormHandler);
   