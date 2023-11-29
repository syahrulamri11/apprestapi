'use strict';

var response = require('./rest');
var connection = require('./koneksi');

exports.index = function(req, res) {
  response.ok('REST API berhasil berjalan!', res);
};

//menampilkan semua data API
exports.allDataApi = function(req, res) {
  connection.query('SELECT * FROM culinary', function(error, rows, fields) {
    if(error) {
      console.log(error);
    } else {
      response.ok(rows, res)
    }
  });
};
