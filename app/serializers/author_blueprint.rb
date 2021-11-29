class AuthorBlueprint < Blueprinter::Base
    
    identifier :id
    
    view :normal do
        fields :name, :bio, :slug
        exclude :id
    end
end