Trello.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],

  events: {
    "mouseover .board-index-item": "toggleHover",
    "mouseout  .board-index-item": "toggleHover",
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addNewSub);
    this.collection.each(function(board) {
      var view = new Trello.Views.BoardIndexItem({model: board})
      this.addSubview('#board-list', view)
    }, this);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addNewSub: function (board) {
    var view = new Trello.Views.BoardIndexItem({model: board});
    this.addSubview('#board-list', view);
  },



  toggleHover: function() {
    var $target = $(event.target);
    if ($target.css('background-color') === "rgb(102, 153, 153)" ) {
      $target.css('background-color', '#eee')
    } else {
      $target.css('background-color', 'rgb(102, 153, 153)')
    }
  },

})
