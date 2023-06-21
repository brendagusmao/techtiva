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
            src="https://i.pinimg.com/originals/ac/97/d1/ac97d16bb7e22802b051da75c417b30f.jpg"
            alt=""
            loading="eager"
          />
        </div>
        <div className="oioi item-2">
          <Image
            width={320}
            src="https://s.tmimgcdn.com/scr/53600/isp-responsive-landing-page-template_53666-original.jpg"
            alt=""
            loading="eager"/>
        </div>
        <div className="oioi item-3">
          <Image
            width={320}
            src="https://i.pinimg.com/originals/2b/25/af/2b25af6f83615b2a1aa67968f0a22415.png"
            alt=""
            loading="eager"
          />
        </div>
        <div className="oioi item-4">
          <Image width={320} src={Image1} alt=""
            loading="eager" />
        </div>
        <div className="oioi item-5">
          <Image width={320} src={Image1} alt=""
            loading="eager"/>
        </div>
        <div className="oioi item-6">
          <Image
            width={320}
            src="https://i.pinimg.com/originals/2b/25/af/2b25af6f83615b2a1aa67968f0a22415.png"
            alt=""
            loading="eager"
          />
        </div>
      </Image.PreviewGroup>
    </div>
  );
};

export default App;