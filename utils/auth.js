const withAuth = (req, res, next) => {
     try {
       if (!req.session.userId) {
         return res.redirect("/login");
       }
       return next();
     } catch (err) {
       console.error('Error in withAuth middleware:', err);
       return res.status(500).json({ error: 'Internal Server Error' });
     }
   };
   
   module.exports = withAuth;
   