import './modal.css';
import React from 'react';

export type ModalPropsType = {
  handleClose: () => void,
  show: boolean
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
