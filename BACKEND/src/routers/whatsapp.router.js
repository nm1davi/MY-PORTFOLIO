import { Router } from 'express';
import config from '../config/config.js';
const router = Router();

router.get('/number', async (req, res) => {
      const message = "Hi Nicolás I have visited your website and I want to communicate with you by WhatsApp";
      const whatsappLink = `https://wa.me/${config.number}?text=${message}`;
      res.json({ whatsappLink });
})


export default router;