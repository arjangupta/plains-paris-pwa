import './modal.css';
import React from 'react';

export type ModalPropsType = {
  handleClose: () => void,
  show: boolean,
  modalContents: JSX.Element
};
export type ModalStateType = {};

export class Modal extends React.Component<ModalPropsType, ModalStateType> {
  constructor(props: ModalPropsType) {
    super(props);
  }
  
  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <a href="#" className="close" onClick={this.props.handleClose}></a>
          {this.props.modalContents}
        </section>
      </div>
    );
  }
}

export const referUsElement   : JSX.Element = 
  <div>
    <div className='modal-title'>
      Refer Us
    </div>
    <div>
      What's the name of the person receving this app?
    </div>
    <div>
      What's their phone number?
    </div>
    <button>
      Share App
    </button>
  </div>

export const contactUsElement : JSX.Element = 
  <div className='modal-title'>
    Contact Us
  </div>;

export const aboutUsElement   : JSX.Element =
  <div className='modal-title'>
    About Us
  </div>;
