import React, { Component } from 'react';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Di sini Anda dapat menambahkan logika untuk mengirim formulir ke server atau melakukan tindakan lain sesuai kebutuhan.
  }

  render() {
    return (
      <div>
        <h2 className='titel-contact'>Kontak Kami</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Nama:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Pesan:</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit">Kirim</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
