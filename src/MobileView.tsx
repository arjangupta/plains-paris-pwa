import './MobileView.css'
import TopLeftPic from './images/justin_and_tara.png'
import TopRightPic from './images/plainsparis-balloon-logo-cropped.png'
import FacebookIcon from './icons/icons8-facebook-100.png'
import InstagramIcon from './icons/icons8-instagram-100.png'
import WebsiteIcon from './icons/icons8-website-100.png'

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
          <button>
            Contact Us
          </button>
          <button>
            About Us
          </button>
        </div>
        <hr className='solid'></hr>
        <div className='bottom-icon-div-fb'>
          <img src={FacebookIcon} className='bottom-icon' alt='Facebook Icon'/>
        </div>
        <div className='bottom-icon-div-insta'>
          <img src={InstagramIcon} className='bottom-icon' alt='Instagram Icon'/>
        </div>
        <div className='bottom-icon-div-website'>
          <img src={WebsiteIcon} className='bottom-icon' alt='Website Icon'/>
        </div>
      </div>
    </div>
  );
}

export default MobileView;
