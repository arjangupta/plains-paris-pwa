import React from 'react';
import './modal.css';

type SMSFormPropsType = {};
type SMSFormStateType = {
  message: {
    fullname: string
    phone: string
  },
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
    this.setState({ submitting: true });
    fetch(`${process.env.REACT_APP_API_URL}/api/messages`, {
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
    const retrieved_name: string | null = event.target.getAttribute('name');
    const name: string = retrieved_name ? (retrieved_name) : 'null';
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
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
            <input type='text' name='Full Name' id='fullname' defaultValue={this.state.message.fullname} onChange={this.onHandleChange} className={this.state.error ? 'error' : ''}/>
          </div>
          <div>
            <label htmlFor='phone' className='modal-contents'>
              What's their phone number?
            </label>
            <input type='tel' name='Phone' id='phone' defaultValue={this.state.message.phone} onChange={this.onHandleChange} className={this.state.error ? 'error' : ''}/>
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