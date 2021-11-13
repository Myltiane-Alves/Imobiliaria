import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { allRoms } from '../../../controllers/roomControllers';

const handler = nc();

dbConnect();

handler.get(allRoms)

export default handler;