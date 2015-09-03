/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
class GoogleTagManager extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let html = {__html: ' \
      <!-- Google Tag Manager --> \
      <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TJKS8D" \
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> \
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start": \
      new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0], \
      j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src= \
      "//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);\
    })(window,document,"script","dataLayer","GTM-TJKS8D");</script>\
      <!-- End Google Tag Manager -->'};

    return (
      <div dangerouslySetInnerHTML={html} />
    );
  }

}

export default GoogleTagManager;
