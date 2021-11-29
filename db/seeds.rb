# Data available at aws console
Aw.create({
    bucket: "bucket_name here",
    region: "region_name here",
    access_key_id: "access_key_id here",
    secret_access_key: "secret_access_key here"
})

Sender.create({
    address: 'your.smtp.here',
    port: 'port_here',
    user_name: 'your.username@here.com', # suposed to be an e-mail address
    password: 'y0urP4$$w0RDh3rE', # properly configured if user has gmail
    authentication: :plain,
    domain: 'your-smtp-domain.here'
})