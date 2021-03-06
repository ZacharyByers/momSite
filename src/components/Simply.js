import React from 'react';
import { Segment, Header, Responsive } from 'semantic-ui-react';

const styles = {
  par: {
    fontSize: '1.2rem',
    fontFamily: 'open sans',
    lineHeight: '1.7',
    color: '#555',
    fontWeight: '400',
  },
  block: {
    margin: 'auto',
  },
  headBox: {
    backgroundColor: '#f9a08e',
    opacity: '.67',
    border: 'dotted 3px #ffef60',
    borderRadius: '15px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontFamily: 'kaushan script',
    fontWeight: '400',
    fontSize: '3rem',
  },
  mobileTitle: {
    fontFamily: 'kaushan script',
    color: '#ff9966',
    fontWeight: '400',
  },
}

const par1 = `is a powerful method of healing that clears negative emotions on a mental, emotional and physical level in an easy, non-invasive way. It can release stress of any kind, whether it is from years of abuse or just the daily things that tend to pile up and overwhelm our emotional circuitry. This clearing is done without having to revisit old trauma and stir up painful memories. Instead of spending years coming to terms with a painful and challenging past, SimplyHealed™ clears the low-vibrating energy patterns of these events and releases the resulting limiting, sub-conscious beliefs.`

const par2 = `During a session, SimplyHealed™ can clear many issues (not just the one or two addressed by other methods) in a relaxed and light-hearted experience. Many energy healing modalities work only with Chakras, Auras, or Meridians, but SimplyHealed™ can identify negative energy blocks in 7 different energy systems of the body.`

const par3 = `In addition, through the SimplyHealed™ method, flaws in the energetic DNA are quickly located and repaired, some of which have been in the lineage for many generations. Depression, phobias, addictions, fears, ill-health, even money problems are just a few of the issues that get passed down through the genetic code. With SimplyHealed™ we can trace it back to its origin and clear it for our lineage and ourselves.`

const par4 = `Clients who have experienced a SimplyHealed™ session report feeling lighter, happier, more motivated and able to make healthier choices when in emotionally charged or stressful situations. Call or email for a session today!`


class Simply extends React.Component {
  render() {
    return(
      <Segment basic style={styles.block}>
        <Responsive
          as={Segment}
          compact basic
          padded='very'
          style={styles.headBox}
          {...Responsive.onlyComputer}
        >
          <Header style={styles.title}>
            What is SimplyHealed™?
          </Header>
        </Responsive>
        <Responsive
          as={Header}
          style={styles.mobileTitle}
          textAlign='center'
          {...Responsive.onlyMobile}
        >
          What is SimplyHealed™?
        </Responsive>
        <p style={styles.par}>
          The &nbsp;
          <a href='https://simplyhealed.com/' alt='simply healed'>
            SimplyHealed™ method created by Carolyn Cooper
          </a>
          &nbsp;
          {par1}
        </p>

        <p style={styles.par}>
          {par2}
        </p>

        <p style={styles.par}>
          {par3}
        </p>

        <p style={styles.par}>
          {par4}
        </p>
      </Segment>
    )
  }
}

export default Simply;
