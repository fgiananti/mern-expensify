const router = require('express').Router(),
      path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;
