const AbstractWindowObject = require('../AbstractWindowObject');

const DEFAULT_OPTIONS = {
  width: 800,
  height: 600,
  frame: false,
}


class LRMainWindow extends AbstractWindowObject {

  constructor(options) {
    super(Object.assign(
      DEFAULT_OPTIONS,
      options
    ));
  }

}

module.exports = LRMainWindow;
