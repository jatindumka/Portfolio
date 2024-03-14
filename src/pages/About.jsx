import AboutImg from '../images/about.png';
import AboutImg2 from '../images/about2.png';
import AboutImg3 from '../images/about3.png';
import JatinCV from '../assets/jatincv.pdf';
import { UilDownloadAlt } from '@iconscout/react-unicons';

function About() {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>Let me introduce myself</span>

      <div className='about__container container'>
        <div className='about__data'>
          <img src={AboutImg} alt='' className='about__img' />
          <p className='about__description'>
            Hey fellow wanderers! I'm Jatin, an intrepid explorer with a deep-seated love for both mountains and software.
          </p>
          {/* <img src={AboutImg2} alt='' className='about__img2' /> */}
          <p className='about__description'>
            As a traveler at heart, I thrive on the thrill of discovering new destinations, immersing myself in diverse cultures, and conquering the majestic peaks that dot our planet. Whether I'm trekking through rugged terrain, camping under the stars, or simply soaking in the breathtaking views, there's nothing quite like the feeling of being surrounded by the raw beauty of nature.
          </p>
          <br />
          {/* <img src={AboutImg3} alt='' className='about__img' /> */}
          <p className='about__description'>
          In the world of software, I'm equally passionate. With a background in Frontend Development, I'm constantly pushing the boundaries of innovation and problem-solving. From crafting elegant code to developing cutting-edge applications, I find immense satisfaction in the creative process and the endless possibilities it offers.
          
          But my love for adventure doesn't stop there. Whether it's embarking on spontaneous road trips, testing my limits with adrenaline-pumping activities, or seeking out hidden gems off the beaten path, I'm always up for the next great adventure.

When I'm not coding or scaling mountains, you can often find me cycling, gaming, or simply plotting my next epic journey.</p>

          {/* <div className="about__info">
                    <div>
                        <span className="about__info-title">15+</span>
                        <span className="about__info-name">Years <br/> experience</span>
                    </div>
                    
                    <div>
                        <span className="about__info-title">15+</span>
                        <span className="about__info-name">Years <br/> experience</span>
                    </div>

                    <div>
                        <span className="about__info-title">15+</span>
                        <span className="about__info-name">Years <br/> experience</span>
                    </div>
                </div> */}

          <div className='about__buttons'>
            <a
              download='jatincv'
              href={JatinCV}
              className='button button--flex'
            >
              Download CV
              <UilDownloadAlt className='button__icon' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
