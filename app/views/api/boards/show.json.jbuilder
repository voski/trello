# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
lists = @board.lists
json.(@board, :id, :title) # board info

json.lists do # namespace lists
  json.array! lists do |list| # go through each list
    json.id list.id
    json.title list.title
    json.ord list.ord

    cards = list.cards
    json.cards do #namespace cards
      json.array! cards, :id, :title, :description, :ord
    end
  end
end
