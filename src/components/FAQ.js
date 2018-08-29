import React from 'react';
import { Segment, Header, List, Divider } from 'semantic-ui-react';

const styles = {
  section: {
    borderTop: '2px dashed #ffd905',
    borderBottom: '2px dashed #ffd905',
    width: '75%',
    margin: 'auto',
    paddingTop: '3%',
  },
  title: {
    fontSize: '48px',
    fontFamily: 'kaushan script',
    color: '#808080',
  },
  head: {
    fontSize: '28px',
    fontFamily: 'kaushan script',
    color: '#ff9966',
    fontWeight: '400',
  },
  par: {
    fontWeight: '400',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    lineHeight: '1.7',
  },
}

const par1 = "A session is 60 minutes long conducted over the phone or in my home office. During that time we’ll briefly discuss what issues you’d like to address, then I’ll use muscle testing, to determine all the places where your energy has blocks or glitches. Once we’ve identified the lower vibrating areas, I use the SimplyHealed™ integration to clear them. There’s no lying down on a couch and pouring out your deepest darkest secrets, but there will be “Aha!” moments, insights and new-found clarity as we move energy blocks. I always feel like giving my clients a “High Five!” when we’re done, it’s so fun and empowering."

const par2 = "It’s amazing how cleaning up your energy positively affects every aspect of your life! Some of the issues I have worked on are (in no particular order):"

const par3 = "Go to my “Contact Me” page and email me. We’ll schedule a session together and then later you can return to that page and use the “Pay Now” link to pay before the session begins."

const par4 = "Nope. Your body’s intuitive wisdom will subconsciously process whatever is for your highest good. Believing is a bonus and packs an extra punch, but if you’re feeling a bit skeptical, try it out and be open to seeing and feeling the positive changes."

const par5 = "Absolutely! This is such a gentle, non-invasive method that all ages benefit from having cleaner, lighter energy. Babies and young children are very sensitive to their energetic surroundings so it’s wonderful to have a technique that helps them clear things they’re picking up in their environment and even generationally through their DNA. My kids love it and ask often if I can clear their yucky feelings."

const par6 = "Because energy is not limited by time or distance, the work is just as powerful over the phone or one-on-one. It is my intention and focus on the client that makes it effective. If I’m doing a phone session, I muscle-test on myself to get feedback from my client’s energy. Likewise, I do the integration on myself as proxy for the client to move the negative energy."

const par7 = "The energy shifts as soon as we integrate, so there is always an immediate lightness that occurs with the session (like turning on a light in a dark room). Then over the next few days and weeks you’ll begin to feel shifts in how you respond to situations, a lessening of negative emotions and behaviors, a greater ability to choose the things you’ve been wanting to choose, improvement of physical symptoms and/or more confidence and feeling at-ease with the world. It is always so helpful to look for evidence over time and even keep a success journal as you notice positive changes."


class FAQ extends React.Component {
  render() {
    return(
      <Segment basic>
        <Header textAlign='center' style={styles.title}>Frequently Asked Questions</Header>
        <Divider hidden />
        <Segment basic style={styles.section}>
          <Header style={styles.head}>What is involved in a session?</Header>
          <p style={styles.par}>{par1}</p>

          <Header style={styles.head}>What issues can we work on?</Header>
          <p style={styles.par}>{par2}</p>
          <Divider hidden />
          <List style={styles.par} relaxed>
            <List.Item>
              Depression
            </List.Item>

            <List.Item>
              Anxiety
            </List.Item>

            <List.Item>
              ADHD
            </List.Item>

            <List.Item>
              Allergies
            </List.Item>

            <List.Item>
              Headache, Backaches, Stomach Aches, Chronic Pain
            </List.Item>

            <List.Item>
              Resistance to implementing good things in my life (like exercise and healthy eating).
            </List.Item>

            <List.Item>
              Addiction recovery
            </List.Item>

            <List.Item>
              Relationship issues
            </List.Item>

            <List.Item>
              Eating Disorders
            </List.Item>

            <List.Item>
              Kidney Stones
            </List.Item>

            <List.Item>
              Bladder Infections
            </List.Item>

            <List.Item>
              Thyroid Problems
            </List.Item>

            <List.Item>
              Hating to do Homework
            </List.Item>

            <List.Item>
              Resistance to going to bed or to school
            </List.Item>

            <List.Item>
              Fear of social situations
            </List.Item>

            <List.Item>
              Low Self-esteem
            </List.Item>

            <List.Item>
              Financial Stress and issues
            </List.Item>

            <List.Item>
              Intimacy issues
            </List.Item>

            <List.Item>
              Unresolved anger
            </List.Item>

            <List.Item>
              Issues with God
            </List.Item>

            <List.Item>
              And on and on and on…
            </List.Item>

          </List>

          <Header style={styles.head}>How do I schedule a session?</Header>
          <p style={styles.par}>{par3}</p>

          <Header style={styles.head}>Do I have to totally believe in this energy stuff before it can work?</Header>
          <p style={styles.par}>{par4}</p>

          <Header style={styles.head}>Can you work on children?</Header>
          <p style={styles.par}>{par5}</p>

          <Header style={styles.head}>How does this work long-distance?</Header>
          <p style={styles.par}>{par6}</p>

          <Header style={styles.head}>How soon will I be feeling better?</Header>
          <p style={styles.par}>{par7}</p>

        </Segment>
      </Segment>
    )
  }
}

export default FAQ;
