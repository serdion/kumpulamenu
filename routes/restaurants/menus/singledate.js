module.exports = function(req, res) {
      var _id = req.params._id * 1;
      var date = new Date(req.params.date);
      req.collection.findOne({_id: _id}, {fields: {name: 1, menus: 1, areacode: 1}})
                      .then(function(data) {
                        data.menus = data.menus.filter(function(value) {
                          return value.date.getTime() === date.getTime();
                        });
                        res.send(data);
                      });
}
