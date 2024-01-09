const loginFormHandler = async function (event) {
     event.preventDefault();
   
     // Selecting elements using destructuring
     const { value: username } = document.querySelector('#username-input-login');
     const { value: password } = document.querySelector('#password-input-login');
   
     try {
       const response = await fetch('/api/user/login', {
         method: 'POST',
         body: JSON.stringify({
           username,
           password,
         }),
         headers: { 'Content-Type': 'application/json' },
       });
   
       if (response.ok) {
         // Redirecting using the response URL instead of a hardcoded URL
         document.location.replace(response.url);
       } else {
         // Using a more informative error message
         const errorMessage = await response.text();
         alert(`Failed to login. ${errorMessage}`);
       }
     } catch (error) {
       console.error('Error during login:', error);
       alert('An unexpected error occurred. Please try again.');
     }
   };
   
   // Using event delegation for dynamic forms
   document.body.addEventListener('submit', function (event) {
     if (event.target.matches('#login-form')) {
       loginFormHandler(event);
     }
   });
   