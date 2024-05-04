const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');

server.use(middlewares);
server.use(bodyParser.json());

// Custom login route handler
server.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if user exists and credentials match
  const user = router.db.get('users').find({ email, password }).value();
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Mock token generation (replace with actual token generation logic)
  const token = '123456789';

  res.json({ token });
});

server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});