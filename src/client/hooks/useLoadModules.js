import { useEffect, useState } from 'react';
import axios from 'axios';

import { loadModules } from '../lazyLoad';
import config from '../../../config';

export default function useLoadModules(offset, layout, contentData) {
  const { moduleList } = layout;
  const { modules } = contentData;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [components, setComponents] = useState(
    loadModules(moduleList.slice(0, 4), modules)
  );
  const [hasMore, setHasMore] = useState(true);

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    if (offset === 0) return;
    console.log('running, useeffe');
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: config.pageUrl,
      headers: {
        'x-api-key': config.apiKey,
      },
      params: {
        path: '/vamp/home',
        site: config.internalName,
        includeContent: true,
        moduleOffset: offset,
        moduleLimit: 4,
        languageCode: 'default',
        countryCode: 'IN',
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log(res);
        setComponents((prevComponents) => {
          return [
            ...prevComponents,
            ...loadModules(moduleList, res.data.modules),
          ];
        });
        setHasMore(false);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [offset]);

  return { loading, error, components, hasMore };
}
