// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/status', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'A API está rodando perfeitamente!',
    version: '1.0.2'
  });
});

// Apenas inicia o servidor se não estivermos em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

module.exports = app; // Exportamos para facilitar os testes
