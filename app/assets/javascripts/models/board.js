Trello.Models.Board = Backbone.Model.extend ({
  urlRoot: 'api/boards',

  parse: function (resp) {
    if (resp.lists) {
    console.log(resp.lists)

      this.lists().set(resp.lists);
      delete resp.lists;
    }
    return resp;
  },

  lists: function () {
    if (!this._lists) {
      this._lists = new Trello.Collections.Lists([], {board: this});
    }
    return this._lists
  },

});
