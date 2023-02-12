import { ReactComponent as CircleTitle } from '../../assets/circleTitle.svg'
import empatizeCard1 from '../../assets/empatizeCard1.png'
import empatizeCard2 from '../../assets/empatizeCard2.png'
import empatizeCard3 from '../../assets/empatizeCard3.png'
import empatizeCard4 from '../../assets/empatizeCard4.png'
import empatizeCard5 from '../../assets/empatizeCard5.png'
import empatizeCard6 from '../../assets/empatizeCard6.png'

import empatizeTable1 from '../../assets/empatizeTable1.png'
import empatizeTable2 from '../../assets/empatizeTable2.png'
import empatizeTable3 from '../../assets/empatizeTable3.png'

const ZernoEmphathize = () => {
  return (
    <>
      <div className="container emphathize-wrapper" id="emphathize">
        <div className="frame-block-title">
          <CircleTitle />
          <h1>1 / EMPATHIZE</h1>
          <CircleTitle />
        </div>
        <div className="emphathize-block1">
          <div className="emphathize-block1-left">
            <span>1 / EMPATHIZE</span>
            <h3>Current state evaluation</h3>
          </div>
          <div className="emphathize-block1-right">
            <span>
              Before diving into full research process, I've made a
              <span className="bold-text"> heuristice valuation </span>
              of the old website in order to identify the main problems of
              design and provide the correct solutions.
            </span>
          </div>
        </div>
        <div className="emphathize-block2">
          <div className="emphathize-block2-card">
            <img src={empatizeCard1} alt="" />
            <div className="empatize-block2-list">
              <li>Ineffective UI of cart page</li>
              <li>No recomendations</li>
              <li>No price for Delivery</li>
            </div>
          </div>
          <div className="emphathize-block2-card">
            <img src={empatizeCard2} alt="" />
            <div className="empatize-block2-list">
              <li>No bread crumps</li>
              <li>Big distances between photos</li>
              <li>Line height more than 150%</li>
            </div>
          </div>
          <div className="emphathize-block2-card">
            <img src={empatizeCard3} alt="" />
            <div className="empatize-block2-list">
              <li>Absence of icons</li>
              <li>Imperfections in details</li>
              <li>No search field</li>
            </div>
          </div>
          <div className="emphathize-block2-card">
            <img src={empatizeCard4} alt="" />
            <div className="empatize-block2-list">
              <li>Poor readability of the fonts</li>
              <li>Inappropriate colour combinations</li>
            </div>
          </div>
          <div className="emphathize-block2-card">
            <img src={empatizeCard5} alt="" />
            <div className="empatize-block2-list">
              <li>Slide out filtration is very long</li>
              <li>The number of products in catalogue is too much </li>
              <li>Reset filtration is a good UX solution</li>
            </div>
          </div>
          <div className="emphathize-block2-card">
            <img src={empatizeCard6} alt="" />
            <div className="empatize-block2-list">
              <li>Inconsistency in details</li>
              <li>Information-rich checkout</li>
              <li>Different sizes of buttons</li>
            </div>
          </div>
        </div>
      </div>
      <div className="empatize-block3">
        <div className="container">
          <span className="bold-text">
            At this stage, it is important to make a list of "WHAT" questions.
            What specifically repels new customers? What's wrong with the visual
            part? How is site navigation arranged? What can be added? What is
            better to remove? After identifying such questions, we begin to ask
            questions "HOW"
          </span>
        </div>
      </div>
      <div className="container">
        <div className="empatize-line"></div>
        <div className="emphathize-block1-margin40">
          <div className="emphathize-block1-left">
            <span>1 / EMPATHIZE</span>
            <h3>Brief of the client</h3>
          </div>
          <div className="emphathize-block1-right">
            <span>
              As a first important step, for better understanding of client's
              <span className="bold-text">
                {' '}
                objectives, limitations and potential of the project
              </span>
              , I've prepared list of questions, after was created UX brief
              based on the answers.
            </span>
          </div>
        </div>
        <div className="empatize-block4">
          <div className="empatize-block4-left">
            <a
              href="https://docs.google.com/document/d/1jkDu11RGXeIg4ueKLWr_UR7kowDhmGW38k1udimo3ZU/edit"
              rel="noreferrer"
              target="_blank"
            >
              <button className="h-283">Full brief</button>
            </a>
          </div>
          <div className="empatize-block4-right">
            <span>
              As a result, a summary of the main information,
              <span className="bold-text"> requirements and needs </span>
              were established, such as:
            </span>
            <div className="empatize-block4-li-wrapper">
              <div>
                <li>Field of activity</li>
                <li>History of brand creation</li>
                <li>Brand philosophy</li>
                <li>Brand mission</li>
                <li>Goods and services</li>
              </div>
              <div>
                <li>Target Audience</li>
                <li>Key needs of CA</li>
                <li>Desired structure</li>
                <li>Basic Design tasks</li>
                <li>Overal wishes</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empatize-block3">
        <div className="container">
          <span>
            One of the main advantages to make Brief is the possibility to bring
            clarity, to find the right direction faster and to make the process
            more efficient, find answers to questions about what we are trying
            to improve/fix/solve? For whom?
          </span>
        </div>
      </div>
      <div className="container empatize-block5">
        <div className="empatize-line"></div>
        <div className="emphathize-block1">
          <div className="emphathize-block1-left">
            <span>1 / EMPATHIZE</span>
            <h3>Competetive analysist</h3>
          </div>
          <div className="emphathize-block1-right">
            <span>
              Initially gathering an information about
              <span className="bold-text"> main competitors </span>is an
              essential step in order to create qualitative, valuable product.
              Here is all the summary of
              <span className="bold-text"> all the pros and cons </span>among
              the direct competitors of my client:
            </span>
          </div>
        </div>
        <div className="empatize-block5-table">
          <div className="empatize-block5-table-sides">
            <div className="empatize-block5-table-header empatize-block5-table-header-first-500">
              <img src={empatizeTable1} alt="" />
            </div>
            <div className="empatize-block5-table-content">
              <div>
                <span className="empatize-block5-table-content-title1">
                  Strengths
                </span>
                <li>Large, good quality photos</li>
                <li>Clear, minimalistic design</li>
                <li>Convenient navigation</li>
                <li>Fast loading of the website</li>
              </div>
              <div>
                <span className="empatize-block5-table-content-title2">
                  Weaknesses
                </span>
                <li>Not convenient filtration</li>
                <li>No customer reviews</li>
                <li>No size table</li>
                <li>Not responsive website</li>
              </div>
            </div>
          </div>
          <div className="empatize-block5-table-center">
            <div className="empatize-block5-table-header">
              <img src={empatizeTable2} alt="" />
            </div>
            <div className="empatize-block5-table-content">
              <div>
                <span className="empatize-block5-table-content-title1">
                  Strengths
                </span>
                <li>high-quality cropped png photos</li>
                <li>Promiment search field</li>
                <li>blog session</li>
              </div>
              <div>
                <span className="empatize-block5-table-content-title2">
                  Weaknesses
                </span>
                <li>No wish list</li>
                <li>obsolete design</li>
                <li>jagged text indents</li>
                <li>overloaded text blocks</li>
              </div>
            </div>
          </div>
          <div className="empatize-block5-table-sides">
            <div className="empatize-block5-table-header">
              <img src={empatizeTable3} alt="" />
            </div>
            <div className="empatize-block5-table-content">
              <div>
                <span className="empatize-block5-table-content-title1">
                  Strengths
                </span>
                <li>Distinctive search field</li>
                <li>High quality photos</li>
                <li>Consistent icons</li>
              </div>
              <div>
                <span className="empatize-block5-table-content-title2">
                  Weaknesses
                </span>
                <li>Slow loading of the website</li>
                <li>Uneven visual</li>
                <li>Different size of elements</li>
                <li>No “bread crumps”</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empatize-block3">
        <div className="container">
          <span>
            As soon as the client named his three main competitors, I used this
            user experience analysis method to understand, estimate and point
            out all advantages and misadvantage which competitors have. If
            conducted thoroughly, considering the needs of the audience and the
            goals of the organization, such an analysis can bring great value to
            the design of any product or service.
          </span>
        </div>
      </div>
      <div className="container empatize-block6">
        <div className="empatize-line"></div>
        <div className="emphathize-block1">
          <div className="emphathize-block1-left">
            <span>1 / EMPATHIZE</span>
            <h3>User Interview</h3>
          </div>
          <div className="emphathize-block1-right">
            <span>
              Exploring patterns of how users shop online.
              <span className="bold-text">
                {' '}
                Identifying needs and pain points{' '}
              </span>
              of the clients when shopping online
            </span>
          </div>
        </div>
        <div className="empatize-block4">
          <div className="empatize-block4-left">
            <a
              href="https://docs.google.com/document/d/123THbLCR9yn-DVacvMbAKICoe9sqe51QJs0cJElYZwk/edit"
              rel="noreferrer"
              target="_blank"
            >
              <button className="h-283">Interview guide</button>
            </a>
          </div>
          <div className="empatize-block4-right">
            <span style={{ paddingBottom: 20 }}>
              After defining the target audience, I've prepared an interview
              guide and conducted an interviews with
              <span className="bold-text"> 5 participants in age 25-45 </span>
              years who often buy things online and
              <span className="bold-text"> fit a description of TA </span>
              (brief: age, motivations, goals, pain points). Based on it were
              created tasks for users
              <span className="bold-text">
                {' '}
                (registration on the platfrom, buy some special clothes, find a
                discount page, filter the products by price){' '}
              </span>
            </span>
            <span>
              Was used “think aloud” method for the interviews. I've asked the
              participants to share their screen and tell me their thoughts and
              <span className="bold-text"> explain me their decisions </span>
              during completing tasks. To conduct the tasks, we've used
              <span className="bold-text">
                {' '}
                the websites of main competitors{' '}
              </span>
              of our client, including the website of ZERNO. After tasks were
              completed, users were asked with a list of questions from the
              interview guide.
            </span>
          </div>
        </div>
      </div>
      <div className="container empatize-block7">
        <div className="empatize-block7-title">Insights:</div>
        <div className="empatize-block7-card-wrap display-none">
          <div className="empatize-block7-card">
            <div className="empatize-block7-card-content-title">
              <span className="bold-text">
                1. People assume familiar ways to make an order in online stores
              </span>
            </div>
            <div className="empatize-block7-card-content-body">
              <span>
                When choosing between intuition and beauty, users prefer a
                visually simple website with predictable patterns to visually
                catchy but unpredictable navigation.
              </span>
            </div>
          </div>
          <div className="empatize-block7-card">
            <div className="empatize-block7-card-content-title">
              <span className="bold-text">
                2. Preservation of traditions and customs as a driving motive
              </span>
            </div>
            <div className="empatize-block7-card-content-body">
              <span>
                People who turn to the online store for national clothes want to
                declare themselves as part of the national identity.
              </span>
            </div>
          </div>
          <div className="empatize-block7-card">
            <div className="empatize-block7-card-content-title">
              <span className="bold-text">
                3. People mostly avoid filling the sign up form
              </span>
            </div>
            <div className="empatize-block7-card-content-body">
              <span>
                Most of the participants mentioned that they are afraid to leave
                their personal information or do not want to waste their time on
                it.
              </span>
            </div>
          </div>
          <div className="empatize-block7-card">
            <div className="empatize-block7-card-content-title">
              <span className="bold-text">
                4. People search for product categories in the header
              </span>
            </div>
            <div className="empatize-block7-card-content-body">
              <span>
                Users who can initially name the type of product they plan to
                buy don't want to flip through a long homepage, they expect to
                see the categories right in the navigation menu.
              </span>
            </div>
          </div>
          <div className="empatize-block7-card">
            <div className="empatize-block7-card-content-title">
              <span className="bold-text">
                5. Size guide must be clearly visible
              </span>
            </div>
            <div className="empatize-block7-card-content-body">
              <span>
                Most of participants mentioned the importance of the size guide
                and indicating which product sizes are available and which are
                not.
              </span>
            </div>
          </div>
        </div>
        <div className="empatize-block7-card-wrap-1024">
          <div className="empatize-block7-card-wrap-1024-rowup">
            <div className="empatize-block7-card">
              <div className="empatize-block7-card-content-title">
                <span className="bold-text">
                  1. People assume familiar ways to make an order in online
                  stores
                </span>
              </div>
              <div className="empatize-block7-card-content-body">
                <span>
                  When choosing between intuition and beauty, users prefer a
                  visually simple website with predictable patterns to visually
                  catchy but unpredictable navigation.
                </span>
              </div>
            </div>
            <div className="empatize-block7-card">
              <div className="empatize-block7-card-content-title">
                <span className="bold-text">
                  2. Preservation of traditions and customs as a driving motive
                </span>
              </div>
              <div className="empatize-block7-card-content-body">
                <span>
                  People who turn to the online store for national clothes want
                  to declare themselves as part of the national identity.
                </span>
              </div>
            </div>
          </div>
          <div className="empatize-block7-card-wrap-1024-rowdown">
            <div className="empatize-block7-card">
              <div className="empatize-block7-card-content-title">
                <span className="bold-text">
                  3. People mostly avoid filling the sign up form
                </span>
              </div>
              <div className="empatize-block7-card-content-body">
                <span>
                  Most of the participants mentioned that they are afraid to
                  leave their personal information or do not want to waste their
                  time on it.
                </span>
              </div>
            </div>
            <div className="empatize-block7-card">
              <div className="empatize-block7-card-content-title">
                <span className="bold-text">
                  4. People search for product categories in the header
                </span>
              </div>
              <div className="empatize-block7-card-content-body">
                <span>
                  Users who can initially name the type of product they plan to
                  buy don't want to flip through a long homepage, they expect to
                  see the categories right in the navigation menu.
                </span>
              </div>
            </div>
            <div className="empatize-block7-card">
              <div className="empatize-block7-card-content-title">
                <span className="bold-text">
                  5. Size guide must be clearly visible
                </span>
              </div>
              <div className="empatize-block7-card-content-body">
                <span>
                  Most of participants mentioned the importance of the size
                  guide and indicating which product sizes are available and
                  which are not.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empatize-block3">
        <div className="container">
          <span>
            The user interviews helped me to identify consumer need states and
            barriers, lifestyle realities and cultural influences. As a
            conclusion of an interview, participants described their's overall
            experience of using the old website of our client, voiced the
            objections and told what was missing on the site to complete the
            tasks.
          </span>
        </div>
      </div>
    </>
  )
}

export default ZernoEmphathize
