import { Router, Response, Request } from 'express';
import LinksController from '../controllers/LinksController';

const router = Router();

router.post('/',LinksController.create);
router.get('/:code',LinksController.hit);
router.get('/:code/status',LinksController.index);

export { router };