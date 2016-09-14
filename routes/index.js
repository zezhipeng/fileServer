exports.index = function(req, res) {
  res.render('index')
}

exports.file = function(req, res) {
  console.log(req.files)
  console.log(req.body)
  res.json({
    success: 1
  })
}
