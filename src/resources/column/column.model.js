const { v4 } = require('uuid');

class Column {
  constructor({ id = v4(), title = 'TITLE', order } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;
