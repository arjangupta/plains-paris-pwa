import './modal.css';
import React from 'react';

type ModalPropsType = {
  handleClose: () => void,
  show: boolean
};
type ModalStateType = {
  displayString: string;
};

class Modal extends React.Component<ModalPropsType, ModalStateType> {
  constructor(props: ModalPropsType) {
    super(props);
    this.state = {
      displayString: ""
    }
  }

  protected setDisplayString(text: string) {
    this.setState({ displayString: text });
  }

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
    const displayString = "HELLO";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <a href="#" className="close" onClick={this.props.handleClose}></a>
          {displayString}
        </section>
      </div>
    );
  }
}

export interface ReferUsModalPropsType extends ModalPropsType {};

export class ReferUsModal extends Modal {
  constructor(props: ReferUsModalPropsType) {
    super(props);
    super.setDisplayString("Refer Us!");
  }

  render() {
    return super.render();
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
