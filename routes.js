'use strict';

module.exports = function(app) {
  var jsonku = require('./controller');

  app.route('/')
  .get(jsonku.index);

  app.route('/tampil')
  .get(jsonku.allDataApi); 
  
  app.route('/tampil/:id')
  .get(jsonku.dataApiById);

  app.route('/tambah')
  .post(jsonku.addNewData);

  app.route('/ubah')
  .put(jsonku.changeDataById);

  app.route('/hapus')
  .delete(jsonku.deleteDataById);
};