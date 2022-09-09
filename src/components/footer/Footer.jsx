import { BsGithub } from "react-icons/bs";
import { ImLinkedin,ImFacebook, ImMail2} from "react-icons/im";



const Footer = ()=>{

    return(
    <>
    <div class="container-fluid bg-info pt-2">
            <div class="d-flex justify-content-end">
                <p className="text-white mt-1 me-5">Mentions Légales</p>
                 <BsGithub className="text-white fs-2 me-3"/>
                 <ImLinkedin className="text-white fs-2 me-3"/>
                 <ImFacebook className="text-white fs-2 me-3"/>
                 <ImMail2 className="text-white fs-2 me-5"/>

            </div>
        </div>
    </>
    )
}

export default Footer