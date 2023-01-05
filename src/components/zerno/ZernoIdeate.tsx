import { ReactComponent as CircleTitle } from '../../assets/circleTitle.svg'
import ideateBlock2BG from '../../assets/ideateBlock2BG.png'

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
            , their gains and motivations, as well as <span className="bold-text"> on my client's
            requirements</span>.
          </span>
        </div>
      </div>
      <div className="container empatize-block7">
        <div className="empatize-block7-card-wrap">
          <div className="empatize-block7-card">
            <div className="empatize-block7-card-content-title m-none">
              <span className="bold-text">
                Main Page
              </span>
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
          <div className="empatize-block7-card">
            <div className="empatize-block7-card-content-title m-none">
              <span className="bold-text">
                Catalogue
              </span>
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
          <div className="empatize-block7-card">
            <div className="empatize-block7-card-content-title m-none">
              <span className="bold-text">
                Checkout
              </span>
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
          <div className="empatize-block7-card">
            <div className="empatize-block7-card-content-title m-none">
              <span className="bold-text">
                Product Details
              </span>
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
          <div className="empatize-block7-card">
            <div className="empatize-block7-card-content-title m-none h-30">
              <span className="bold-text">
                Cart
              </span>
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
    </>
  )
}
export default ZernoIdeate
