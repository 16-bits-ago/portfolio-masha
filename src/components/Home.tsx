import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { ReactComponent as ReactLogo } from '../assets/mashaLogo.svg'
import { ReactComponent as ArrowDown } from '../assets/arrowDown.svg'
import { ReactComponent as ZernoFrame } from '../assets/zernoFrame.svg'
import { ImageList, ImageListItem } from '@mui/material'
import { itemData } from '../data/imageHomeData'

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

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
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
      <ImageList
      sx={{ width: '100%'}}
      variant="quilted"
      cols={4}
      rowHeight={200}
      style={{gap: 0}}
    >
      {itemData.map((item) => (
        <ImageListItem className='card-border' key={item.title} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            
          />
        </ImageListItem>
      ))}
    </ImageList>
    <div className='container'>
      <div className='footer'>
        <div className='footer-left'>
          <ReactLogo style={{paddingRight: 150}}/>
          <span className="span-orange-background">MENU</span>
        </div>
        <div>
        <span className="span-orange-background">SOCIAL</span>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Home
