Trello.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],

  buttonTemplate: function() {
    return (this.addingBoard ? JST['boards/new']: JST['boards/new_board_button']);
  },

  events: {
    "mouseover .board-index-item": "beginHover",
    "mouseout  .board-index-item": "endHover",
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
    this.addingBoard = true;
    this.render();
  },

  endEditing: function (e) {
    e.preventDefault();
    var boardParams = $(e.currentTarget).serializeJSON();

    var newBoard = new Trello.Models.Board(boardParams);
    newBoard.save({}, {
      success: function () {
        this.addingBoard = false;
        this.collection.add(newBoard);
      }.bind(this),

      error: function () {
        alert('woops');
      },
    });
  },

  beginHover: function (e) {
    $target = $(e.currentTarget);
    $target.addClass("hover");
  },

  endHover: function (e) {
    $target = $(e.currentTarget);
    $target.removeClass("hover");
  },


})
