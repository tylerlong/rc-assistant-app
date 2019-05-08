# RC Assistant App


## How to run in dev env

```
npx webpack-dev-server --colors --progress \
--env.SERVER='https://platform.devtest.ringcentral.com' \
--env.CLIENT_ID='<CLIENT_ID>' \
--env.CLIENT_SECRET='<CLIENT_ID>' \
--env.REDIRECT_URI='http://localhost:8080'
```


## How to release to prod

```
npx webpack --colors --progress \
--env.SERVER='https://platform.ringcentral.com' \
--env.CLIENT_ID='<CLIENT_ID>' \
--env.CLIENT_SECRET='<CLIENT_ID>' \
--env.REDIRECT_URI='<REDIRECT_URI>'
```
