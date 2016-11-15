#CodeConnect
##Description
Open Source Platform for Open Source Projects. Contributers are welcome!

## Install
    npm install

## Set up the Repo
You should create an .env file in the root directory with your arguments of

    MAILGUN_USERNAME =      'YOUR_MAILGUN_USERNAME'
    MAILGUN_PASSWORD =      'YOUR_MAILGUN_PASSWORD'

    GITHUB_CLIENT_ID =      'YOUR_GITHUB_CLIENT_ID'
    GITHUB_CLIENT_SECRET =  'YOUR_GITHUB_CLIENT_SECRET'
    CALLBACK =              'YOUR_CALLBACK_URL'

    DATABASE_URL =          'YOUR_POSTGRESQL_DB'
    SECRET =                'A_RANDOM_SECURITY_SECRET'

## Build
    npm run build

## Run Application
    node server.js

## Run Tests
    npm test
