import { ReactComponent as CircleTitle } from '../../assets/circleTitle.svg'

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
                    <div className='define-block1-content2-text-block1'></div>
                  </div>
                  <div className="define-block1-content2-down">
                    <div className='define-block1-content2-text-block2'></div>
                    <div className='define-block1-content2-text-block3'></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="define-block1-content3">
                  <div className='define-block1-content3-card1'>
                    <div className='define-block1-content3-card1-title'>Needs:</div>
                    <div className='define-block1-content3-card1-wrap'>

                    </div>
                  </div>
                  <div className='define-block1-content3-card2'></div>
                  <div className='define-block1-content3-card3'>
                    <div className='define-block1-content3-card3-title'>Motivations:</div>
                    <div className='define-block1-content3-card3-wrap'>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ZernoDefine
