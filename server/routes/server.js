const router= require('express').Router();

const handle = require('../handlers');
const auth= require('../middlewares/auth');

router.route('/').get(handle.showServers).post(auth, handle.createServer)

router.get('/user', auth, handle.userServers);

router
.route('/:id')
.get(handle.getServer)
.delete(auth, handle.deleteServer)

module.exports = router;