Trello.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],

  buttonTemplate: function() {
    return (this.buttonOpen ? JST['board/new']: JST['boards/new_board_button']);
  },

  events: {
    "mouseover .board-index-item": "toggleHover",
    "mouseout  .board-index-item": "toggleHover",
    "click     .new-board-button": "beginEditing",
    "submit    form"             : "endEditing",
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
    var newBoardButton = this.buttonTemplate();

    this.$el.html(content);
    this.$button = this.$('#newBoard');

    this.attachSubviews();
    this.$button.html(newBoardButton());
    return this;
  },

  addNewSub: function (board) {
    var view = new Trello.Views.BoardIndexItem({model: board});
    this.addSubview('#board-list', view);
  },

  beginEditing: function () {
    alert('rendering new board');
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
