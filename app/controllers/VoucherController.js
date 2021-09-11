const voucher = require('../services/VoucherServices')

const getAll = function (req, res){
  console.log(req.query);
  var user_id = req.query.user_id

  if (!user_id) {
    res.status(403).json({
      status:403,
      message:"unatuh user"
    })
  }

  res.status(200).json({
    status: 200,
    message: "success",
    source: "elastic",
    data: voucher.getAll()
  });
}

module.exports ={
  getAll
}
