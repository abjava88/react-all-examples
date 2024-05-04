// router.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

// Custom route: Get a post by title
server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const foundUser = router.db.get('users').find({ email }).value();
  console.log(`found user ${foundUser}`);
  res.status(200).json({
    accessToken: "123456789"
  })
});

// Middleware: Set createdAt timestamp for POST requests
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

// Use the default router
server.use(router);

// Start the server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});