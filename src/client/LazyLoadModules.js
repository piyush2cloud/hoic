import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

// custom
import { debounce } from './tools/globalFunc';
import { loadModules } from './lazyLoad';
import Loader from './components/Loader';
import config from '../../config';
import axios from 'axios';

const LazyLoadModules = (props, { location }) => {
  const [loading, setLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [newModules, setNewModules] = useState([]);
  let moreToloadData = true;
  const offset = props.offset;
  const moduleToLoadOnLazy = 4;
  const moduleList = props.moduleList;
  const components = props.components;
  const pathname = props.pathname;

  const loadData = function () {
    moreToloadData = false;
    setLoading(true);
    loadNextComponents();
  };

  const isBottomOfPage = () => {
    return (
      window.innerHeight + Math.round(window.scrollY) >=
      document.body.offsetHeight
    );
  };

  const handleScroll = (event) => {
    event && event.preventDefault();
    if (isBottomOfPage() && moreToloadData && offset < moduleList.length) {
      // if (this.scrollOffset !== this.offset && this.activateScroll) {
      loadData();
      // }
    }
  };

  useEffect(() => {
    ['wheel', 'touchmove', 'scroll'].forEach((e) => {
      window.addEventListener(e, debounce(handleScroll, 50), {
        passive: false,
      });
    });

    return () => {
      ['wheel', 'touchmove', 'scroll'].forEach((e) => {
        window.removeEventListener(e, handleScroll);
      });
    };
  }, []);

  const loadNextComponents = () => {
    const { pageUrl, apiKey, internalName, prePath } = config;
    console.log(location);
    const route = pathname;

    console.log('offset', offset, moduleList.length);

    return (
      axios({
        method: 'GET',
        url: pageUrl,
        headers: {
          'x-api-key': apiKey,
        },
        params: {
          path: prePath + route,
          site: internalName,
          includeContent: true,
          moduleOffset: offset,
          moduleLimit: 4,
          languageCode: 'default',
          countryCode: 'IN',
        },
      })
        .then((res) => {
          console.log({ 'page data': res.data });
          ['wheel', 'touchmove', 'scroll'].forEach((e) => {
            window.removeEventListener(e, handleScroll);
          });
          const newModuleData = [...res.data.modules];
          if (newModuleData.length) {
            setNewModules(newModuleData);
            setLoading(false);
            setHasLoaded(true);
          } else {
            setHasLoaded(false);
            setLoading(false);
          }
        })
        // .then(() => this.setState({ loading: false }))
        .catch((err) => console.log(err.message))
    );
  };

  return (
    <>
      {loading && <Loader />}
      {newModules.length !== 0 ? loadModules(newModules, moduleList) : ''}
      {hasLoaded && (
        <LazyLoadModules
          components={components}
          moduleList={moduleList}
          offset={offset + moduleToLoadOnLazy}
          pathname={pathname}
        />
      )}
    </>
  );
};

export default withRouter(LazyLoadModules);
