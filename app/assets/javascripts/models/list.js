Trello.Models.List = Backbone.Model.extend ({
  urlRoot: '/api/lists',

  parse: function (resp) {
    if (resp.cards) {
      this.cards().set(resp.cards);
      delete resp.cards;
    }
    
    return resp;
  },

  cards: function () {
    if(!this._cards) {
      this._cards = new Trello.Collections.Cards([], {list: this});
    }
    return this._cards
  },

});
