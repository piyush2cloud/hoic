// const path = require('path');

const env = 'prod';
// const env = 'staging';

const client =
  env === 'staging'
    ? {
        id: '57e4b76f-6168-41af-bdd8-c76a2e5bf798',
        domainName: 'staging-hoichoitv.viewlift.com',
        apiKey: 'BkSBbok02k6RYUlCLRzI23wac0euoSfC3FP7uW2S',
        internalName: 'staging-hoichoitv',
        pageUrl: 'https://staging-api.viewlift.com/content/pages',
      }
    : {
        id: '7fa0ea9a-9799-4417-99f5-cbb5343c551d',
        domainName: 'hoichoi.tv',
        apiKey: 'dtGKRIAd7y3mwmuXGk63u3MI3Azl1iYX8w9kaeg3',
        internalName: 'hoichoitv',
        pageUrl: 'https://prod-api-cached-2.viewlift.com/content/pages',
      };

const { id, domainName, apiKey, internalName, pageUrl } = client;

module.exports = {
  prePath: env === 'staging' ? '/vamp' : '',
  apiProxy: `https://${env}-api.viewlift.com`,
  static: 'public',
  apiKey,
  layoutUrlBase: `https://appcms${env}.viewlift.com/`,
  siteConfigUrl: `https://appcms${env}.viewlift.com/${id}/main.json`,
  siteInfoCachedUrl: `https://${env}-api.viewlift.com/content/sites?domainName=${domainName}`,
  siteConfigWebUrl: `https://appcmsstaging.viewlift.com/${id}/web.json?version=0.11140.0`,
  pageUrl,
  moduleList: (pageId) =>
    `https://appcms${env}.viewlift.com/${id}/web/${pageId}.json`,
  internalName,
};

// : 'https://prod-api-cached-2.viewlift.com/content/pages',
