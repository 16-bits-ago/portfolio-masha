import { ReactComponent as CircleTitle } from '../../assets/circleTitle.svg'
import { ReactComponent as Commas } from '../../assets/Commas.svg'
import { ReactComponent as Arrow } from '../../assets/ArrowDefine.svg'

import definePhoto from '../../assets/defineBlockPhoto.png'
import brainStorm1 from '../../assets/brainStorm1.png'
import brainStorm2 from '../../assets/brainStorm2.png'

const ZernoDefine = () => {
  return (
    <>
      <div className="container" id="define">
        <div className="frame-block-title">
          <CircleTitle />
          <h1>2 / DEFINE</h1>
          <CircleTitle />
        </div>
        <div className="emphathize-block1-margin40">
          <div className="emphathize-block1-left">
            <span>2 / DEFINE</span>
            <h3>User Persona</h3>
          </div>
          <div className="emphathize-block1-right">
            <span>
              I've gathered the insights and
              <span className="bold-text">
                {' '}
                recognized all the wants and needs
              </span>
              , pain points, goals, frustrations and expectations of the target
              audience, so{' '}
              <span className="bold-text"> reffering to my research </span>I've
              detected their
              <span className="bold-text"> behavioral patterns </span>and
              created User Persona to represent key audience segment.
            </span>
          </div>
        </div>
      </div>
      <div className="define-block1">
        <div className="define-block1-border">
          <div style={{ height: '100%', marginLeft: 130, marginRight: 130 }}>
            <div className="define-block1-content-wrap">
              <div className="define-block1-content-wrap-up">
                <div className="define-block1-content1">
                  <div>
                    <img
                      className="define-block1-content1-photo-block"
                      src={definePhoto}
                      alt=""
                    />
                  </div>
                  <div className="define-block1-content1-text-block">
                    <div className="define-block1-content1-text-block-padding">
                      <div className="define-block1-content1-text-block-row1">
                        <span>Viktoria Ivanivska</span>
                      </div>
                      <div className="define-block1-content1-text-block-row2">
                        <span>Age: 36</span>
                        <span>Ukraine, Lviv</span>
                      </div>
                      <div className="define-block1-content1-text-block-row3">
                        <span>Status: Married</span>
                        <span>Occupation: Lawyer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="define-block1-content2">
                  <div className="define-block1-content2-up">
                    <div className="define-block1-content2-text-block1">
                      <div className="define-block1-content2-text-block1-left">
                        <span className="bold-text">Biography:</span>
                        <span>
                          Busy business owner, bright, self-actualized and
                          confident personality, house proud women with a big
                          family. She is someone who treats every aspect of life
                          seriously.
                        </span>
                      </div>
                      <div className="define-block1-content2-text-block1-right">
                        <div>
                          <Commas />
                          <span className="span-orange-background bold-text">
                            “The first and most important thing I am proud of is
                            that I am Ukrainian”
                          </span>
                        </div>
                        <span>
                          She loves read magazines, listen poetry and learn
                          history, feels involved to Ukrainian traditions <br />{' '}
                          and culture.{' '}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="define-block1-content2-down">
                    <div className="define-block1-content2-text-block2">
                      <div className="define-block1-content2-text-block2-left">
                        <span className="bold-text">Goals:</span>
                        <li>
                          To find a product that she would be &nbsp; &nbsp;
                          &nbsp; &nbsp; satisfied with
                        </li>
                        <li>
                          To find a product that is worth the &nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp; money
                        </li>
                        <li>
                          To find clothes that fits her image &nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp; and display her patriotism
                        </li>
                      </div>
                    </div>
                    <div className="define-block1-content2-text-block3">
                      <div className="define-block1-content2-text-block3-right">
                        <span className="bold-text">Frustrations:</span>
                        <li>
                          No proofs that clothes fit her size, as &nbsp; &nbsp;
                          &nbsp; no size guide on a website
                        </li>
                        <li>Lack of images to see the quality</li>
                        <li>Long checkout process</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="define-block1-content3">
                  <div className="define-block1-content3-card1">
                    <div className="define-block1-content3-card1-title">
                      Needs:
                    </div>
                    <div className="define-block1-content3-card1-wrap">
                      <li>To know each product better</li>
                      <li>
                        To reduce the time she spend on finding the right
                        product
                      </li>
                      <li>
                        Convenient navigation on the website she shopping on
                      </li>
                      <li>
                        To be sure that the quality of the clothes are high
                      </li>
                    </div>
                  </div>
                  <div className="define-block1-content3-card2">
                    <div className="define-block1-content3-card2-wrap-content">
                      <div className="define-block1-content3-card2-wrap-content-text">
                        <span>
                          Victoria is a busy person, and one of her most
                          important resources is time. It is also very important
                          for her to maintain her own image, since her business
                          is highly dependent on the opinions of her employees
                          and customers. She also has a big family, for which
                          Victoria looking for the highest quality product.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="define-block1-content3-card3">
                    <div className="define-block1-content3-card3-title">
                      Motivations:
                    </div>
                    <div className="define-block1-content3-card3-wrap">
                      <li>To save time making online purchases </li>
                      <li>Find the clothes for other family members</li>
                      <li>high quality and natural fabric of the clothes</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container empatize-line"></div>
      <div className="container emphathize-block1-margin40">
        <div className="emphathize-block1-left">
          <span>2 / DEFINE</span>
          <h3>Empathy Map</h3>
        </div>
        <div className="emphathize-block1-right">
          <span>
            <span className="bold-text"></span>
            To feel and{' '}
            <span className="bold-text"> understand the user more deeply</span>,
            the method of Empathy Map helps to understand and clearly describe a
            representative of the target audience,{' '}
            <span className="bold-text">
              be his ears, eyes, feelings, predict his thoughts and actions
            </span>
          </span>
        </div>
      </div>
      <div className="container define-block2">
        <div className="define-block2-left">
          <span className="define-block2-title">Gains:</span>
          <div className="define-block2-card">
            <div className="define-block2-card-white-border">
              <div className="define-block2-card-white-border-content">
                <li>
                  To reduce the time spending on finding the right product
                </li>
                <li>
                  Increase efficiency and save time by not going to the offline
                  store
                </li>
                <li>Get compliments from friends for great outfit</li>
                <li>Feel part of the culture and traditions of Ukraine</li>
                <li>Return policy is easy to follow</li>
              </div>
            </div>
          </div>
        </div>
        <div className="define-block2-right">
          <span className="define-block2-title">Pains:</span>
          <div className="define-block2-card">
            <div className="define-block2-card-white-border">
              <div className="define-block2-card-white-border-content">
                <li>Lots of pop-ups with unnecessary ads on the websites</li>
                <li>Quality of the products doesn't fit the description </li>
                <li>Navigation on the website is not convenient</li>
                <li>
                  Lack of time (the less time she spends searching for the right
                  product, the better)
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empatize-block3">
        <div className="container">
          <span>
            The step of creating a user persona and an empathy map is important
            because along with a clear representation of the interests of the
            target audience of the client, I also got a complete picture that
            the target audience wants to see.
          </span>
        </div>
      </div>
      <div className="container empatize-line"></div>
      <div className="container emphathize-block1-margin40 mb-80">
        <div className="emphathize-block1-left">
          <span>2 / DEFINE</span>
          <h3>How Might We...</h3>
        </div>
        <div className="emphathize-block1-right">
          <span>
            <span className="bold-text"></span>
            After all needed information about target audience and their
            behavioral patterns was gathered, i have entered the stage of
            <span className="bold-text">
              {' '}
              summarizing all the pain points and needs{' '}
            </span>{' '}
            detected during my research to begin{' '}
            <span className="bold-text">
              {' '}
              to make sense of the landscape of solutions{' '}
            </span>{' '}
            I've exploring. I collected all the insights and on their basis were
            formed <span className="bold-text"> 5 HMW questions </span>.
          </span>
        </div>
      </div>
      <div className="container define-block3 mb-20">
        <div className="define-block3-left">
          <div className="define-block3-left-orange-border">
            <div className="define-block3-left-content">
              1. People assume familiar ways to make an order in online stores
            </div>
            <div className="define-block3-left-content">
              When choosing between intuition and beauty, users prefer a
              visually simple website with predictable patterns to visually
              catchy but unpredictable navigation.
            </div>
          </div>
          <div>
            <Arrow />
          </div>
          <div className="define-block3-left-orange-border">
            <div className="define-block3-left-content">Point Of View</div>
            <div className="define-block3-left-content">
              Target Audience of our client are mostly busy people and they do
              not have time to get acquainted with some new features of the site
              that do not work in the usual way
            </div>
          </div>
        </div>
        <div className="define-block3-right">
          <div className="define-block3-right-white-border">
            <div className="define-block3-right-content">How Might We</div>
            <div className="define-block3-right-content">
              How might we reduce the amount of time spent on the site for the
              user so that he achieves all his goals in a shortest period?
            </div>
          </div>
        </div>
      </div>
      <div className="container define-block3 mb-20">
        <div className="define-block3-left">
          <div className="define-block3-left-orange-border">
            <div className="define-block3-left-content">
              2. Preservation of traditions and customs as a driving motive
            </div>
            <div className="define-block3-left-content">
              People who turn to the online store for national clothes want to
              declare themselves as part of the national identity.
            </div>
          </div>
          <div>
            <Arrow />
          </div>
          <div className="define-block3-left-orange-border">
            <div className="define-block3-left-content">Point Of View</div>
            <div className="define-block3-left-content">
              Users don't want to just buy a thing, they want to feel part of
              the history of culture and traditions, thus expressing their love
              for the country they come from.
            </div>
          </div>
        </div>
        <div className="define-block3-right">
          <div className="define-block3-right-white-border">
            <div className="define-block3-right-content">How Might We</div>
            <div className="define-block3-right-content">
              Users don’t want to just buy a thing, they want to feel part of
              the history of culture and traditions, thus expressing their love
              for the country they come from.
            </div>
          </div>
        </div>
      </div>
      <div className="container define-block3 mb-20">
        <div className="define-block3-left">
          <div className="define-block3-left-orange-border">
            <div className="define-block3-left-content">
              3. People mostly avoid filling the sign up form
            </div>
            <div className="define-block3-left-content">
              Most of the participants mentioned that they are afraid to leave
              their personal information or do not want to waste their time on
              it.
            </div>
          </div>
          <div>
            <Arrow />
          </div>
          <div className="define-block3-left-orange-border">
            <div className="define-block3-left-content">Point Of View</div>
            <div className="define-block3-left-content">
              People have some fears around filling sign up form and leaving the
              personal information on the websites or just don't have a desire
              or time for it.
            </div>
          </div>
        </div>
        <div className="define-block3-right">
          <div className="define-block3-right-white-border">
            <div className="define-block3-right-content">How Might We</div>
            <div className="define-block3-right-content">
              How might we make users feel more secure and comfortable with
              filling personal information on the website?
            </div>
          </div>
        </div>
      </div>
      <div className="container define-block3 mb-20">
        <div className="define-block3-left">
          <div className="define-block3-left-orange-border">
            <div className="define-block3-left-content">
              4. People search for product categories in the header
            </div>
            <div className="define-block3-left-content">
              Users who can initially name the type of product they plan to buy
              don't want to flip through a long homepage, they expect to see the
              categories right in the navigation menu.
            </div>
          </div>
          <div>
            <Arrow />
          </div>
          <div className="define-block3-left-orange-border">
            <div className="define-block3-left-content">Point Of View</div>
            <div className="define-block3-left-content">
              As lack of time is one of the main pain points of target audience
              of our client, they exit the website page within the first 5
              seconds if they do not find the field they are interested in.
            </div>
          </div>
        </div>
        <div className="define-block3-right">
          <div className="define-block3-right-white-border">
            <div className="define-block3-right-content">How Might We</div>
            <div className="define-block3-right-content">
              How might we make a navigation menu more convenient, so the client
              could find the needed elements on the website faster?
            </div>
          </div>
        </div>
      </div>
      <div className="container define-block3 mb-80">
        <div className="define-block3-left">
          <div className="define-block3-left-orange-border">
            <div className="define-block3-left-content">
              5. Size guide must be clearly visible
            </div>
            <div className="define-block3-left-content">
              Most of participants mentioned the importance of the size guide
              and indicating which product sizes are available and which are
              not.
            </div>
          </div>
          <div>
            <Arrow />
          </div>
          <div className="define-block3-left-orange-border">
            <div className="define-block3-left-content">Point Of View</div>
            <div className="define-block3-left-content">
              User's one of the highest need is to be sure that the quality of
              the clothes is high.
            </div>
          </div>
        </div>
        <div className="define-block3-right">
          <div className="define-block3-right-white-border">
            <div className="define-block3-right-content">How Might We</div>
            <div className="define-block3-right-content">
              User's one of the highest need is to be sure that the quality of
              the clothes is high.
            </div>
          </div>
        </div>
      </div>
      <div className="empatize-block3">
        <div className="container">
          <span>
            Formulation of such a HMW questions is very helpful and important
            step to move in a right directions, and to Identify significant
            flaws in the interface in order to find the right solutions for them
            and to avoid confusion and blind groping.
          </span>
        </div>
      </div>
      <div className="container empatize-line"></div>
      <div className="container emphathize-block1-margin40 mb-80">
        <div className="emphathize-block1-left">
          <span>2 / DEFINE</span>
          <h3>Brainstorming</h3>
        </div>
        <div className="emphathize-block1-right">
          <span>
            <span className="bold-text"></span>
            The result of design without quality research is a ridiculous
            attempt to solve far-fetched problems, that's why{' '}
            <span className="bold-text"> I devote enough time </span> to this
            stage of carefully studying my client, his competitors and target
            audience. As a result I get a list of HMW questions (therefore all
            detected issues) that are worthy of attention and as the next stage
            -Brainstorming,{' '}
            <span className="bold-text">
              {' '}
              I actively look for ways to solve these issues
            </span>
            .
          </span>
        </div>
      </div>
      <div className="container define-block4">
        <div className="define-block4-left">
          <img className="define-block4-img" src={brainStorm1} alt="" />
          <div className="define-block4-content ">
            <div className="define-block4-content-row">
              <span>
                1. How might we help users to know each product better?
              </span>
            </div>
            <div className="define-block4-content-row">
              <span>
                2. How might we make a navigation menu more convenient, so the
                client could find the needed elements of the pages faster?
              </span>
            </div>
          </div>
        </div>
        <div className="define-block4-right">
          <img className="define-block4-img" src={brainStorm2} alt="" />
          <div className="define-block4-content ">
            <div className="define-block4-content-row">
              <span>
                3. How might we make users feel more secure and comfortable with
                filling personal information on the website?
              </span>
            </div>
            <div className="define-block4-content-row">
              <span>
                4. How might we show the Ukrainian atmosphere through design?
                What exactly would evoke the necessary associations?
              </span>
            </div>
            <div className="define-block4-content-row">
              <span>
                5. how can we reduce the amount of time spent on the site for
                the user so that he achieves all his goals in a shortest period?
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="empatize-block3">
        <div className="container">
          <span>
            Brainstorming is a very necessary option when all the issues and
            shortcomings of the old design are identified, and competitors and
            the target audience of the client are studied. Only in this case, we
            can be sure that the decisions we receive in the end will be useful
            and meaningful.
          </span>
        </div>
      </div>
    </>
  )
}

export default ZernoDefine
