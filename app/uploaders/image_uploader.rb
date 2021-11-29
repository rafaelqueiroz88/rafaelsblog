require "image_processing/mini_magick"

class ImageUploader < Shrine

    plugin :derivatives
    plugin :validation
    plugin :validation_helpers

    Attacher.validate do
        validate_mime_type_inclusion ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
        validate_max_size 5*1024*1024
    end

    Attacher.derivatives do |original|
        magick = ImageProcessing::MiniMagick.source(original)
        {
            large: magick.resize_to_limit!(800, 800),
            medium: magick.resize_to_limit!(500, 500),
            small: magick.resize_to_limit!(300, 300)
        }
    end
end