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
