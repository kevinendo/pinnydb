import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-2664110413381261'
          data-ad-slot='12121212'
          data-ad-format='9552337956' />
    );
  }
}


