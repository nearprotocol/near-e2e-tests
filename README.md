# near-e2e-tests

End-to-end tests for NEAR apps


## Install dependencies

```
yarn
```

## Running locally
```
yarn test
```

## Running on cloud

Need to have environment variables or `.env` file:

```
ELENIUM_USERNAME=<username>
SELENIUM_ACCESS_KEY=<password/access key>
```

```
NODE_ENV=ci yarn test:ci
```

## Useful links

- [GitLab project](https://gitlab.com/near-protocol/near-e2e-tests)
- [CBT results](https://app.crossbrowsertesting.com/selenium/results)
