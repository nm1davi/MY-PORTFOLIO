import { Router } from 'express';
import nodemailer from 'nodemailer';
import config from '../config/config.js';
const router = Router();

router.post('/send-mail', async (req, res) => {
      const { name, email, message } = req.body;
      const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                  user: config.mail.emailUser,
                  pass: config.mail.emailPassword
            }
      })
      const mailOptions = {
            from: email, // Dirección de correo del remitente
            to: 'nm1.davi@gmail.com', // Tu dirección de correo
            subject: 'Nuevo mensaje de contacto',
            text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return res.status(500).json({ error: error.message });
            }
            res.status(200).json({ message: 'Correo enviado con éxito' });
          });
})


export default router;