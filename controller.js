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

//menampilkan semua data API by id
exports.dataApiById = function(req, res) {
  let id = req.params.id;
  connection.query('SELECT * FROM culinary WHERE idFood = ?', [id],
    function(error, rows, fields) {
      if(error) {
        console.log(error);
      } else {
        response.ok(rows, res)
      }
    }
  );
};

//menambahkan data API
exports.addNewData = function(req, res) {
  var strFood = req.body.strFood;
  var strIngredients = req.body.strIngredients;
  var strArea = req.body.strArea;
  var strDesc = req.body.strDesc;

  connection.query('INSERT INTO culinary (strFood, strIngredients, strArea, strDesc) VALUES(?, ?, ?, ?)',
  [strFood, strIngredients, strArea, strDesc],
  function(error, rows, fields) {
    if(error) {
      console.log(error);
    } else {
      response.ok('Berhasil Menambahkan data!', res)
    }
  });
};

//ubah data berdasarkan id
exports.changeDataById = function(req, res) {
  var idFood = req.body.idFood;
  var strFood = req.body.strFood;
  var strIngredients = req.body.strIngredients;
  var strArea = req.body.strArea;
  var strDesc = req.body.strDesc;

  connection.query('UPDATE culinary SET strFood=?, strIngredients=?, strArea=?, strDesc=? WHERE idFood=?', [strFood, strIngredients, strArea, strDesc, idFood],
  function(error, rows, fields) {
    if(error) {
      console.log(error);
    } else {
      response.ok('Berhasil ubah data', res)
    }
  })
}