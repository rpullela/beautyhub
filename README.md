# Liberty portal template

This repo includes several packages:
1. `studio` - sanity studio
2. `beauty-portal-theme` - Gatsby theme for the portal
3. `web` - Gatsby website, based on `beauty-portal-theme`

## Configuration

1. `web` supports configuration files (`packages/web/.env.production`, `packages/web/.env.development`) where you can specify required env vars.

Currently, we have included all the environment variables for you inside provisioning, in case you want addition functionality like addition of sanity read token just include environment variables as follows: 

````
app_local_sanityToken = "yourTokenValue"

````

2. Algolia Integration is provided by default with a search index created by Platform Liberty Team, if you want to provision search with algolia. in case you want to override these setting change the Algolia Keys located inside .env files. Also, to create new indexes specific to your needs , please uncomment the `gatsby-algolia-plugin` located inside `beauty-portal-theme/gatsby-config.js`. This will enable the gastby to interact with algolia at the time build process. 

Also, to make these overridden settings effective at CI/CD , you need to add following github repo secrets:

````
ALGOLIA_APP_ID=<<value>>
ALGOLIA_SEARCH_API_KEY=<<value>>

````
# Installation

1. run `yarn` from repo root
2. that's it :)

## Commands

1. Run gatsby website: `yarn workspace web develop`
2. Run sanity studio: `yarn workspace studio develop`
3. Build the web: `yarn workspace web build`
4. Build the studio: `yarn workspace studio build`
5. graphql-deploy: `yarn workspace studio graphql-deploy`

you can find more about specific commands inside package.json of studio or web folder or located at the root for combined actions.

## Authorize LightHouse Plugin with Github for PR Comments with Lighthouse Results:
1. Navigate to https://github.com/apps/lighthouse-ci and click on install 
2. Authorise (Need organisation admin access to add to organisation repo)
3. Copy the LHCI_GITHUB_APP_TOKEN token on Authorisation page
4. Add this Token to GitHub Secrets.
