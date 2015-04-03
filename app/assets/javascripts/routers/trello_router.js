Trello.Routers.trello_router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.$el;
    this.boards = Trello.boards;
    this.boards.fetch();
  },

  routes: {
    '': 'index'
  },

  index: function () {
    var content = new Trello.Views.BoardIndex({ collection: this.boards });
    this.$el.html(content.render().$el);
  },
});
