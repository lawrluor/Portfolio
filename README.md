# Deployment Instructions

NOTE: I am using yarn for package management, Heroku for deployment

0. Push final version code to github and stage for deployment

1. Create production build. This creates /build folder that can be served
```sh
$ yarn build
```

2. Check that the local static server has changes propagated & is running as expected.
```sh
  $ yarn global add serve
  $ serve -s build
```

3. Push to Heroku master branch:
```sh
  $ git push heroku master:main
```

IF PUSH FAILS:
Remove yarn.lock, then commit and force push to override any node modules.

```sh
$ git rm yarn.lock
$ git commit -m
$ git push -f heroku master:main
```


## Old Deployment Notes (Github Pages)
Z. NOTE: NO LONGER USING GITHUB PAGES: My implementation of Github Pages simply serves from the master branch.
  Therefore, pushing code to the master branch should update code.
  May take 10 minutes+ to propagate changes: https://stackoverflow.com/questions/24851824/how-long-does-it-take-for-github-page-to-show-changes-after-changing-index-html
  If using the gh-pages branch, see https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a
  Also see here https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment
