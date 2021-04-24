Serverless DynamoDB Experiment
==================

## Requirements

- [Serverless](https://github.com/serverless/serverless)
```sh
$  npm install -g serverless
```
- [Serverless local dynamodb plugin](https://www.npmjs.com/package/serverless-dynamodb-local)
```sh
$  sls dynamodb install
```

## Get Started

Run serverless infrastructure locally.
```
$ npm install
$ sls offline start --watch
```

Hit the API in another terminal.
```
$ curl -X POST -d "email=test@gmail.com"  http://localhost:3000/dev/users
$ curl http://localhost:3000/dev/users
```
