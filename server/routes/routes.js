const router= require('express').Router();

const handle = require('../handlers');
const auth= require('../middlewares/auth');

router.get('/:servername', auth, handle.getAll);
// router.get('/:servername/:schematitle', auth, handle.getById);

module.exports = router;