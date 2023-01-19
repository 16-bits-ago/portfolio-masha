import { ReactComponent as Commas } from '../../assets/projectorCommas.svg'
import { ReactComponent as ProjectorBlueClyaksa } from '../../assets/ProjectorBlueClyaksa.svg'
import projectorDefinePhoto from '../../assets/projectorDefinePhoto.png'
import projectorEmpathyMap from '../../assets/projectorEmpathyMap.png'

const ProjectorDefine = () => {
  return (
    <>
      <div className="container projector-start-block3-title">
        User Persona <ProjectorBlueClyaksa />
      </div>
      <div className="define-block1">
        <div className="define-block1-border projector-define-block1-border">
          <div style={{ height: '100%', marginLeft: 130, marginRight: 130 }}>
            <div className="define-block1-content-wrap">
              <div className="define-block1-content-wrap-up">
                <div className="define-block1-content1">
                  <div>
                    <img
                      className="define-block1-content1-photo-block"
                      src={projectorDefinePhoto}
                      alt=""
                    />
                  </div>
                  <div className="define-block1-content1-text-block projector-define-block1-border">
                    <div className="define-block1-content1-text-block-padding">
                      <div className="define-block1-content1-text-block-row1">
                        <span>Alex Karovaninskiy</span>
                      </div>
                      <div className="define-block1-content1-text-block-row2">
                        <div>
                          <span className="color-blue">Age</span>: 36
                        </div>
                        <div>
                          <span className="color-blue">City</span>Ukraine, Lviv
                        </div>
                      </div>
                      <div className="define-block1-content1-text-block-row3">
                        <div>
                          <span className="color-blue">Status</span>: Married
                        </div>
                        <div>
                          <span className="color-blue">Occupation</span>: Lawyer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="define-block1-content2">
                  <div className="define-block1-content2-up">
                    <div className="define-block1-content2-text-block1 projector-define-block1-border">
                      <div className="define-block1-content2-text-block1-left">
                        <span className="bold-text">Biography:</span>
                        <span>
                          Busy student, curious, looking for different ways to
                          improve personality. Creative person with a big
                          ambitious. He is someone who always looks to the
                          future and build plans.
                        </span>
                      </div>
                      <div className="define-block1-content2-text-block1-right">
                        <div>
                          <Commas />
                          <span className="span-blue-background bold-text color-white">
                            “Would be so cool to find ways to express myself in
                            creative field”
                          </span>
                        </div>
                        <span>
                          He loves to learn and read, listen podcasts and draw
                          illustrations.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="define-block1-content2-down">
                    <div className="define-block1-content2-text-block2 projector-define-block1-border">
                      <div className="define-block1-content2-text-block2-left">
                        <span className="bold-text">Goals:</span>
                        <li>
                          To find an online courses that he would be satisfied
                          with
                        </li>
                        <li>To find way to find his calling and grow</li>
                        <li>
                          To find online university that match with description.
                        </li>
                      </div>
                    </div>
                    <div className="define-block1-content2-text-block3 projector-define-block1-border">
                      <div className="define-block1-content2-text-block3-right">
                        <span className="bold-text">Frustrations:</span>
                        <li>
                          No proofs on a website that the faculty of visual arts
                          is match with his needs
                        </li>
                        <li>
                          Not enough information on the website to explore all
                          pros and cons{' '}
                        </li>
                        <li>Slow loading of the website</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="define-block1-content3">
                  <div className="define-block1-content3-card1">
                    <div className="define-block1-content3-card1-title color-blue">
                      Needs:
                    </div>
                    <div className="define-block1-content3-card1-wrap projector-define-block1-border">
                      <li>To know each course better</li>
                      <li>
                        To reduce the time he spends on finding the right
                        faculty and course
                      </li>
                      <li>Convenient navigation on the website</li>
                      <li>
                        To be sure that the quality of an educational material
                        is high
                      </li>
                    </div>
                  </div>
                  <div className="define-block1-content3-card2 bg-black">
                    <div className="define-block1-content3-card2-wrap-content">
                      <div className="define-block1-content3-card2-wrap-content-text">
                        <span>
                          Alex is a young boy, but he is very ambitious and
                          confident. He is looking for an opportunity to realise
                          his creative flair at the work he loves to do. As
                          drawing is his hobbie, he is about to take a decision
                          find an appropriate online courses to grow in this
                          field and in the same time to combine it with his
                          school.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="define-block1-content3-card3">
                    <div className="define-block1-content3-card3-title color-blue">
                      Motivations:
                    </div>
                    <div className="define-block1-content3-card3-wrap projector-define-block1-border">
                      <li>
                        To save money, as Alex doesn't work yet and for a moment
                        materially dependent from parents{' '}
                      </li>
                      <li>Find the online course that friends advised</li>
                      <li>
                        Opportunity to combine his school and learn new field
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container projector-start-block3-title">
        Empathy Map <ProjectorBlueClyaksa />
      </div>
      <div className="ideate-block2 mb-80">
        <div className="ideate-block2-wrap projector-define-block1">
          <img src={projectorEmpathyMap} alt="" />
        </div>
      </div>

      <div className="container define-block2">
        <div className="define-block2-left">
          <span className="define-block2-title color-blue">Gains:</span>
          <div className="define-block2-card bg-black">
            <div className="define-block2-card-white-border">
              <div className="define-block2-card-white-border-content">
                <li>
                  Feel part of the creative team, which help him grow as a
                  professional
                </li>
                <li>
                  Increase efficiency and save time by not going on the offline
                  courses
                </li>
                <li>Get compliments from parents for his great realisation</li>
                <li>
                  The possibility to return money if he won't like the course
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="define-block2-right">
          <span className="define-block2-title color-blue">Pains:</span>
          <div className="define-block2-card bg-black">
            <div className="define-block2-card-white-border">
              <div className="define-block2-card-white-border-content">
                <li>
                  Websites of online universities don't consist with great
                  exhaustive descriptions
                </li>
                <li>
                  Quality of the educational material doesn't fit the
                  description
                </li>
                <li>Navigation on the website is not convenient</li>
                <li>
                  Lack of time (Alex is a student so he want to find an
                  opportunity to combine one school with another)
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projector-start-block4 mb-80">
        <div className="container">
          <div className="projector-start-block4-content">
            <span className="bold-text"></span>I created a user persona and an
            empathy map and{' '}
            <span className="bold-text">this step is important because</span>{' '}
            along with a{' '}
            <span className="bold-text"> clear representation </span>of the{' '}
            <br />
            <span className="bold-text">interests</span> of the target audience
            of the client, which I received from communicating with him, I also
            got a<span className="bold-text">complete picture</span> that the{' '}
            <br />
            <span className="bold-text">target audience wants to see.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectorDefine
