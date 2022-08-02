import './modal.css';
import React from 'react';

export type ModalPropsType = {
  handleClose: () => void,
  show: boolean,
  modalContents: JSX.Element
};
export type ModalStateType = {};

export class Modal extends React.Component<ModalPropsType, ModalStateType> {
  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="close" onClick={this.props.handleClose}></div>
          {this.props.modalContents}
        </section>
      </div>
    );
  }
}

export const referUsElement : JSX.Element =
  <div>
    <div className='modal-title'>
      Refer Us
    </div>
    <form>
      <div>
        <label htmlFor='fullname' className='modal-contents'>
          What's the name of the person receiving this app?
        </label>
        <input type='text' name='Full Name' id='fullname'/>
      </div>
      <div>
        <label htmlFor='phone' className='modal-contents'>
          What's their phone number?
        </label>
        <input type='tel' name='Phone' id='phone'/>
      </div>
      <button className='blue-button'>
        Share App
      </button>
    </form>
  </div>

const contactUsAddress = {
  fontSize: '105%',
  marginBottom: '20%',
  marginLeft: '5%',
  marginRight: '5%'
};

export const contactUsElement : JSX.Element = 
  <div>
    <div className='modal-title'>
      Contact Us
    </div>
    <div className='modal-contents'>
      <div style={{fontStyle: 'italic'}}>call/text</div>
      <div className='contact-us'>
        816.797.0195
      </div>
      <div style={{fontStyle: 'italic'}}>office</div>
      <div className='contact-us'>
        816.455.8600
      </div>
      <div style={{fontStyle: 'italic'}}>email</div>
      <div className='contact-us' style={{fontSize: '110%'}}>
        justin@plainsparis.com
      </div>
      <div style={{fontStyle: 'italic'}}>address</div>
      <div className='contact-us' style={contactUsAddress}>
      2850 NE Kendallwood Pkwy, Kansas City, MO 64119
      </div>
    </div>
  </div>

export const aboutUsElement : JSX.Element =
  <div>
    <div className='modal-title'>
      About Us
    </div>
    <p className='about-us'>
    We want you to absolutely love your new Kansas City area home. Our team is there with you like family every step of the way, making sure that your new Kansas City house feels like home. We believe so much that our agents will help find the right home for you that we will stand behind it with our “Like It or List It Guarantee” and happily give you a do-over! If you find that, in the first six months of owning your Kansas City area home, you are not 100% satisfied, we will relist it at no cost to you. 
    </p>
  </div>
