import React from 'react';
import { Segment, Image, Grid, Header, Divider } from 'semantic-ui-react';
import RenJen from '../images/RenJen.jpeg';
import fam from '../images/fam.png';
import gran from '../images/gran.png';
import dogs from '../images/dogs.jpeg';

const styles = {
  box: {
    border: 'dotted 3px #ffa899',
    width: '80%',
    margin: 'auto',
  },
  bigScript: {
    fontSize: '22px',
    fontFamily: 'kaushan script',
    color: '#ffcc33',
    fontWeight: '400',
  },
  par: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    lineHeight: '1.7',
    fontWeight: '400',
  },
}

const whoAmI = "I am a certified SimplyHealed™ energy healing practitioner, using the SimplyHealed™ method to help you release negative emotions and clear limiting belief systems. I'm also certified as an Emotional Release Facilitator through the Institute of Healing Arts in Lindon, UT."

const whatIDo = "is conduct energy healing/clearing sessions to pinpoint the energetic root of old pain, unhealthy patterns and limiting belief systems. Once the negative energy is released you are free to move into joy and productivity. If you are struggling to become who you really want to be as an Individual, a Mom or Dad, a wife or husband, a Student or a Professional, there truly is hope to break free of the things that are keeping you stuck."

const iAmalso = "the mother of seven (plus one fabulous son-in-law), wife of one, grandma of the cutest grandbaby in the world and alpha dog of two (Henry the Poofball Poochon and Mikey, the Psycho Schnauzer). My husband/best friend/sweetheart/hunky-man Reynold and I have been married almost 28 years. How did we get that old?"

const par1 = "I am a transplant to Arizona via Oregon (my native land), Utah (7 years and a B.A. at Brigham Young University), Upstate New York (hubby's PhD in Business, mine in parenting 4 kids under the age of 5) and California (oh how we miss the beach! *sniff*)"

const par2 = "I graduated from BYU with a B.A. in Humanities with a double minor in Music and Living Room Fort Building (that last one has been the most handy). I’ve put my excellent education to work during brief stints homeschooling five of my children and answering double Jeopardy questions on art and music."

const par3 = "As if mothering seven kids wasn’t enough (actually, it was more than enough and might have driven me a little cuckoo…) I discovered a passion for emotional healing, my own and everyone else’s, and became certified as an Emotional Release Facilitator with the Institute of Healing Arts in 2013. In 2015 I completed my training with Carolyn Cooper, creator of  SimplyHealed™ and in January 2016 I became a certified the SimplyHealed™ practitioner. I love the incredible SimplyHealed™ energy clearing method!"

const par4 = "My dream is to someday live on a farm, taking arty photos, writing music and styling hair, surrounded by chickens, cows, goats and grand babies while drinking chocolate peanut butter smoothies in my rocker on the wrap-around porch in the twilight, holding hands with my sweetheart. (Was that really one sentence?!) Oh and I love hammocks!"

const par5 = "My Dad nicknamed me Tigger when I was a little kid, because I bounced everywhere I went. I was happy, creative and carefree for most of my blissful childhood years. But, somewhere in the dark pit of middle school I began to experience depression and anxiety. I look back and feel that I spent most of the last 35 years feeling like I was hanging on to the side of a sheer cliff, with no ropes and no hope of ever reaching the top; just hanging on and doing more sliding down than climbing up."

const par6 = "My innately happy, carefree personality really got  bogged down after I started having children and I struggled with depression for 20 years (most of those years not knowing I was depressed, just feeling broken and pathetic). I felt so stuck. I wanted to create, play, be organized, be a loving mom, follow through on my ideas, be responsible and reliable and just be happy! I’m a very spiritual person and I felt that I must be doing something wrong because no matter how hard I prayed or how “good” I was, I felt like I just sank deeper and deeper into self-loathing and dysfunction. I went to a psychiatrist and started taking anti-depressants and ADHD medication, which saved me from hitting rock bottom, but I knew that a part of me was not the same on these medications and I wanted to feel truly alive."

const par7 = "Five years ago I pled with God to help me and also my family overcome these patterns of depression, anxiety and, as I later discovered, addiction that were manifesting with all seven of my children and myself. It was then that I was introduced to the use of essential oils for emotional support and through the people I met in that arena, I was led to Emotional Release Processing."

const par8 = "I completed a year-long training through the Institute of Healing Arts and  became a Certified Emotional Release Facilitator in September of 2013. Through this training I began to experience tremendous hope and change in my life. I discovered that weaknesses I used to feel hopeless about, resigning myself to the fact that they were just my lot in life, could actually become in many instances my strengths! As God led the way to new resources I started to feel light flood into my life."

const par9 = "Emotional Processing is an incredible tool which blends modern psychotherapy techniques with energy healing techniques in an intense, hour-and-a-half long meditation that is incredibly enlightening and profoundly life changing. I love Emotional Processing and it has brought about miracles for me and my family, but due to the nature of the sessions, I needed something less intense and involved in order to work with some members of my family who just couldn’t deal with that kind of emotional intensity very often. Also, I could only work on one issue in a session and I felt a need for a faster, more efficient way to clear all the garbage."

const par10 = "I began again to search and ask God for help and that’s when SimplyHealed™ came into my life. I have learned to trust that what I need comes into my life when I need it and this new method of clearing emotional and energetic blocks has taken my healing (and my family’s) to a whole new level."

const par11 = "After being involved in emotional and energy healing for almost five years now I feel so much hope! It is so exciting to be able to help others come to a place of healing as well. Please know, I do not consider myself a healer. I am an energy healing facilitator or as SimplyHealed™ creator Carolyn Cooper says, “I’m just the cleaning lady.” But I am blessed beyond description to be able to facilitate change and healing in other people’s lives."

class About extends React.Component {
  render() {
    return(
      <Segment basic>
        <Grid centered container stackable>
          <Grid.Column width={10}>
            <Segment basic style={styles.box}>
              <p style={styles.par}><span style={styles.bigScript}>WHO AM I?&nbsp;</span> {whoAmI}</p>
              <p style={styles.par}><span style={styles.bigScript}>WHAT I DO&nbsp;</span> {whatIDo}</p>
              <p style={styles.par}><span style={styles.bigScript}>I AM ALSO&nbsp;</span> {iAmalso}</p>
              <p style={styles.par}>{par1}</p>
              <p style={styles.par}>{par2}</p>
              <p style={styles.par}>{par3}</p>
              <p style={styles.par}>{par4}</p>
            </Segment>
          </Grid.Column>

          <Grid.Column width={6}>
            <Grid.Row>
              <Image src={RenJen} />
            </Grid.Row>
            <Divider hidden />
            <Grid.Row>
              <Image src={fam} />
            </Grid.Row>
            <Divider hidden />
            <Grid.Row>
              <Image src={gran} />
            </Grid.Row>
            <Divider hidden />
            <Grid.Row>
              <Image src={dogs} />
            </Grid.Row>
          </Grid.Column>
        </Grid>

        <Divider hidden />

        <Header style={styles.bigScript} textAlign='center'>MY HEALING STORY</Header>
        <Divider hidden />
        <Grid centered container>
          <Grid.Column width={13}>
            <p style={styles.par}>{par5}</p>
            <p style={styles.par}>{par6}</p>
            <p style={styles.par}>{par7}</p>
            <p style={styles.par}>{par8}</p>
            <p style={styles.par}>{par9}</p>
            <p style={styles.par}>{par10}</p>
            <p style={styles.par}>{par11}</p>
          </Grid.Column>
        </Grid >
      </Segment>
    )
  }
}

export default About;
