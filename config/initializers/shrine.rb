require "shrine"
require "shrine/storage/url"
require "shrine/storage/file_system"
require "shrine/storage/s3"

Shrine.storages[:cache] = Shrine::Storage::Url.new
Shrine.storages[:store] = Shrine::Storage::Url.new

Shrine.storages = {
    cache: Shrine::Storage::FileSystem.new("public", prefix: "uploads/cache"),
    store: Shrine::Storage::FileSystem.new("public", prefix: "uploads")
}

unless AWS_ACCESS_KEY_ID.nil? || AWS_ACCESS_KEY_ID == ""
    s3_options = nil
    s3_options = {
        public: true,
        bucket: AWS_BUCKET,
        region: AWS_REGION,
        access_key_id: AWS_ACCESS_KEY_ID,
        secret_access_key: AWS_SECRET_ACCESS_KEY
    }

    Shrine.storages = {
        cache: Shrine::Storage::S3.new(upload_options: {acl: 'public-read', cache_control: 'public, max-age=3600'}, **s3_options),
        store: Shrine::Storage::S3.new(upload_options: {acl: 'public-read', cache_control: 'public, max-age=3600'}, **s3_options),
    }
end

Shrine.plugin :activerecord 
Shrine.plugin :cached_attachment_data
Shrine.plugin :restore_cached_data
Shrine.plugin :validation
Shrine.plugin :validation_helpers
Shrine.plugin :remote_url, max_size: 20*1024*1024
Shrine.plugin :derivatives