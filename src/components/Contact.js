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


    return(
      <Segment basic>
        <Grid container centered stackable>
          <Header as='h1' style={styles.head}>Contact Me:</Header>
          <p style={styles.par}>
            Email me at {<a href='mailto:jen@jenniebyers.com'>jen@jennieByers.com</a>} to book your appointment and if you have any questions. Most appointments will be conducted over the phone, unless you are local to me. After booking, return here to pay in advance.
          </p>
          <Grid.Row>
            <Dropdown
              placeholder='Select Type of Session'
              selection
              options={sessionOptions}
              onChange={onChange}
            />
            <PaypalExpressBtn
              env={env} client={client}
              currency={currency}
              total={total}
              onError={onError}
              onSuccess={onSuccess}
              onCancel={onCancel}
            />
          </Grid.Row>
          <Grid.Row>
            <Image src={logo} />
          </Grid.Row>
          <Image src={roses} />
        </Grid>
      </Segment>
    )
  }
}

export default Contact;
