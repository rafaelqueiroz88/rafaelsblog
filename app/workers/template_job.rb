class TemplateJob < ApplicationJob

    queue_as :default

    # This resource is working properly. Update this or create some new functions that you really need
    # TODO: improve this function with some real stuff
    def perform(*args)

        sender = Sender.all.first

        subject = "Some magical subject"
        message = "Some body message here"

        # Example with someone else's email address
        arg = "some_email_address@here.com"
        
        Pony.mail(:to => arg, :via => :smtp, :subject => subject, :body => message, :via_options => {
            address: sender.address,
            port: sender.port,
            user_name: sender.user_name,
            password: sender.password,
            authentication: :plain,
            domain: sender.domain
        })

        sleep 5
    end
end