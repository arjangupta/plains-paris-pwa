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
          What's the name of the person receving this app?
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
      <div className='contact-us' style={{marginBottom: '20%'}}>
        justin@plainsparis.com
      </div>
    </div>
  </div>

export const aboutUsElement : JSX.Element =
  <div className='modal-title'>
    About Us
  </div>;
