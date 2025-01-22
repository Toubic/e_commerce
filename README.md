# Project

Testing with Visa Checkout

To test your integration against Visa Checkout’s sandbox, create a new Visa Checkout user account during the checkout process on your website. Configure the account to use the test card number 4242 4242 4242 4242, a random three-digit CVC number, and any expiration date in the future. Complete the checkout process as normal. If everything worked correctly, Visa Checkout will redirect you back to your application, which should create the charge as expected. (https://stripe.com/docs/visa-checkout)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
