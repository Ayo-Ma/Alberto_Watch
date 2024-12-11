import '../Css/Page404.css'
import { LuLoader } from 'react-icons/lu'

const Page404 = () => {
  return (
    <div className='page404'>
      <h1> <span className='highlight'>Error 404</span> : Page Not Found</h1>
      <LuLoader className='loader'/>
    </div>
  )
}

export default Page404
