# shimisunet

WordPress theme using Vue.js and WP REST API.

## Build Setup

``` zsh

# create docker-machine
docker-machine create --driver virtualbox [machine name]
eval $(docker-machine env machine name)
docker-compose up -d

# WordPress server
http://localhost:6001

# install dependencies
yarn install

# Vue.js serve with hot reload at localhost:8080
yarn dev

# Vue.js build for production with minification
yarn build

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
