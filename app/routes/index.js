const routes = require('express').Router({ mergeParams: true });
const voucherController = require('../controllers/VoucherController')

routes.get('/voucher', voucherController.getAll)
routes.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Hello world!' });
});


module.exports = routes;
