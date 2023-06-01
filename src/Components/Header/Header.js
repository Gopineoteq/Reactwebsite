import '../Header/Header.css'
import headerImg from '../../assets/backimg.png'
const Header = ({Hero}) => {
  return (
  
      <section className="Hero" style={{backgroundImage:`url(${headerImg})`, backgroundSize:"cover",backgroundPosition:"fixed"}}>
        <h1>{Hero}</h1> 
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, quae.</p>

        </section> 
      
  )
}

export default Header