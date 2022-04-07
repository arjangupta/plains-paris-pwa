import './MobileView.css'
import TopLeftPic from './images/justin_and_tara.png'
import TopRightPic from './images/plainsparis-balloon-logo-cropped.png'

function MobileView() {
  return (
    <div>
      <div className="Mobile-header-left">
        <img src={TopLeftPic} className="Top-left-pic" alt="Justin and Tara"/>
      </div>
      <div className='Mobile-header-right'>
        <img src={TopRightPic} className="Top-right-pic" alt="Plain's Paris Logo"/>
      </div>
    </div>
  );
}

export default MobileView;
