ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../config/environment', __dir__)
abort("The Rails environment is running in production mode!") if Rails.env.production?
require 'rspec/rails'
require 'spec_helper'
require 'database_cleaner/active_record'

Dir[Rails.root.join('spec', 'support', '**', '*.rb')].each { |f| require f }

begin
  ActiveRecord::Migration.maintain_test_schema!
rescue ActiveRecord::PendingMigrationError => e
  puts e.to_s.strip
  exit 1
end

RSpec.configure do |config|

  config.include FactoryBot::Syntax::Methods

  config.before(:suite) do
    if Rails.env.test? 
      DatabaseCleaner.clean_with(:truncation)
    end
  end

  config.before(:each) do
    if Rails.env.test?
      DatabaseCleaner.strategy = :transaction
    end
  end

  config.before(:each, :js => true) do
    if Rails.env.test?
      DatabaseCleaner.strategy = :truncation
    end
  end

  config.before(:each) do
    if Rails.env.test?
      DatabaseCleaner.start
    end
  end

  config.after(:each) do
    if Rails.env.test?
      DatabaseCleaner.clean
    end
  end

  # config.before(:suite) do
  #   DatabaseCleaner.clean_with(:truncation)
  #   DatabaseCleaner[:active_record].strategy = :transaction
  # end

  # config.before(:all) do
  #   DatabaseCleaner.start
  # end

  # config.after(:all) do
  #   DatabaseCleaner.clean
  # end  

  config.fixture_path = "#{::Rails.root}/spec/fixtures"
  config.use_transactional_fixtures = true
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!
end