"use strict";
module.exports = app => {
    const get = (req, res) => {
      res.render('login',{erro:{}})
  }

    return {get}
}