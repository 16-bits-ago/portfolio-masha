import { ReactComponent as CircleTitle } from '../../assets/circleTitle.svg'
import { ReactComponent as Commas } from '../../assets/Commas.svg'

import definePhoto from '../../assets/defineBlockPhoto.png'

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
    </>
  )
}

export default ZernoDefine
