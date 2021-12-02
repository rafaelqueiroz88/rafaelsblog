FactoryBot.define do
    factory :author do
        name { Faker::Lorem.word }
        bio { Faker::Lorem.word }
    end
end