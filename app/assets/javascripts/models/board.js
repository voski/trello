Trello.Models.Board = Backbone.Model.extend ({
  urlRoot: 'api/boards/',

  parse: function(resp) {
    // console.log(resp.lists);
    return resp;
  },

})
