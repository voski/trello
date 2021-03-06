Trello.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],

  buttonTemplate: function() {
    return (this.addingBoard ? JST['boards/new']: JST['boards/new_board_button']);
  },

  events: {
    "click     .new-board-button": "addBoard",
    "submit    form"             : "submitBoard",
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addNewSub);
    this.collection.each(function (board) {
      var view = new Trello.Views.BoardIndexItem({model: board})
      this.addSubview('#board-list', view)
    }, this);
  },

  render: function () {
    var content = this.template();
    var newBoardContent = this.buttonTemplate();
    this.$el.html(content);
    this.$boardsList = this.$('#board-list')
    this.attachSubviews();
    this.$boardsList.append(newBoardContent());

    return this;
  },

  addNewSub: function (board) {
    var view = new Trello.Views.BoardIndexItem({model: board});
    this.addSubview('#board-list', view);
  },

  addBoard: function () {
    this.addingBoard = true;
    this.render();
    this.$('input').focus();
  },

  submitBoard: function (e) {
    e.preventDefault();
    var boardParams = $(e.currentTarget).serializeJSON();
    var board = new Trello.Models.Board(boardParams);
    board.save({}, {
      success: function () {
        this.addingBoard = false;
        this.collection.add(board);
      }.bind(this),

      error: function (model, response) {
        this.$('input').attr('placeholder', response.responseText)
      }.bind(this),
    });
  },

})
