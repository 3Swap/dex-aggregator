<div align="center">

</div>

# 3Swap

## Getting Started

In the root directory run the following commands to get started:

```
yarn
```

to install all dependencies, and choose one of these start commands to start the development vite server and to start building packages in watch mode.

```
yarn dev
yarn dev:local
yarn dev:testnet
yarn dev:staging
yarn dev:production
```

Please refer to the following descriptions of the dev serve scripts:

    dev - starts the app using the backend develop stage
    dev:local - starts the app using a locally running backend
    dev:testnet - starts the app in a testnet only mode using the backend staging stage
    dev:staging - starts the app using the backend staging stage
    dev:production - starts the app using the backend production stage

### Husky Scripts

In addition to these commands you should also run

```
yarn husky install
```

if you plan to commit to this repository to use all necessary husky hooks. If you have trouble running a script try modifying the permissions for the scripts with

```
chmod ug+x .husky/
```

to mark them as executables
