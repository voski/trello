window.Trello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.boards = new Trello.Collections.Boards();
    new Trello.Routers.trello_router({$el: $('#main')});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Trello.initialize();
});
