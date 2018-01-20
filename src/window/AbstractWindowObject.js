const {BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

const TEMPLATE = 'index.html';
const LOAD_VIEW_OPTIONS = {
  pathname: '',
  protocol: 'file:',
  slashes: true,
}


class AbstractWindowObject extends BrowserWindow {

  constructor(options) {
    if (new.target === AbstractWindowObject) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
    super(options);
    this.loadView(LOAD_VIEW_OPTIONS);
  }

  loadView(options) {
    LOAD_VIEW_OPTIONS.pathname = path.join(__dirname, this.constructor.name, TEMPLATE);
    this.loadURL(url.format(options))
  }

}

module.exports = AbstractWindowObject;
