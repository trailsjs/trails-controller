'use strict'

/**
 * Trails Controller Class. 
 */
module.exports = class TrailsController {
  constructor (app) {
    this.app = app
    this.api = app.api
    this.log = this.app.log
    this.__ = this.app.__
  }
}
