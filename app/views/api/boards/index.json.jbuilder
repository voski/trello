# json.current_user do
#   json.(current_user, :id, :email)
# end


json.array! @boards, :id, :title
