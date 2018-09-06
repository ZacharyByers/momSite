import React from 'react';
import { Segment, Grid, Image, Header, Dropdown, Divider, Form, TextArea, Button } from 'semantic-ui-react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import roses from '../images/roses.jpeg';
import logo from '../images/logo.jpeg';

class Contact extends React.Component {
  state = {total: 0}

  render() {
    const onSuccess = (payment) => {
      console.log('payment success!', payment)
    }

    const onCancel = (data) => {
      console.log('user cancelled', data)
    }

    const onError = (err) => {
      console.log('Error!', err)
    }

    const env = 'sandbox'
    const currency = 'USD'
    const { total } = this.state

    const client = {
      sandbox: 'abcdef123456',
      production: 'abcdef123456',
    }

    const sessionOptions = [
      {
        text: '30 Minute Session $50.00 USD',
        value: 50,
      },
      {
        text: '60 Minute Session $100.00 USD',
        value: 100,
      },
      {
        text: 'Pckg of 3 Sessions $275.00 USD',
        value: 275,
      },
      {
        text: 'Group Session $30.00 USD',
        value: 30,
      },
      {
        text: 'Guthrie Team Consult $75.00 USD',
        value: 75,
      }
    ]

    const onChange = (_, data) => {
      this.setState({total: data.value})
    }

    const styles = {
      email: {
        fontSize: '18px',
      },
      par: {
        fontWeight: '400',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '16px',
        lineHeight: '1.7',
      },
      head: {
        fontSize: '48px',
        fontFamily: 'arial',
        color: '#ff9966',
        fontWeight: 'normal',
      },
    }

    const par = "Email me to book your appointment and if you have any questions. Most appointments will be conducted over the phone, unless you are local to me. After booking, return here to pay in advance. "


    return(
      <Segment basic>
        <Grid container centered stackable>
          <Grid.Column width={2} />
          <Grid.Column width={6}>
            <Header as='h1' style={styles.head}>Contact Me:</Header>
            <Dropdown
              placeholder='Select Type of Session'
              selection
              options={sessionOptions}
              onChange={onChange}
            />
            <Divider hidden />
            <Image src={logo} />
            <div style={styles.email}>jen@jenniebyers.com</div>
            <Divider hidden />
              <PaypalExpressBtn
                env={env} client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
              />
            <Image src={roses} />
          </Grid.Column>
          <Grid.Column width={7}>
              <p style={styles.par}>{par}</p>
              <Form>
                <Form.Field required>
                  <label>Name:</label>
                  <input placeholder='Name' />
                </Form.Field>
                <Form.Field required>
                  <label>Email:</label>
                  <input placeholder='Email' />
                </Form.Field>
                <Form.Field required>
                  <label>Subject:</label>
                  <input placeholder='Subject' />
                </Form.Field>
                <Form.Field required>
                  <label>Message:</label>
                  <TextArea placeholder='Message' />
                </Form.Field>
              </Form>
              <Divider hidden />
              <Button>Submit</Button>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid>
      </Segment>
    )
  }
}

export default Contact;
