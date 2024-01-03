require 'sidekiq'

sidekiq_config = { url: ENV['JOB_WORKER_URL'] }

Sidekiq.configure_server do |c|
    c.redis = sidekiq_config
    schedule_file = "config/post_schedule.yml"
    if File.exist?(schedule_file)
        Sidekiq::Cron::Job.load_from_hash YAML.load_file(schedule_file)
    end
end

Sidekiq.configure_client do |c|
    c.redis = sidekiq_config
end