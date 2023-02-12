import Loader from '../loader/loader'
import ZernoDefine from './ZernoDefine'
import ZernoEmphathize from './ZernoEmphathize'
import ZernoIdeate from './ZernoIdeate'
import ZernoPrototype from './ZernoPrototype'
import ZernoStart from './ZernoStart'

const ZernoEcomers = () => {
  return (
    <>
      <Loader timeout={2000} />
      <ZernoStart />
      <ZernoEmphathize />
      <ZernoDefine />
      <ZernoIdeate />
      <ZernoPrototype />
    </>
  )
}

export default ZernoEcomers
