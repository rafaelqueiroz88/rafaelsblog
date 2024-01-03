require 'rails_helper'

RSpec.describe Post, type: :model do

    describe 'New Post' do

        let!(:valid_author) { FactoryBot.create(:author) }

        scenario 'Valid Post' do
            author = {name: 'Rafael', bio: 'Some real cool test bio'}
            post = {
                title: 'Test Post Title', 
                description: 'Test Post Description', 
                content: '<h2>Test</h2><br />Test content', 
                author_id: valid_author.id
            }
            post = Post.new(post)
            expect(true).to eq(post.save)
        end

        scenario 'Invalid Post' do
            post = {
                title: 'Test Post Title', 
                description: 'Test Post Description', 
                content: '<h2>Test</h2><br />Test content'
            }
            post = Post.new(post)
            expect(false).to eq(post.save)
        end

        scenario 'Setting Author' do
            post = Post.new()
            post.set_author(valid_author.id)
            expect(valid_author.id).to eq(post.author_id)
        end
    end
end