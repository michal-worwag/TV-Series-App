import React from 'react';
import loaderGif from '../../assets/loader.jpg';

const Loader = props => (
  <div>
    <img
    style={{width: 75}}
     src={loaderGif} alt="Loader icon"/>
  </div>
)

export default Loader;
