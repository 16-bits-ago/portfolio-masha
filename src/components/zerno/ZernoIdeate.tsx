import { ReactComponent as CircleTitle } from '../../assets/circleTitle.svg'
import ideateBlock2BG from '../../assets/ideateBlock2BG.png'
import ideateBlock4BG from '../../assets/ideateBlock4BG.png'
import ideateSketch1 from '../../assets/ideateSketch1.png'
import ideateSketch2 from '../../assets/ideateSketch2.png'
import ideateSketch3 from '../../assets/ideateSketch3.png'
import ideateSketch4 from '../../assets/ideateSketch4.png'
import ideateSketch5 from '../../assets/ideateSketch5.png'
import ideateBlock5Table from '../../assets/ideateBlock5Table.png'

const ZernoIdeate = () => {
  return (
    <>
      <div className="container" id="ideate">
        <div className="frame-block-title">
          <CircleTitle />
          <h1>3 / IDEATE</h1>
          <CircleTitle />
        </div>
        <div className="emphathize-block1-margin40">
          <div className="emphathize-block1-left">
            <span>3 / IDEATE</span>
            <h3>Reference Research</h3>
          </div>
          <div className="emphathize-block1-right">
            <span>
              Isn't that the most enjoyable part of learning something when you
              can finally show off your knowledge and put it into action? Here
              begins{' '}
              <span className="bold-text"> the most practical part </span> -
              ideation.
            </span>
          </div>
        </div>
        <div className="empatize-block4">
          <div className="empatize-block4-left">
            <button>Full reference list</button>
          </div>
          <div className="empatize-block4-right justify-content-end">
            <span>
              I started by researching other E-Commerce sites{' '}
              <span className="bold-text"> to see </span> how their structure is
              arranged, <span className="bold-text"> to highlight </span> and
              save some interesting
              <span className="bold-text"> solutions for myself</span>. I've
              made a screenshots of any part of other website I like,
              transferred to Figma, divided them into separate pages and signed
              under each screenshot what exactly caught my
              <span className="bold-text"> attention </span> there.
            </span>
          </div>
        </div>
      </div>
      <div className="ideate-block2 mb-0">
        <div className="ideate-block2-wrap">
          <img src={ideateBlock2BG} alt="" />
        </div>
      </div>
      <div className="empatize-block3">
        <div className="container">
          <span>
            I always spend enough time looking for references because looking
            and borrowing ideas or inspiration from the work of other designers
            is normal and right, it helps to know what is on trend and how it
            looks.
          </span>
        </div>
      </div>
      <div className="container empatize-line"></div>
      <div className="container emphathize-block1-margin40 mb-80">
        <div className="emphathize-block1-left">
          <span>3 / IDEATE</span>
          <h3>Content-Plan</h3>
        </div>
        <div className="emphathize-block1-right">
          <span>
            <span className="bold-text"></span>
            Once I got enough inspiration,{' '}
            <span className="bold-text">
              {' '}
              I began to think over in detail about the content{' '}
            </span>{' '}
            that will be present on every page of my project - Home, Catalogue,
            Page of product, cart and checkout. Each point of my content plan{' '}
            <span className="bold-text">
              was based on the needs of my client's target audience
            </span>
            , their gains and motivations, as well as{' '}
            <span className="bold-text"> on my client's requirements</span>.
          </span>
        </div>
      </div>
      <div className="container empatize-block7 ">
        <div className="empatize-block7-card-wrap">
          <div className="empatize-block7-card space-between-column">
            <div className="empatize-block7-card-content-title m-none">
              <span className="bold-text">Main Page</span>
            </div>
            <div className="empatize-block7-card-content-body">
              <span>
                1. Banner <br />
                2. Sections <br />
                3. Discounts <br />
                3. Block of advantages <br />
                5. New collections <br />
                6. About us <br />
                7. Footer <br />
              </span>
            </div>
          </div>
          <div className="empatize-block7-card space-between-column">
            <div className="empatize-block7-card-content-title m-none">
              <span className="bold-text">Catalogue</span>
            </div>
            <div className="empatize-block7-card-content-body">
              <span>
                1. Bread Crumps <br />
                2. Categories <br />
                3. Filtration by color, size and style <br />
                3. Filtration by price <br />
                4. Products with details on hover <br />
                5. Footer <br />
              </span>
            </div>
          </div>
          <div className="empatize-block7-card space-between-column">
            <div className="empatize-block7-card-content-title m-none">
              <span className="bold-text">Checkout</span>
            </div>
            <div className="empatize-block7-card-content-body">
              <span>
                1. Steps (data entry, payment, purchase) <br />
                2. Mini images of choosen products <br />
                3. Name, prices, colours <br />
                4. Total including fees <br />
                5. Continue registration button <br />
              </span>
            </div>
          </div>
          <div className="empatize-block7-card space-between-column">
            <div className="empatize-block7-card-content-title m-none">
              <span className="bold-text">Product Details</span>
            </div>
            <div className="empatize-block7-card-content-body">
              <span>
                1. Add to wish list <br />
                2. Material <br />
                3. Shipping details <br />
                4. Size Guide <br />
                5. Large photos <br />
                6. Recently watched products <br />
                7. Footer <br />
              </span>
            </div>
          </div>
          <div className="empatize-block7-card space-between-column">
            <div className="empatize-block7-card-content-title m-none h-30">
              <span className="bold-text">Cart</span>
            </div>
            <div className="empatize-block7-card-content-body">
              <span>
                1. Mini images of choosen products <br />
                2. Name, prices, colours <br />
                3. Delete button <br />
                4. Fees included in Total <br />
                5. “Continue shopping” <br />
                6. “Proceed to checkout” <br />
                7. Pack as gift <br />
                8. Organic packaging <br />
                9. Total including fees <br />
                10. Recomendations <br />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container empatize-line"></div>
      <div className="container emphathize-block1-margin40 mb-80">
        <div className="emphathize-block1-left">
          <span>3 / IDEATE</span>
          <h3>Lo-Fi sketches</h3>
        </div>
        <div className="emphathize-block1-right">
          <span>
            <span className="bold-text"></span>
            After content plan was ready and all the necessary elements were
            determined, I started creating the first Lo-Fi wireframes{' '}
            <span className="bold-text">
              {' '}
              to outline blueprints of the project.{' '}
            </span>
          </span>
        </div>
      </div>
      <div className="container ideate-block3">
        <div className="ideate-block3-row">
          <div className="ideate-block3-row-block space-between-column">
            <span>Main Page</span>
            <div>
              <img
                className="ideate-block3-row-block-img"
                src={ideateSketch1}
                alt=""
              />
            </div>
          </div>
          <div className="ideate-block3-row-block space-between-column">
            <span></span>
            <div className="ideate-block3-row-block-card-wrap space-between-column">
              <div className="ideate-block3-row-block-card-up">
                <div className="ideate-block3-row-block-card-up-white">
                  <span>
                    This step is needed to bring the big picture of ideas to
                    life and to save time on an infinite number of iterations in
                    Figma.
                  </span>
                </div>
              </div>
              <div className="ideate-block3-row-block-card-down">
                <div className="ideate-block3-row-block-card-down-black">
                  <span>
                    I chose to start with a sketches, as it's a good instrument
                    to previously structure all needed ellements correctly.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ideate-block3-row-block space-between-column">
            <span>Product Details</span>
            <div>
              <img
                className="ideate-block3-row-block-img"
                src={ideateSketch2}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="ideate-block3-row">
          <div className="ideate-block3-row-block space-between-column">
            <span>Cart</span>
            <div>
              <img
                className="ideate-block3-row-block-img"
                src={ideateSketch3}
                alt=""
              />
            </div>
          </div>
          <div className="ideate-block3-row-block space-between-column">
            <span>Catalogue</span>
            <div>
              <img
                className="ideate-block3-row-block-img"
                src={ideateSketch4}
                alt=""
              />
            </div>
          </div>
          <div className="ideate-block3-row-block space-between-column">
            <span>Checkout</span>
            <div>
              <img
                className="ideate-block3-row-block-img"
                src={ideateSketch5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container empatize-line"></div>
      <div className="container emphathize-block1-margin40 mb-80">
        <div className="emphathize-block1-left">
          <span>3 / IDEATE</span>
          <h3>Mid-Fi prototype</h3>
        </div>
        <div className="emphathize-block1-right">
          <span>
            <span className="bold-text"></span>
            Once my sketches ready and all my ideas examined and discussed with
            mentors and curators, I'm moving on to the next step - Mid-fidelity
            prototype for user testing.
          </span>
        </div>
      </div>
      <div className="ideate-block2 mb-0">
        <div className="ideate-block2-wrap ideate-block4-img-height">
          <img src={ideateBlock4BG} alt="" />
        </div>
      </div>
      <div className="empatize-block3">
        <div className="container">
          <span>
            I always spend enough time looking for references because looking
            and borrowing ideas or inspiration from the work of other designers
            is normal and right, it helps to know what is on trend and how it
            looks.
          </span>
        </div>
      </div>
      <div className="container">
        <div className="frame-block-title"></div>
        <div className="emphathize-block1-margin40">
          <div className="emphathize-block1-left">
            <span>3 / IDEATE</span>
            <h3>
              Mid-Fi prototype <br /> usability testing
            </h3>
          </div>
          <div className="emphathize-block1-right">
            <span>
              <span className="bold-text">To be sure</span> that my site will be
              convenient to use,{' '}
              <span className="bold-text">
                that the flow is clear and intuitive
              </span>
              , and that the elements are in right place, the next step is to
              conduct Mid-fi wireframe usability testing
            </span>
          </div>
        </div>
        <div className="empatize-block4">
          <div className="empatize-block4-left">
            <button>Full reference list</button>
          </div>
          <div className="empatize-block4-right justify-content-end">
            <span>
              As soon as Mid-Fi wireframes prototypes were done, we've discussed
              my work with mentors and they made{' '}
              <span className="bold-text">
                few remarks regarding navigation menu, page title locations,
                language switcher, and filter markups
              </span>
              . As soon as the iteration updated after mentor's comments was
              approved, I started Mid-Fi prototype usability testing.
              <br />
              <br />
              To make sure that the site will serve as a reliable and functional
              tool for performing all key actions,{' '}
              <span className="bold-text">
                I distributed these 4 tasks to 5 participants aged 25 to 45:
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className='container ideate-block5-wrap mb-40'>
        <img src={ideateBlock5Table} alt="" />
      </div>
      <div className="container ideate-block6-wrap space-between-column mb-80">
        <div>
          Also <span className="bold-text">2/5 of interviewees</span> suggested that since checkout has sections
          "new" and "regular" client, it would be appropriate to also add a
          "register" button there.
        </div>
        <div>
          I solved the concern by adding the checkbox "Save this information for
          the future"
        </div>
        <div>
        <span className="bold-text">1/5 among the participants</span> noticed that it would be more convenient
          for her to use the site if the heart-shaped "add to favorites" button
          on the product card page was larger.
        </div>
        <div>
          I also listened to her feedback and made a separate button more
          massive and added bigger button “Wish it” to the page of the product.
        </div>
      </div>
      <div className="empatize-block3">
        <div className="container">
          <span>
            I always spend enough time looking for references because looking
            and borrowing ideas or inspiration from the work of other designers
            is normal and right, it helps to know what is on trend and how it
            looks.
          </span>
        </div>
      </div>
    </>
  )
}
export default ZernoIdeate
