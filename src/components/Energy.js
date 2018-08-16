import React from 'react';
import { Segment, Grid, Image, Header } from 'semantic-ui-react';
import glowMan from '../images/glowMan.jpeg';

const styles = {
  box: {
    border: 'dashed 5px #ffd400',
    width: '80%',
    margin: 'auto',
  },
  par: {
    fontFamily: 'open sans',
    fontSize:' 16px',
    lineHeight: '1.7',
    color: '#555',
    fontWeight: '400',
  },
  title: {
    fontFamily: 'kaushan script',
    color: '#ff9966',
    fontWeight: '400',
  },
  secondary: {
    fontFamily: 'open sans',
    color: '#ff9966',
    fontWeight: '400',
  },
  row: {

  },
}

class Energy extends React.Component {
  render() {
    return(
      <Segment basic compact style={styles.box}>
        <Grid centered>
          <Grid.Row style={styles.row}>
            <Grid.Column width={10}>
              <Header as='h1' style={styles.title} textAlign='center'>What is Energy Healing?</Header>
              <Header as='h2' textAlign='center' style={styles.secondary}>(also known as energy clearing)</Header>
              <p style={styles.par}>We all know that our bodies are composed of many physical systems

that work together to keep us healthy and functioning from day to day

— the digestive, skeletal, muscular, respiratory, immune systems and

many others all play a critical part in our well-being. What most people

don’t know is that there are also numerous energetic systems that are

crucial to our functioning as well. You may have heard of some of them:

Auras, Chakras and Meridians (used in Acupuncture) are a few. These

energy systems are the foundation of our physical bodies and keeping

them clear and running optimally is crucial to our emotional, mental and spiritual well-being.
              </p>
            </Grid.Column>

            <Grid.Column width={6}>
              <Image src={glowMan} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Column width={16}>
            <p style={styles.par}>Negative experiences in life, their accompanying emotions and limiting belief systems are recorded in our energetic systems as lower vibrations. Emotions like fear, shame, guilt, anger and despair can cause blocks and glitches in our energy systems. This in turn causes disease in the physical systems of the body and results in chronic pain and sickness. It also creates mental and emotional issues in the form of depression, anxiety, and other mood and mental disorders.

Traditional western medicine addresses the symptoms that show up in the body systems, while energy healing focuses on the root energetic causes of those physical symptoms. What’s amazing is that we can access information from the subconscious about where these energetic blocks are and clear them away, allowing the body to heal itself.

There are many, many different methods of clearing energy blocks. Most involve visualizations, scripts with positive affirmations, touching or tapping different points on the body where negative emotions are stored, and/or journaling to release old, stuck emotional baggage. I love many of these methods! But, I’ve never experienced anything as easy, quick and non-invasive as SimplyHealed™ energy work.
            </p>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default Energy;
