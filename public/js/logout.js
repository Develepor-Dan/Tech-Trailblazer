const logout = async function () {
     try {
       const response = await fetch('/api/user/logout', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
       });
   
       if (response.ok) {
         document.location.replace('/');
       } else {
         throw new Error('Failed to log out');
       }
     } catch (error) {
       console.error('Logout error:', error);
       alert('Failed to log out. Please try again.'); // Display a user-friendly error message
     }
   };
   
   const logoutLink = document.querySelector('#logout-link');
   
   if (logoutLink) {
     logoutLink.addEventListener('click', function (event) {
       event.preventDefault(); // Prevent the default link behavior
   
       // Confirm logout with the user before proceeding
       const confirmLogout = confirm('Are you sure you want to log out?');
   
       if (confirmLogout) {
         logout();
       }
     });
   }
   