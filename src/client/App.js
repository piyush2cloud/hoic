import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loadModules } from './lazyLoad';
import LazyLoadModules from './LazyLoadModules';
import { getCachePageData } from './redux/actions/pageActions';

const App = ({ layout, contentData = '', location, getCachePageData }) => {
  const [components, setComponents] = useState([]);
  // const initComp = layout.moduleList.slice(0, 4);

  useEffect(() => {
    setComponents(contentData.modules);
  }, []);

  useEffect(() => {
    console.log(!contentData || !layout);
    if (!contentData || !layout) {
      getCachePageData(location.pathname);
    }
  }, [contentData, layout]);

  const { modules } = contentData;
  const { moduleList } = layout;

  return (
    <div>
      {modules && moduleList && loadModules(modules, moduleList)}
      {modules && moduleList && (
        <LazyLoadModules
          components={components}
          moduleList={layout.moduleList}
          offset={4}
          pathname={location.pathname}
        />
      )}
    </div>
  );
};

export default withRouter(
  connect(
    (state, ownProps) => {
      const path = ownProps.location.pathname;
      console.log('client', path);
      return {
        state,
        layout: state[`MOD-${path}`] || '',
        contentData: state[`CON-${path}`] || '',
      };
    },
    { getCachePageData }
  )(App)
);
