import './style.css';
import React from 'react';
import emailjs from 'emailjs-com';
import FormErrors from '../FormErrors';
import img_contact from '../../images/contato.gif'
import { Form, Label, Input } from 'reactstrap';

class ContactForm extends React.Component {
  static validateField(field, value) {
    switch (field) {
    case 'name':
      return ContactForm.validatePresence('Nome', value);
    case 'message':
      return ContactForm.validatePresence('Mensagem de contato', value);
    case 'email': {
      const isValid = value.match(/^[^\s@]+@[^\s@]+$/);
      return isValid ? '' : 'E-mail inválido.';
    }
    default:
      return '';
    }
  }

  static validatePresence(fieldName, value) {
    return value.trim() ? '' : `O campo "${fieldName}" é obrigatório.`;
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      formErrors: { name: '', email: '', message: '' },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.validateForm()) return;

    const { name, email, message } = this.state;
    this.sendEmail({ message, name, email });
  }

  validateForm() {
    let isValid = true;
    const errors = {};
    const { state } = this;

    Object.keys(state.formErrors).forEach((field) => {
      const errorMessage = ContactForm.validateField(field, state[field]);
      errors[field] = errorMessage;

      if (errorMessage) isValid = false;
    });

    this.setState({ formErrors: errors });

    return isValid;
  }

  sendEmail(data) {
    // configuração genérica, crie uma conta em https://dashboard.emailjs.com/sign-up
    // e forneça os parâmetros abaixo para funcionar corretamente.
    emailjs.send('gmail', 'template_haqdurk', data, 'user_by5Zh51CCdP3SzukEDuN2')
      .then(() => {
        this.setState({ name: '', email: '', message: '' });
        alert('Mensagem enviada com sucesso! ;]');
      })
      .catch(() => this.setState((previousState) => ({
        formErrors: {
          ...previousState.formErrors,
          unexpected: 'Ocorreu um erro durante o envio. Tente novamente.',
        },
      })));
  }

  render() {
    const {
      name, email, message, formErrors,
    } = this.state;

    return (
      <section id="contact">
        <div className="form-inputs">
          <h1>Entre em contato</h1>

          <FormErrors formErrors={ formErrors } />

          <Form onSubmit={ this.handleSubmit }>
            <Label htmlFor="name">
              Nome
              <Input
                id="name"
                name="name"
                type="text"
                value={ name }
                onChange={ this.handleInputChange }
              />
            </Label>

            <Label htmlFor="email">
              E-mail
              <Input
                id="email"
                name="email"
                type="email"
                value={ email }
                onChange={ this.handleInputChange }
              />
            </Label>

            <Label htmlFor="message">
              Mensagem de contato
              <Input
                id="message"
                name="message"
                type="textarea"
                rows="10"
                value={ message }
                onChange={ this.handleInputChange }
              />
            </Label>

            <Input type="submit" value="Enviar" />
          </Form>
        </div>
        <div className='other-contacts'>
          <img src={ img_contact } alt="Imagem gif de um envelope" />
          <p><b>Whatsapp:</b> (11) 9 8521-8471</p>
          <p><b>E-mail</b>: cleberlt@gmail.com</p>
        </div>
      </section>
    );
  }
}

export default ContactForm;
