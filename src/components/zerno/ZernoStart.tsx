import zernoBanner from '../../assets/zernoBanner.png'
import { HashLink as Link } from 'react-router-hash-link'

const ZernoStart = () => {
  return (
    <>
      <div>
        <img className="zerno-start-img" src={zernoBanner} alt="" />
      </div>
      <div className="container">
        <div className="zerno-start-block1">
          <div className="zerno-start-block1-left">
            <div>
              <div className="zerno-start-block1-left-content-row">
                <span className="bold-text">My role:</span>
                <span>Solo UX/UI designer</span>
              </div>
              <div className="zerno-start-block1-left-content-row">
                <span className="bold-text">Duration:</span>
                <span>4 weeks (September 2022)</span>
              </div>
              <div className="zerno-start-block1-left-content-row">
                <span className="bold-text">Tools:</span>
                <span>Figma, Google Drive</span>
              </div>
            </div>
            <Link to="/zernoEcomers#prototype">
              <button type="button">
                <span className="bold-text">FINAL WORK</span>
              </button>
            </Link>
          </div>
          <div className="zerno-start-block1-right">
            <span className="bold-text mb-26">Problem Statements:</span>
            <div>
              <span className="span-orange-background">
                01. The old website design is obsolete
              </span>
              <p>
                It has not gone through a redesign for a 5 years. The shades of
                colors on the site are poorly combined, the fonts are also
                outdated and hard to read.
              </p>
            </div>
            <div>
              <span className="span-orange-background">
                02. The old website is not convenient and not intuitive in use
              </span>
              <p>
                The absence of icons and of easy navigation compliactes the
                journey through the website and makes it difficult for users to
                find access to the most important pages of the site - search,
                catalog and basket.
              </p>
            </div>
          </div>
        </div>
        <div className="zerno-start-block2">
          <div className="zerno-start-block2-row">
            <span className="bold-text zerno-start-block2-row-left">Goal:</span>
            <span className="zerno-start-block2-row-right">
              To create a <span className="bold-text">user-friendly</span>{' '}
              online store <span className="bold-text">website redesign</span>{' '}
              for Ukrainian and international audiences that conveys the brand
              philosophy and will broadcast{' '}
              <span className="bold-text">
                Ukrainian aesthetics, traditions and style.
              </span>
            </span>
          </div>
          <div className="zerno-start-block2-row">
            <span className="bold-text">Background:</span>
            <span className="zerno-start-block2-row-right">
              The project is <span className="bold-text">my course work</span>{' '}
              which was made within a bootcamp course, where I was learning to{' '}
              <span className="bold-text">customer's needs</span> understand in
              the field using latest methods of research and ideation.
              <span className="bold-text">
                The work was made for a real client
              </span>{' '}
              as a redesign of an E-Commerce website.
            </span>
          </div>
          <div className="zerno-start-block2-row">
            <span className="bold-text">Design Process:</span>
            <span className="zerno-start-block2-row-right">
              As the time frame for the project was strictly limited, I decided
              to structure my work with the most important and useful steps,
              which proved to make{' '}
              <span className="bold-text">
                qualitative and easy User Experience
              </span>{' '}
              and improve Interface flaws within a shortest period.
            </span>
          </div>
        </div>
      </div>
      <div className="zerno-start-block3">
        <div className="zerno-start-block3-wrap display-none">
          <div className="zerno-start-block3-card">
            <div className="zerno-start-block3-card-inside">
              <div className="zerno-start-block3-card-inside-content">
                <span className="zerno-start-block3-card-inside-content-title">
                  1. EMPATHIZE
                </span>
                <ul>
                  <li>Current state evaluation</li>
                  <li>Brief of client</li>
                  <li>Competetive analysis</li>
                  <li>User Interview</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="zerno-start-block3-card">
            <div className="zerno-start-block3-card-inside">
              <div className="zerno-start-block3-card-inside-content">
                <span className="zerno-start-block3-card-inside-content-title">
                  2. DEFINE
                </span>
                <ul>
                  <li>User Persona</li>
                  <li>Empathy Map</li>
                  <li>HMW Questions</li>
                  <li>Brainstorming</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="zerno-start-block3-card">
            <div className="zerno-start-block3-card-inside">
              <div className="zerno-start-block3-card-inside-content">
                <span className="zerno-start-block3-card-inside-content-title">
                  3. IDEATE
                </span>
                <ul>
                  <li>References Research</li>
                  <li>Content-plan</li>
                  <li>Lo-Fi sketches, Mid-Fi prototype</li>
                  <li>Usability testing</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="zerno-start-block3-card">
            <div className="zerno-start-block3-card-inside">
              <div className="zerno-start-block3-card-inside-content">
                <span className="zerno-start-block3-card-inside-content-title">
                  4. PROTOTYPE
                </span>
                <ul>
                  <li>Hi-Fi prototype</li>
                  <li>Style guide</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="zerno-start-block3-card">
            <div className="zerno-start-block3-card-inside">
              <div className="zerno-start-block3-card-inside-content">
                <span className="zerno-start-block3-card-inside-content-title">
                  5. TESTING
                </span>
                <ul>
                  <li>Hi-fi wireframe usability testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="zerno-start-block3-wrap-1024">
          <div className='zerno-start-block3-wrap-1024-rowup'>
            <div className="zerno-start-block3-card">
              <div className="zerno-start-block3-card-inside">
                <div className="zerno-start-block3-card-inside-content">
                  <span className="zerno-start-block3-card-inside-content-title">
                    1. EMPATHIZE
                  </span>
                  <ul>
                    <li>Current state evaluation</li>
                    <li>Brief of client</li>
                    <li>Competetive analysis</li>
                    <li>User Interview</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="zerno-start-block3-card">
              <div className="zerno-start-block3-card-inside">
                <div className="zerno-start-block3-card-inside-content">
                  <span className="zerno-start-block3-card-inside-content-title">
                    2. DEFINE
                  </span>
                  <ul>
                    <li>User Persona</li>
                    <li>Empathy Map</li>
                    <li>HMW Questions</li>
                    <li>Brainstorming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='zerno-start-block3-wrap-1024-rowdown'>
            <div className="zerno-start-block3-card">
              <div className="zerno-start-block3-card-inside">
                <div className="zerno-start-block3-card-inside-content">
                  <span className="zerno-start-block3-card-inside-content-title">
                    3. IDEATE
                  </span>
                  <ul>
                    <li>References Research</li>
                    <li>Content-plan</li>
                    <li>Lo-Fi sketches, Mid-Fi prototype</li>
                    <li>Usability testing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="zerno-start-block3-card">
              <div className="zerno-start-block3-card-inside">
                <div className="zerno-start-block3-card-inside-content">
                  <span className="zerno-start-block3-card-inside-content-title">
                    4. PROTOTYPE
                  </span>
                  <ul>
                    <li>Hi-Fi prototype</li>
                    <li>Style guide</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="zerno-start-block3-card">
              <div className="zerno-start-block3-card-inside">
                <div className="zerno-start-block3-card-inside-content">
                  <span className="zerno-start-block3-card-inside-content-title">
                    5. TESTING
                  </span>
                  <ul>
                    <li>Hi-fi wireframe usability testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ZernoStart
