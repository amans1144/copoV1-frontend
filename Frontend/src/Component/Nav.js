import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Nav.css'
import Logo from '../Assets/bg/revalogo.svg';


const removeToken = (authToken) => {
  localStorage.removeItem("token");
  localStorage.setToken(null);
};

function Navbar() {
    return (
     <>
<nav class="navbar navbar-light ">
  <div>
    <img className=' logo ' src={Logo} alt="reva" />
  </div>

<div className='row '>
  <div className='col-6'>
    <h3 Style=" margin-right:200px"> Reva124@reva.edu.in</h3>
    </div>
    <div className='col-6'>
   
    <div className='wrap'>
       <button 
        className="button mt-2 "
         Style="
         " 
         > <a Style="color:white; text-decoration:none; " href={() => removeToken()}>Logout</a></button>
         </div>
    </div>

</div>
</nav>
     </>
    );
  }
  
  export default Navbar;