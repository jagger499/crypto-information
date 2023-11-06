# PRACTICE TEST MOBILE SENIOR

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

```bash
# I create the proyect using node 18 make sure is the same version
# If you have nvm use
nvm use 18
```

## Code Documentation

I follow the TSDoc standard for documenting our code. Below is an example of the comment format:

```typescript
/**
 * This is an example of a TSDoc comment.
 *
 * @param {string} param1 - The first parameter.
 * @param {number} param2 - The second parameter.
 * @returns {boolean} The result of the operation.
 */
function exampleFunction(param1, param2) {
    // Function implementation here
    return true;
}
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# make sure you install the dependencies
yarn install

# using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# make sure you install the dependencies
yarn install

# OR using Yarn
yarn android
```

### For iOS

```bash
# make sure you install the pods
cd ios/
pod install

# using Yarn
yarn ios
```
## Running Unit Tests
To run unit tests for this project, use the following command:
```bash
# make sure you install the dependencies
yarn install

# using Yarn
yarn test
```


If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
