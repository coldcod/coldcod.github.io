app.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === 'coldcod_x_huemiser') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
})
