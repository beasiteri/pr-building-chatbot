import express from 'express';
import type { Request, Response } from 'express';
import { chatController } from './controllers/chat.controller';

const router = express.Router();

// Define routes
// In real application we should't have our route handlers,
// we should only have a reference to a function inside a controller,
// but it is for demonstration as part of setting up our full stack project.
router.get('/', (req: Request, res: Response) => {
   res.send('Hello World!');
});

// In real application we should't have our route handlers,
// we should only have a reference to a function inside a controller,
// but it is for demonstration as part of setting up our full stack project.
router.get('/api/hello', (req: Request, res: Response) => {
   res.json({ message: 'Hello World!' });
});

router.post('/api/chat', chatController.sendMessage);

export default router;
