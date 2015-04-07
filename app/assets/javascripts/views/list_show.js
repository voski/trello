Trello.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],
  addCardTemplate: function () {
    return this.addingCard ? JST['cards/new'] : JST['cards/add_new']
  },

  tagName: 'li',
  className: 'col-md-3 list',

  events: {
    'click .add-card' : 'addCard'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);

    var newCardContent = this.addCardTemplate();
    this.$('.cards-list').append(newCardContent())

    return this;
  },

  // addCard: function () {
  //   this.
  // },

})
