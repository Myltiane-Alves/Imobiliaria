import nc from 'next-connect';

import { allRoms } from '../../../controllers/roomControllers';

const handler = nc();

handler.get(allRoms)

export default handler;