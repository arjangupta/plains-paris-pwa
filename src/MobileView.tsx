import './MobileView.css'
import TopLeftPic from './images/justin_and_tara.png'
import TopRightPic from './images/plainsparis-balloon-logo-cropped.png'
import FacebookIcon from './icons/icons8-facebook-100.png'
import InstagramIcon from './icons/icons8-instagram-100.png'
import WebsiteIcon from './icons/icons8-website-100.png'
import React from 'react'
import './Modal'

class MobileView extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      showReferUs: false,
      showContactUs: false,
      showAboutUs: false
    }
    console.log(`State is as follows: ${JSON.stringify(this.state)}`)
    // this.showReferUsModal = this.showReferUsModal.bind(this);
  }

  showReferUsModal = () => {
    this.setState({ showReferUs: true });
    console.log(`State is as follows: ${JSON.stringify(this.state)}`)
  }

  hideReferUsModal = () => {
    this.setState({ showReferUs: false });
    console.log(`State is as follows: ${JSON.stringify(this.state)}`)
  }

  showContactUsModal = () => {
    this.setState({ showContactUs: true });
    console.log(`State is as follows: ${JSON.stringify(this.state)}`)
  }

  hideContactUsModal = () => {
    this.setState({ showContactUs: false });
    console.log(`State is as follows: ${JSON.stringify(this.state)}`)
  }

  showAboutUsModal = () => {
    this.setState({ showAboutUs: true });
    console.log(`State is as follows: ${JSON.stringify(this.state)}`)
  }

  hideAboutUsModal = () => {
    this.setState({ showAboutUs: false });
    console.log(`State is as follows: ${JSON.stringify(this.state)}`)
  }

  render() {
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
            <button type="button" onClick={this.showReferUsModal}>
              Refer Us
            </button>
            <button type="button" onClick={this.showContactUsModal}>
              Contact Us
            </button>
            <button type="button" onClick={this.showAboutUsModal}>
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
}

export default MobileView;
