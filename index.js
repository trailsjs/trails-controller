'use strict'

/**
 * Trails Controller Class. 
 */
module.exports = class TrailsController {
  constructor (app) {
    this.app = app
  }

  get api () {
    return this.app.api
  }

  get log () {
    return this.app.log
  }

  get __ () {
    return this.app.__
  }
}
