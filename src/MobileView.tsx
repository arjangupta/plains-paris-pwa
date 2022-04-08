import './MobileView.css'
import TopLeftPic from './images/justin_and_tara.png'
import TopRightPic from './images/plainsparis-balloon-logo-cropped.png'

function MobileView() {
  return (
    <div className='Mobile-view'>
      <div className="Mobile-header-left">
        <img src={TopLeftPic} className="Top-left-pic" alt="Justin and Tara"/>
      </div>
      <div className='Mobile-header-right-top'>
        <img src={TopRightPic} className="Top-right-pic" alt="Plain's Paris Logo"/>
      </div>
      <div className='Mobile-header-right-bottom'>
        2850 NE Kendallwood Pkwy, Gladstone, MO 64119
      </div>
      <div className='body-section'>
        <hr className='solid'></hr>
        <div className='button-section'>
          <button>
            Refer Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileView;
