import React from 'react';
import { Segment, Image, Grid, Header, Divider } from 'semantic-ui-react';
import certified from '../images/certified.png';
import bottomDecoration from '../images/bottomDecoration.png';
import momFace from '../images/momFace.jpeg';

  const styles = {
    par: {
      fontSize: 24,
      color: '#808080',
    },
    kaushHead: {
      fontSize: 40,
      fontFamily: 'kaushan script',
    },
    tilde: {
      fontSize: 32,
      fontFamily: 'open sans',
    },
    dashBox: {
      border: 'dashed 3px #ffa899',
    },
    solidBox: {
      border: 'solid 2px #faa',
    },
    divider: {
      borderTop: '2px dashed #ffc656',
      width: '80%',
      margin: 'auto',
    }
  }

  const boxText = `Go to the Contact Me page to book an appointment and we'll get you going on an incredible journey! Choose from a 60-minute session for $100, a 30-minute tune-up for $50, or a package of 3 sessions for $275.`

  const testimonial1 = `Jennie is thoughtful and kind in pacing her clients, very much in tune to what they need and where they need to go. She has found words when I had none to express my feelings, and I feel of her spirit and her love in truly understanding pain. ~ Evonne B.`

  const testimonial2 = `Jen is knowledgeable about what she is doing but not intimidating. She is the perfect blend of professionalism and approachability. I have felt very confident in referring multiple people her way. More importantly, she has worked on 5 of my 6 children and my husband. She is extremely caring and there is no doubt about her intent which is to facilitate healing. ~ April H.`

  const testimonial3 = `Jen facilitates with a genuine love and understanding while guiding me to the answers.  She does not add her own flair or interpretation but keeps the integrity of the process.  I think this ability will continue to ensure her progression as a true healer and helper.  I will be seeing her again, and would recommend anyone with varied levels of experience that Jen will be able to guide them at what ever they can handle or accept. She is kind, sincere, direct, and efficient. So much better than anyone I have met with. ~ Sara H.`

  const testimonial4 = `For years I've battled anxiety and fear without much success in controlling my fearful thoughts, especially when I'm in the middle of an episode. I've tried differing methods including meditation, visualizations, and self-talk but these never really worked for me much. Jennie worked with me during a particularly bad episode, releasing several types of blocks including a few generational false beliefs. During that following week I found that my ability to control and diminish my anxiety was greatly improved, that I was able to utilize the anti-anxiety methods I knew more successfully, and that my overall state of mind was more at ease. This still holds true over a month later. I really feel that this energy work helped me overcome these fearful blocks and allowed me to go to the next level of growth and healing. ~ Sherrie L.`

  const testimonial5 = `I have had a few Simply Healed sessions with Jennie. I believe I was one of her first clients. She was very confident in her work and super excited to share her newly acquired skill to help me in my healing and relationships. We discussed what I was hoping to work on and then got started. I can't remember the details of the session but I do remember "looking for evidence" in my life of what we had done. Communication became easier for me, I had more confidence, and the biggest thing is I started to truly feel the truth of the affirmations I had been telling myself daily, such as, "I trust in the process of life." A huge change I saw in my life was that I lost my anxieties and was able to enjoy my life on a different realm. ~ Rachel G.`


class Home extends React.Component {
  render() {
    return(
      <Segment basic>
        <Grid centered container stackable>
          <Grid.Column width={9}>
            <Header style={styles.kaushHead} textAlign='center'>
              Welcome!
            </Header>
            <p style={styles.par}>
              <Grid>
                <Grid.Column width={12}>
                  <span>
                    {"I'm so glad you found your way here. I invite you to embark on a journey that will lead to greater peace, joy and freedom. This has been my experience with energy healing and I find no greater satisfaction "}
                    than helping others find hope and healing in their
                  </span>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Image src={momFace}/>
                </Grid.Column>
              </Grid>
                lives as well. Explore the links above to learn more about Energy Work and then contact me to get started!&nbsp;
                <span style={styles.tilde}> ~</span><span style={styles.kaushHead}> Jen </span>
            </p>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid.Row>
              <Segment basic style={styles.dashBox}>
                <p style={{fontSize:18}}>
                  {boxText}
                </p>
              </Segment>
            </Grid.Row>
            <Divider hidden/>
            <Grid.Row>
              <Image src={certified} centered/>
            </Grid.Row>
          </Grid.Column>
        </Grid>

        <Divider hidden />
        <Divider style={styles.divider}/>

        <Header textAlign='center' style={styles.kaushHead}>Testimonials</Header>

        <Grid centered container stackable>
          <Grid.Column width={5}>
            <Grid.Row>
              <Segment basic style={styles.solidBox}>
                <p style={{fontSize:18}}>
                  {testimonial1}
                </p>
              </Segment>
            </Grid.Row>
            <Divider hidden />
            <Grid.Row>
              <Segment basic style={styles.solidBox}>
                <p style={{fontSize:18}}>
                  {testimonial2}
                </p>
              </Segment>
            </Grid.Row>
            <Divider hidden />
            <Grid.Row>
              <Segment basic style={styles.solidBox}>
                <p style={{fontSize:18}}>
                  {testimonial3}
                </p>
              </Segment>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={5}>
            <Segment basic style={styles.solidBox}>
              <p style={{fontSize:18}}>
                {testimonial4}
              </p>
            </Segment>
          </Grid.Column>

          <Grid.Column width={5}>
            <Segment basic style={styles.solidBox}>
              <p style={{fontSize:18}}>
                {testimonial5}
              </p>
            </Segment>
          </Grid.Column>
        </Grid>
        <Divider hidden />
        <Image centered src={bottomDecoration} size='huge'/>
      </Segment>
    )
  }
}

export default Home;
