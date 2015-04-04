Trello.Views.BoardIndexItem = Backbone.CompositeView.extend({
  template: JST['boards/index_item'],
  tagName: 'li',
  className: 'col-md-3 board-index-item',

  events: {
    "click": "goToShow",
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({board: this.model});
    this.$el.html(content);
    return this;
  },

  goToShow: function () {
    var boardUrl = 'b/' + this.model.id;
    Backbone.history.navigate(boardUrl, {trigger: true});
  },
});
