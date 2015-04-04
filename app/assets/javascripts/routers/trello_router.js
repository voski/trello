Trello.Routers.trello_router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.$el;
    this.boards = Trello.boards;
    this.boards.fetch();
  },

  routes: {
    '': 'index',
    'b/:id': 'boardShow'
  },

  index: function () {
    var view = new Trello.Views.BoardIndex({ collection: this.boards });
    this.swapView(view);
  },

  boardShow: function (id) {
    var board = this.boards.get(id);
    var view = new Trello.Views.BoardShow({ model: board });
    this.swapView(view);
  },

  swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this.$el.html(view.render().$el)
    this._currentView = view;
  },

});
