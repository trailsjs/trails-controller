'use strict'

/**
 * Trails Controller Class.
 */
module.exports = class TrailsController {
  constructor (app) {
    this.app = app
    this.api = app.api
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
