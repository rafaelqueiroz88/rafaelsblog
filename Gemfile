source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.2'

gem 'aws-sdk-s3'
gem 'bcrypt', '~> 3.1.7'
gem 'blueprinter'
gem 'bootsnap', '>= 1.4.4', require: false
gem 'image_processing'
gem 'jbuilder', '~> 2.7'
gem 'jwt'
gem 'oj'
gem 'pg', '~> 1.1'
gem 'pony', '~> 1.11'
gem 'puma', '~> 5.0'
gem 'rails', '>= 7'
gem 'redis'
gem 'sass-rails', '>= 6'
gem 'shrine'
gem 'shrine-url'
gem 'sidekiq'
gem 'sidekiq-cron'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
gem 'webpacker', '~> 5.0'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'factory_bot_rails'
  gem 'faker'
end

group :development do
  gem 'listen', '~> 3.3'
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'spring'
  gem 'web-console', '>= 4.1.0'
end

group :test do
  gem 'capybara', '>= 3.26'
  gem 'database_cleaner-active_record'
  gem 'rexml'
  gem 'rspec-rails'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end
