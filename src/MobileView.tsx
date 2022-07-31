import './MobileView.css'
import TopLeftPic from './images/justin_and_tara.png'
import TopRightPic from './images/plainsparis-balloon-logo-cropped.png'
import FacebookIcon from './icons/icons8-facebook-100.png'
import InstagramIcon from './icons/icons8-instagram-100.png'
import WebsiteIcon from './icons/icons8-website-100.png'
import React from 'react'
import { Modal, ModalPropsType, ReferUsModal, ReferUsModalPropsType } from './Modal'

type MobileViewPropsType = {};
type MobileViewStateType = {
  showReferUs: boolean,
  showContactUs: boolean,
  showAboutUs: boolean,
  mainUiButtonDisabled: boolean
};

class MobileView extends React.Component<MobileViewPropsType, MobileViewStateType> {
  constructor(props: MobileViewPropsType) {
    super(props);
    this.state = {
      showReferUs: false,
      showContactUs: false,
      showAboutUs: false,
      mainUiButtonDisabled: false
    }
  }

  showReferUsModal = () => this.setState({ showReferUs: true, mainUiButtonDisabled: true });

  hideReferUsModal = () => this.setState({ showReferUs: false, mainUiButtonDisabled: false });

  showContactUsModal = () => this.setState({ showContactUs: true, mainUiButtonDisabled: true });

  hideContactUsModal = () => this.setState({ showContactUs: false, mainUiButtonDisabled: false });

  showAboutUsModal = () => this.setState({ showAboutUs: true, mainUiButtonDisabled: true });

  hideAboutUsModal = () => this.setState({ showAboutUs: false, mainUiButtonDisabled: false });

  render() {
    // Declare the parameters for the Refer Us modal
    const referUsModalProps: ReferUsModalPropsType = {
      handleClose: this.hideReferUsModal,
      show: this.state.showReferUs
    }
    // Declare the paramaters for the Contact Us modal
    const contactUsModalProps: ModalPropsType = {
      handleClose: this.hideContactUsModal,
      show: this.state.showContactUs
    }
    // Declare the params for the About Us modal
    const aboutUsModalProps: ModalPropsType = {
      handleClose: this.hideAboutUsModal,
      show: this.state.showAboutUs
    }
    // Return the rendering
    return (
      <div>
        <ReferUsModal {...referUsModalProps}></ReferUsModal>
        <Modal {...contactUsModalProps}></Modal>
        <Modal {...aboutUsModalProps}></Modal>
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
            <button type="button" onClick={this.showReferUsModal} disabled={this.state.mainUiButtonDisabled}>
              Refer Us
            </button>
            <button type="button" onClick={this.showContactUsModal} disabled={this.state.mainUiButtonDisabled}>
              Contact Us
            </button>
            <button type="button" onClick={this.showAboutUsModal} disabled={this.state.mainUiButtonDisabled}>
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
      </div>
    );
  }
}

export default MobileView;
