import { GiBleedingEye,GiCrossedBones } from "react-icons/gi";


const Header =()=>{



    return(
        <div className="container-fluid bg-light">
            <span className="d-flex justify-content-center">
            <GiBleedingEye className="mt-1 me-2"/>
            <p className="me-5"> Bienvenue -coder-</p>
            <p> se deconnecter</p>
            <GiCrossedBones className="mt-1 ms-2"/>
            </span>
        </div>
    
    )
}

export default Header