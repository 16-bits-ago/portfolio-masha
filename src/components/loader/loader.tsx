import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { ReactComponent as Logo } from '../../assets/LOGO.svg'
import { Box } from '@mui/material'

export default function Loader() {
  return (
    <Backdrop
      sx={{
        backgroundColor: 'grey',
        color: '#fff',
        zIndex: theme => theme.zIndex.drawer + 10
      }}
      open={true}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ m: 1, position: 'relative' }}>
          <Logo width={40} height={40} />

          <CircularProgress
            size={68}
            sx={{
              color: 'inherit',
              position: 'absolute',
              top: -12,
              left: -12,
              zIndex: 1
            }}
          />
        </Box>
      </Box>
    </Backdrop>
  )
}
