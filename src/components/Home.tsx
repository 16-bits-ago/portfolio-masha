import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { ReactComponent as ReactLogo } from '../assets/mashaLogo.svg'
import { ReactComponent as ArrowDown } from '../assets/arrowDown.svg'
import zernoFrame from '../assets/zernoHighRes.png'
import projectorFrame from '../assets/projectorHighRes.png'
import { NavLink } from 'react-router-dom'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const Home = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <React.Fragment>
      <div className="container">
        <h1>
          Hi! <span className="span-orange">I'm Mariia,</span>
        </h1>
        <div className="home-intro-block">
          <ReactLogo className="home-intro-logo" />
          <p>
            UX/UI designer with a background in Advertising. <br />
            <span className="span-orange-background">I love research,</span>
            &nbsp;improve&nbsp;
            <span className="span-orange-background">and make a beautiful</span>
            &nbsp;things.
            <br />
            Let's collaborate and make&nbsp;
            <span className="span-orange-background">awesome works</span>
            &nbsp;together!
          </p>
        </div>
        <div className="home-intro-block-footer">
          <span>Linkedin</span>
          <div>
            <ArrowDown onClick={handleOpen} className="arrow-img" />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </div>
          <span>Cyprus. Limassol</span>
        </div>
      </div>
      <div className="home-card-block">
        <div className="home-cards">
          <div className="card-img-border">
            <img className="card-img-size" src={zernoFrame} alt="" />
          </div>
        </div>
        
        <NavLink to="/zernoEcomers#start" className="home-cards-text ">
          <div className="card-content-text ">
            <div className="card-content-text-block ">
              <h1>E-Commerce</h1>
              <div className="card-content-tag-block">
                <span className="card-content-tag">UX research</span>
                <span className="card-content-tag2">Redesign</span>
                <span className="card-content-tag3">User Interface</span>
              </div>
              <p>
                Scrutiny careful research, deep analysis and creating beautiful
                minimalistic website for an online store of Ukrainian clothes.
              </p>
              <span className="tap-button-block">TAP TO EXPLORE</span>
            </div>
          </div>
        </NavLink>
      </div>

      <div className="home-card-block">
        <NavLink to="/projectorLayout#start" className="home-cards-text">
          <div className="card-content-text">
            <div className="card-content-text-block">
              <h1>Landing Page</h1>
              <div className="card-content-tag-block">
                <span className="card-content-tag">User Interface</span>
                <span className="card-content-tag2">Stylish</span>
                <span className="card-content-tag3">User Experience</span>
              </div>
              <p>
                Crafting redesign of page of faculty for an online university
                with its own taste and unique style.
              </p>
              <span className="tap-button-block">TAP TO EXPLORE</span>
            </div>
          </div>
        </NavLink>
        <div className="home-cards">
          <div className="card-img-border">
            <img className="card-img-size" src={projectorFrame} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
