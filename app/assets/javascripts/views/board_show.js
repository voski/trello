Trello.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.lists(), 'add', this.addNewSub)
    this.model.lists().each(function (list) {
      var view = new Trello.Views.ListShow({ model: list });
      this.addSubview('#lists', view)
    }, this);
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  addNewSub: function (list) {
    var view = new Trello.Views.ListShow({ model: list });
    this.addSubview('#lists', view)
  },

})
