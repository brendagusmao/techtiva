import { Image } from 'antd';
import Image1 from '../images/Rectangle (2).png';
// import Image2 from '../images/Rectangle.png';

const App = () => (
  <div className="gridprojects">
  <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    <div className="oioi"><Image width={320} src="https://i.pinimg.com/originals/ac/97/d1/ac97d16bb7e22802b051da75c417b30f.jpg" /> </div>
    <div className="oioi"><Image width={320} src="https://s.tmimgcdn.com/scr/53600/isp-responsive-landing-page-template_53666-original.jpg" /></div>
    <div className="oioi"><Image width={320} src="https://i.pinimg.com/originals/2b/25/af/2b25af6f83615b2a1aa67968f0a22415.png" /></div>
    <div className="oioi"><Image width={320} src={Image1} /></div>
    <div className="oioi"><Image width={320} src={Image1} /></div>
  </Image.PreviewGroup>
  </div>
);
export default App;