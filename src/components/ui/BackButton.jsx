import { Link } from 'react-router-dom'
import back from '../../assets/images/BackButton.svg' 

const BackButton = ({to}) => {
  return (
    <Link to={to} className='p-1'>
        <img src={back} alt="" className='w-6'/>
    </Link>
  )
}

export default BackButton
