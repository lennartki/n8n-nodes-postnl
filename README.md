# @lennartki/n8n-nodes-postnl

![n8n logo](n8n.png)

Project for [**PostNL OpenAPI spec**](https://api.postnl.nl/)
using [**devlikeapro/n8n-openapi-node**](https://github.com/devlikeapro/n8n-openapi-node)



<!-- toc -->

- [Run PostNL n8n node locally](#run-postnl-n8n-node-locally)
  * [NodeJS](#nodejs)
  * [Install n8n](#install-n8n)
  * [Start n8n](#start-n8n)
  * [Build and link the project](#build-and-link-the-project)
  * [Add node to n8n](#add-node-to-n8n)
  * [Start n8n again](#start-n8n-again)
  * [Add PostNL Node to new workflow](#add-postnl-node-to-new-workflow)
- [Modify Project](#modify-project)
  * [Test Project Locally](#test-project-locally)
  * [Publish project](#publish-project)

<!-- tocstop -->

# Run PostNL n8n node locally
Before start modifying the project, we kindly recommend
to run the PostNL locally.

## NodeJS
Make sure you're using Node.js > 20 (we're using [nvm](https://github.com/nvm-sh/nvm)):
```bash
nvm install v22.8
nvm use v22.8
```

## Install n8n 
```bash
npm install n8n -g
```

## Start n8n
```bash
n8n --version
n8n start
```
Open [http://localhost:5678](http://localhost:5678) in your browser and configure it

## Build and link the project
```bash
npm install
npm run test
npm run build
npm link
```

## Add node to n8n
```bash
cd ~/.n8n
mkdir -p custom
cd custom
npm init # press Enter for all questions
npm link @lennartki/n8n-nodes-postnl
```

## Start n8n again
```bash
n8n start
```

## Add PostNL Node to new workflow
Find `PostNL` in the node list and add it to your workflow

![workflow](./images/workflow.png)
![screenshot](./images/screenshot.png)

## Test Project Locally

```bash
npm install
npm run test
npm run build
npm link
```

Add node to n8n:
```bash
cd ~/.n8n
mkdir -p custom
cd custom
npm init # press Enter for all questions
npm link @lennartki/n8n-nodes-postnl
```

Start n8n:
```bash
n8n start
```

## Publish project
1. Add your `NPM_TOKEN` in GitHub Actions
2. Push change
3. Create a new GitHub Release, `1.0.0` in your project
4. Install your node in n8n: `@{yourgithubname}/n8n-nodes-{yournode}`
