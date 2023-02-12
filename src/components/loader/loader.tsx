import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { ReactComponent as Logo } from '../../assets/LOGO.svg'
import { Box } from '@mui/material'
import React from 'react'

interface ChildComponentProps {
  timeout: number;
}

const Loader = (props: ChildComponentProps) => {

  const [open, setOpen] = React.useState(true)
  
  setTimeout(() => {
    setOpen(false)
  }, props.timeout)

  return (
    <Backdrop
      sx={{
        backgroundColor: '#ffffff',
        color: '#fff',
        transitionDuration: 0,
        zIndex: theme => theme.zIndex.drawer + 10
      }}
      open={open}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ m: 1, position: 'relative' }}>
          <Logo width={60} height={60} />
          <CircularProgress
            size={100}
            sx={{
              color: '#000000',
              position: 'absolute',
              top: -20,
              left: -19,
              zIndex: 1
            }}
          />
        </Box>
      </Box>
    </Backdrop>
  )
}

export default Loader