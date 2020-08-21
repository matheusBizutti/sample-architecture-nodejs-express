# Sample architecture project - NodeJS
NodeJS repo

## Running the project (locally)

To put this project to work (locally), you'll need a `.env` file (like the `.env-sample` file in this repository).
Inside this sample you'll find all variables you need. To fill the values.

Values expected for `NODE_ENV`: 
- `dev`,
- `homolog`,
- `production`

Once you've set up the environment variables, run the command `npm run start:local`. If everything went well, you should see in your terminal the environment, the port that this project is running and a message saying that it's `app:server Sample server is running with https on port: 3000 +0ms`.

-----------

## Documentation (APIDoc)

To generate docs, just run 

```
npm run docs
```

and then access https://localhost:3000/apidoc.

The process for documenting routes is described [here](http://apidocjs.com/#getting-started), and you can see some samples in `src/routes/api/v1`.

-----------

## Linting and code rules/standards

`npm run lint`.

-----------

-----------

## NOT USE CONSOLE.LOG - USE DEBUG

set DEBUG=* to show all logs of application.
set DEBUG=app:* to show all logs just application
``.

-----------

## Generate HTTPS Certificate

access: `src/https-config/` and mkdir `certificates` and run the commands in sequence:
```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem / set .env PASSPHRASE with value
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

## View the file - env.sample

and create the variables in new .env file
