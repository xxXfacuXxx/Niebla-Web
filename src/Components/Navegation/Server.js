const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001; // Puedes cambiar el puerto según tus necesidades

// Configura el middleware bodyParser para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configura el transporte SMTP para enviar correos electrónicos
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Cambia esto a tu servicio de correo electrónico
  auth: {
    user: 'tu_correo@gmail.com', // Cambia esto a tu dirección de correo electrónico
    pass: 'tu_contraseña' // Cambia esto a tu contraseña de correo electrónico
  }
});

// Ruta para manejar el envío de correos electrónicos
app.post('/enviar-correo', (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;

  const mailOptions = {
    from: 'tu_correo@gmail.com', // Cambia esto a tu dirección de correo electrónico
    to: 'correo_destino@example.com', // Cambia esto a la dirección de correo de destino
    subject: 'Mensaje desde el formulario de contacto',
    text: `
      Nombre: ${firstName} ${lastName}
      Teléfono: ${phone}
      Correo Electrónico: ${email}
      Mensaje: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al enviar el correo electrónico' });
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).json({ message: 'Correo electrónico enviado con éxito' });
    }
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
