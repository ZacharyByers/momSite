import React from 'react';
import { Segment, Grid, Image, Header, Dropdown, Divider } from 'semantic-ui-react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import roses from '../images/roses.jpeg';
import logo from '../images/logo.jpeg';

class Contact extends React.Component {
  state = {total: 0.01}

  render() {
    const onSuccess = (payment) => {
      alert('payment success!', payment)
    }

    const onCancel = (data) => {
      alert('user cancelled', data)
    }

    const onError = (err) => {
      alert('Error!', err)
    }

    const env = 'production'
    const currency = 'USD'
    const { total } = this.state

    const client = {
      sandbox: 'AVJWx5d9YnB3ziQ61sqrxkc-v-R62BCoW0L45qcMxstl2GsRGWgpqmfvKn9TnrmVOcEvsbZyqDFLSHSg',
      production: 'ATXEfhRbNRM9kmFWelcygVFuEo9jr7VFFm8WrYmJU8Rqxd1SzvZqC8iDxgLNh5DPNwWPt9UlRxRdPkM0',
    }

    const sessionOptions = [
      {
        text: '30 Minute Session $70.00 USD',
        value: 70,
      },
      {
        text: '60 Minute Session $125.00 USD',
        value: 125,
      },
      {
        text: 'Pckg of 3 Sessions 350.00 USD',
        value: 350,
      },
      {
        text: 'Pckg of 6 Sessions $650.00 USD',
        value: 650,
      },
      {
        text: 'Pckg of 10 Sessions $999.00 USD',
        value: 999,
      },
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
      subHead: {
        color: '#ffcc33',
      },
      dashBox: {
        border: 'dashed 3px #ffa899',
      },
    }


    return(
      <Segment basic>
        <Grid container centered stackable>
          <Grid.Row>
            <Header as='h1' style={styles.head}>Contact Me:</Header>
          </Grid.Row>
          <Segment basic style={styles.dashBox}>
            <Header as='h2' style={styles.subHead}>Session Prices:</Header>
            <p>30 minutes -- $70</p>
            <p>60 minutes -- $125</p>
            <p>Package of 3 Sessions -- $350</p>
            <p>Package of 6 Sessions -- $650</p>
            <p>Package of 10 Sessions -- $999</p>
          </Segment>
          <p style={styles.par}>
            Email me at {<a href='mailto:jen@jenniebyers.com'>jen@jennieByers.com</a>} to book your appointment and if you have any questions. Most appointments will be conducted over the phone, unless you are local to me. After booking, return here to pay in advance.
          </p>
          <Grid.Row>
            <Grid.Column width={3} textAlign='center'>
              <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
              />
            </Grid.Column>
            <Grid.Column width={3} textAlign='center'>
              <Dropdown
                upward={false}
                placeholder='Select Type of Session'
                selection
                options={sessionOptions}
                onChange={onChange}
              />
            </Grid.Column>
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
