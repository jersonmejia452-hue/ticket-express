const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando en Express 🚀');
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email y password obligatorios'
    });
  }

  if (email === 'admin@test.com' && password === '1234') {
    return res.status(200).json({
      message: 'Login exitoso',
      user: {
        id: 1,
        nombre: 'Enriqueto'
      }
    });
  }

  return res.status(401).json({
    message: 'Credenciales inválidas'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
