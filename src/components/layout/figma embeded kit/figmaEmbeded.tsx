import Embed from 'react-embed';

const FigmaEmbeded = () => {
  const figmaUrl = 'https://www.figma.com/proto/0PEGX2l41ctTM1QtATPJ9c/HOME-WORKS-(1%2C-2)?page-id=1253%3A2&node-id=3108%3A4167&viewport=20%2C807%2C0.02&scaling=scale-down&starting-point-node-id=3108%3A4167'
  return (
    <Embed url={figmaUrl} />
  )
}

export default FigmaEmbeded
