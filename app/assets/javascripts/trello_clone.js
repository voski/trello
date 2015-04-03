window.Trello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.boards = new Trello.Collections.Boards();
    this.boards.fetch();
  }
};

$(document).ready(function(){
  Trello.initialize();
});
