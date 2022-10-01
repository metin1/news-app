const { v4: uuidv4 } = require('uuid');

async function postLogin(req, res) {
  if (!req.body || !req.body?.username || !req.body?.password) {
    return res.status(401).json({ message: 'The username or password is entered incorrectly' })
  }
  const { username, password } = req.body;
  if (username === 'user' && password === 'user') {
    return res.status(200).json({ token: uuidv4() })
  }
  return res.status(401).json({ message: 'The username or password is entered incorrectly' });
}


module.exports = {
  postLogin,
};
