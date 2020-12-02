// const axios = require('axios');
// const config = require('../../config');
import axios from 'axios';
import config from '../../config';

const getModulesData = (route) => {
  console.log('Fetching Page Modules....');
  const { pageUrl, apiKey, internalName, prePath } = config;
  if (route === '/') route = '/home';

  return axios({
    method: 'GET',
    url: pageUrl,
    headers: {
      'x-api-key': apiKey,
    },
    params: {
      path: prePath + route,
      site: internalName,
      includeContent: true,
      moduleOffset: 0,
      moduleLimit: 4,
      languageCode: 'default',
      countryCode: 'IN',
    },
  }).then((res) => {
    console.log('Page Modules Api Status: ', res.status);
    return res.data;
  });
};

const getPageLayout = (page) => {
  console.log('Fetching Page ayout...');
  const { moduleList } = config;

  const { id } = page;
  console.log(moduleList(id));
  return axios({
    method: 'GET',
    url: moduleList(id),
  }).then((res) => {
    console.log('Layout Api status: ', res.status);
    return res.data;
  });
  // .catch(() => console.log('err'));
};

//

const getPageData = async (route) => {
  try {
    const content = await getModulesData(route);
    const layout = await getPageLayout(content);

    console.log('Layout, Modules Data fetched successfully');

    return { content, layout };
  } catch (err) {
    console.log('getPageData error');
  }

  // return new Promise((resolve, reject) => {
  //   return getModulesData(route)
  //     .then((res) => {
  //       content = res.data;
  //     })
  //     .then(() => getPageLayout(content))
  //     .then((res) => {
  //       layout = res;
  //     })
  //     .then(() => {
  //       // console.log(content);

  //       return { content, layout };
  //     })
  //     .catch((err) => console.log('getPageData error'));
  // };

  //})
};

export default getPageData;
