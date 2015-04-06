Trello.Collections.Lists = Backbone.Collection.extend ({
  url: 'api/lists',
  model: Trello.Models.List,


  getOrFetch: function(id) {
    var list = this.get(id);
    var lists = this;
    if (!list) {
      list = new Trello.Models.List({id: id});
      list.fetch({
        success: function () {
          lists.add(list);
        }
      })
    } else {
      list.fetch();
    }

    return list;
  }
});
