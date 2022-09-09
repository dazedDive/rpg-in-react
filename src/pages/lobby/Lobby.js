import imageHome from '../../images/homeimage.png'
import Header from '../../components/header/Header'
const Lobby = () =>{

    return(
        <>
        <Header/>
        <div className="row">
            <div className="col-0 col-md-4">

            </div>
            <div className="col-0 col-md-4">
        <div class="d-flex justify-content-center">
              <img src={imageHome} alt="lobby" class="w-50"/>
        </div>  
             <h1 class="text-center text-white mt-3">TABLEAU DE BORD</h1>   
             <h3 class="text-primary mt-2">Bienvenue :</h3> 
             <h5 class="text-warning">Votre rank actuel est : </h5>
             <h5 class="text-warning">Votre meilleur score est :</h5>
             <h5 class="text-warning">Nombre de parties joués</h5>
             <h5 class="text-warning mb-4">Nombre se secrets trouvés : </h5>
             <div class ="d-flex justify-content-center">
             
             </div>
             <button type="button" class="btn btn-primary w-100 mt-3">Nouvelle Partie Classique</button>   
             <button type="button" class="btn btn-primary w-100 mt-3">Nouvelle Partie Survivor</button>
             <button type="button" class="btn btn-primary w-100 mt-3">Deconnexion</button>
             </div>
             <div className="col-0 col-md-4">
                
            </div>
        </div>
        </>
            
    )
}

export default Lobby