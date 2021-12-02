require 'rails_helper'
require 'spec_helper'

RSpec.describe "Posts API", type: :request do
    
    # scenario

    describe 'GET /posts' do
        it 'Successful get' do
            get "http://localhost:3000/api/v1/posts.json"
            expect(response.status).to eq(200)
        end
    end

    describe 'POST /posts' do

        let!(:valid_author) { FactoryBot.create(:author) }

        scenario 'Valid author post' do
            post "http://localhost:3000/api/v1/posts", params: { title: 'Test', description: 'Test description', content: 'Test content', author_slug: valid_author.slug }, as: :json
            expect(response.status).to eq(200)
        end

        it 'Null author post' do
            post "http://localhost:3000/api/v1/posts", params: { title: 'Test', description: 'Test description', content: 'Test content' }, as: :json
            expect(response.status).to eq(404)
        end

        it 'Invalid author post' do
            post "http://localhost:3000/api/v1/posts", params: { title: 'Test', description: 'Test description', content: 'Test content', author_slug: Faker::Lorem.word }, as: :json
            expect(response.status).to eq(404)
        end
    end
end