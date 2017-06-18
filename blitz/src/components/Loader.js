import React from 'react';
import Header from '../containers/Header';
import {bodyContainer} from './style';

const Loader = () => {
      return  <div>
                <Header />
                <div style={bodyContainer}>
                  <div className='loader'></div>
                </div>
              </div>
}

export default Loader;
