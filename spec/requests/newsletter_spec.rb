require 'rails_helper'

RSpec.describe "Newsletter API", type: :request do

    describe 'POST /newsletters' do

        it 'Create a newsletter' do
            post "http://localhost:3000/api/v1/newsletters", params: { newsletter: { email: 'testers@testers.com' }}
            expect(response.status).to eq(200)
        end
    end
end