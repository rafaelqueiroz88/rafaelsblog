class PostBlueprint < Blueprinter::Base
    
    identifier :id
    
    view :normal do
        fields :title, :description, :content, :slug, :photo_data
    end

    view :extended do
        include_view :normal
        exclude :id
        association :author, blueprint: AuthorBlueprint, view: :normal
    end
end