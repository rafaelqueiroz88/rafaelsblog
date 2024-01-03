FactoryBot.define do
    factory :post do
        title { Faker::Lorem.word }
        description { Faker::Lorem.word }
        content { Faker::Lorem.word } 
    end
end