# Boilerplate Application (change this)

## Installation

Run this command to install the dependencies.

```bash
npm ci
```

## Configuration

Project's configuration is set in [this file](./app/helpers/config.ts).

### Env variables

There are some env variables needed for this project. It's important to create a file called `.env` file to set that field. You can check [`.env.example`](./.env.example) to see how it should look like.

## Development

First, run the development server:

```bash
npm run start
```

Then start the application in the device (or emulator) using the command for the platform
```bash
npm run android
# or
npm run ios
```

## Test

### Unit

To run unit tests
```bash
npm run test
```

