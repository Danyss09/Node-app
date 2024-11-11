// Cargar el módulo http de Node.js
const http = require('http');

// Crear un servidor que responda con el mensaje deseado
const server = http.createServer((req, res) => {
  // Establecer el tipo de contenido como texto plano
  res.setHeader('Content-Type', 'text/plain');
  
  // Escribir el contenido de la respuesta
  res.end('Programación distribuida Daniela Cáceres');
});

// Configurar el puerto y dirección en que escuchará el servidor
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
