const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// Use routes
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

// Catch-all route for undefined routes (404 Not Found)
router.use((req, res) => {
  res.status(404).json({ message: '404 Not Found' });
});

module.exports = router;
