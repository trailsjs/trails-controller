'use strict'

/**
 * Trails Controller Class. 
 */
module.exports = class TrailsController {
  constructor (app) {
    this.app = app
  }

  get log () {
    return this.app.log
  }

  get __ () {
    return this.app.__
  }
}
