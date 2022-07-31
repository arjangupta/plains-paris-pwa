import './modal.css';
import React from 'react';

type ModalPropsType = {
  handleClose: () => void,
  show: boolean
};
type ModalStateType = {};

class Modal extends React.Component<ModalPropsType, ModalStateType> {
  constructor(props: ModalPropsType) {
    super(props);
  }
  
  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <a href="#" className="close" onClick={this.props.handleClose}></a>
        </section>
      </div>
    );
  }
}

export interface ReferUsModalPropsType extends ModalPropsType {};

export class ReferUsModal extends Modal {
  constructor(props: ReferUsModalPropsType) {
    super(props)
  }
}

export interface ContactUsModalPropsType extends ModalPropsType {};

export class ContactUsModal extends Modal {
  constructor(props: ContactUsModalPropsType) {
    super(props)
  }
}

export interface AboutUsModalPropsType extends ModalPropsType {};

export class AboutUsModal extends Modal {
  constructor(props: AboutUsModalPropsType) {
    super(props)
  }
}
