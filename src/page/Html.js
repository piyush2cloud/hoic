import React from 'react';

const Html = ({ children, initialState, scripts, moreScripts }) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <meta
        http-equiv="Content-Security-Policy"
        content="default-src *;
   img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *;
   style-src  'self' 'unsafe-inline' *"
      /> */}
      <title>Hoichoi</title>
      <link rel="stylesheet" type="text/css" href="css/style.css" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://appcmsprod.viewlift.com/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/generated/favicon-16x16.png"
      ></link>

      {/* <meta http-equiv="Content-Security-Policy" content="default-src https://appcmsprod.viewlift.com/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/generated/favicon-16x16.png; child-src 'none'; object-src 'none'"></meta> */}
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: children }} />

      {initialState && (
        <script
          dangerouslySetInnerHTML={{
            __html: `window.APP_STATE=${JSON.stringify(initialState)}`,
          }}
        />
      )}

      {scripts.map((item, idx) => (
        <script key={idx} src={item} />
      ))}
    </body>
  </html>
);

export default Html;
