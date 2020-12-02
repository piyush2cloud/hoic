import React, { useEffect, useState } from 'react';
import axios from 'axios';

import _axios from './apis/loadData';
import config from './../../config';

export default function L({ bottom }) {
  // loadData = () => {
  //   _axios({
  //     params: {
  //       path: '/vamp/home',
  //       moduleOffset: this.state.offset,
  //     },
  //   }).then((res) => console.log(res));
  // };

  useEffect(() => {
    _axios({
      params: {
        path: '/vamp/home',
        moduleOffset: 0,
        site: config.internalName,
        includeContent: true,
        moduleLimit: 4,
        languageCode: 'default',
        countryCode: 'IN',
      },
    }).then((res) => console.log(res));
  }, []);
  return null;
}
