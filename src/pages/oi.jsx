import React from 'react';
import { Image } from 'antd';

const Image1 = require('../images/Rectangle (2).png');

const App = () => {
  return (
    <div className="gridprojects">
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        <div className="oioi item-1">
          <Image
            width={320}
            src="https://static.wixstatic.com/media/72c0b2_507aa1ca140f42739ac20c11e99b08fe~mv2.jpg/v1/fill/w_640,h_1388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/72c0b2_507aa1ca140f42739ac20c11e99b08fe~mv2.jpg"
            alt=""
            loading="eager"
          />
        </div>
        <div className="oioi item-2">
          <Image
            width={320}
            src="https://static.wixstatic.com/media/72c0b2_507aa1ca140f42739ac20c11e99b08fe~mv2.jpg/v1/fill/w_640,h_1388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/72c0b2_507aa1ca140f42739ac20c11e99b08fe~mv2.jpg"
            alt=""
            loading="eager"/>
        </div>
        <div className="oioi item-3">
          <Image
            width={320}
            src="https://static.wixstatic.com/media/72c0b2_507aa1ca140f42739ac20c11e99b08fe~mv2.jpg/v1/fill/w_640,h_1388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/72c0b2_507aa1ca140f42739ac20c11e99b08fe~mv2.jpg"
            alt=""
            loading="eager"
          />
        </div>
      </Image.PreviewGroup>
    </div>
  );
};

export default App;