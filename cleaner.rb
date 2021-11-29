require 'sidekiq/api'

# Clear retry set

Sidekiq::RetrySet.new.clear

# Clear scheduled jobs 

Sidekiq::ScheduledSet.new.clear

# Clear 'Dead' jobs statistics

Sidekiq::DeadSet.new.clear

# Clear 'Processed' and 'Failed' jobs statistics

Sidekiq::Stats.new.reset

# Clear specific queue

stats = Sidekiq::Stats.new
stats.queues
# => {"main_queue"=>25, "my_custom_queue"=>1}

queue = Sidekiq::Queue.new('new_post_queue')
queue.count
queue.clear