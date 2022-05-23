import React,{useState} from "react"
import {Link} from "react-router-dom"
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
function Navbar() {
	// button state
	const [navbarOpen, setNavbarOpen] = useState(false)

	// Nav link
	const links = [
	  {
	    id: 1,
	    path: "/",
	    text: "Home",
	  },
	  {
	    id: 2,
	    path: "/about",
	    text: "About",
	  },
	]

	// hambuger btn onclick function
	function handleToggle(){
		setNavbarOpen(!navbarOpen)
	}
	// setting of onclick of button state to false
	const closeMenu = () => {
	  setNavbarOpen(false)
	}
	return (
		<nav className="navBar" >
			 <button onClick={handleToggle}>
			 	 {navbarOpen ? (
				    <MdClose style={{ color: "#fff", width: "30px", height: "30px", background:"darkcyan",border:"none" }} />
				  ) : (
				    <FiMenu style={{ color: "#7b7b7b", width: "30px", height: "30px", background:"white", border:"none" }} />
				  )}
			 </button>
			<ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
		      	{links.map(link => {
			        return (
			        	<li key={link.id}>
			        		<Link 
				        		to={link.path} 
				        		className="active-link"
				        		onClick={() => closeMenu()}
			        		>
			        			{link.text}
			        		</Link>
			        	</li>
			        )
		      	})}
		    </ul>
		</nav>
	)
}
export default Navbar