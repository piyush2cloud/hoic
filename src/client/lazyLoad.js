import React from 'react';
import loadable from '@loadable/component';

import mapModule from './map';

const variant = [
  '',
  '',
  '',
  '',
  '',
  'long',
  '',
  'cube',
  '',
  'extra-wide',
  '',
  'circle',
  '',
  'genre',
  'series',
  'new-release',
  'original-series',
  '',
  '',
];

export const loadModules = (newModules, moduleList) => {
  // return null;
  let contentData = {};

  return newModules.map((moduleData, idx) => {
    if (!moduleData) return null;
    // console.log(moduleData);
    let { id } = moduleData;
    let { blockName = 'NA', settings = 'NA' } = moduleList.find(
      ({ id: moduleID }) => moduleID === id
    );

    let moduleName = mapModule[blockName];

    console.log({ moduleName });
    if (!moduleName) return null;
    contentData = moduleData;

    // console.log(contentData);

    let Module = loadable((props) =>
      import(`./components/${props.moduleName}`)
    );
    return (
      <Module
        moduleData={contentData}
        moduleName={moduleName}
        key={`${idx}-modules`}
        s={settings}
      />
    );
  });
};
