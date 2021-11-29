class NewPostBlueprint < Blueprinter::Base
  identifier :id
  view :normal do
    fields :title, :description, :content
    exclude :id
  end
end