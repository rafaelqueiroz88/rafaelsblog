class NewPostBlueprint < Blueprinter::Base
  identifier :id
  view :normal do
    fields :title, :description, :content, :slug
    exclude :id
  end
end