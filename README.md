# Windmill React App Whitelabelling

Demo can be found [here](https://windmill-sdk-example.com/).

The example uses app.windmill.dev as a backend to create an account there and
use your credentials to login.

This project demonstrates how Windmill can be whitelabelled in a React app using
webpack.

Whitelabelling requires a special license and the package
`@windmill-labs/windmill-react-sdk` is not public. Please contact us at
sales@windmill.dev to get started.

## Getting Started

Have a windmill instance available at `localhost:8000` (or change
package.json/proxy) that accepts `admin@windmill.dev / changeme`

```
npm install
npm run dev
```

## Workers

Monaco workers need to be available at the /assets/ path. This is done by
calling `./copy_workers.sh` which will pull them from node_modules. It is
already done on this repo.
