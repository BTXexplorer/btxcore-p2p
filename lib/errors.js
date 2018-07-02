'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on btxcore-p2p Module {0}'
};

module.exports = require('btxcore-lib').errors.extend(spec);
