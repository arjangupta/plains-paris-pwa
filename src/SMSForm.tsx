import React from 'react';
import './modal.css';

type SMSFormMessageType = {
  fullname: string,
  phone: string
}

type SMSFormPropsType = {};
type SMSFormStateType = {
  message: SMSFormMessageType,
  submitting: boolean,
  error: boolean
};

class SMSForm extends React.Component<SMSFormPropsType, SMSFormStateType> {
  constructor(props: SMSFormPropsType) {
    super(props);
    this.state = {
      message: {
      fullname: '',
      phone: ''
      },
      submitting: false,
      error: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Don't allow more submissions while submitting
    this.setState({ submitting: true });
    // TODO: Check if the phone number is parsed correctly
    fetch(`https://plains-paris-text-server.herokuapp.com/api/messages`, { // TODO: Hide this API url!
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
      if (data.success) {
        this.setState({
        error: false,
        submitting: false,
        message: {
          fullname: '',
          phone: ''
        }
        });
      } else {
        console.log(`FAIL 9595`);
        this.setState({
          error: true,
          submitting: false
        });
      }
      });
  }

  onHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const retrieved_id: string | null = event.target.getAttribute('id');
    const id: string = retrieved_id ? (retrieved_id) : 'null';
    this.setState({
      message: { ...this.state.message, [id]: event.target.value }
    });
  }

  render() {
    return (
      <div>
        <div className='modal-title'>
          Refer Us
        </div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor='fullname' className='modal-contents'>
              What's the name of the person receiving this app?
            </label>
            <input type='text' name='Full Name' id='fullname' value={this.state.message.fullname} onChange={this.onHandleChange}/>
          </div>
          <div>
            <label htmlFor='phone' className='modal-contents'>
              What's their phone number?
            </label>
            <input type='tel' name='Phone' id='phone' value={this.state.message.phone} onChange={this.onHandleChange} className={this.state.error ? 'error' : ''}/>
          </div>
          <button className='blue-button' disabled={this.state.submitting}>
            Share App
          </button>
        </form>
      </div>
    );
  }
}

export default SMSForm;