const Inscription = () =>{


    return (
        
        
    <div className="container-fluid bg-dark">
        <div className="row">
            <div className="col-0 col-md-4">

            </div>
            <div className="col-0 col-md-4">
                <h2 className="text-center text-white mt-5"></h2>
                <h2 className="text-center text-white mt-5">Formulaire d'inscription :</h2>
                
                <form className="bg-dark">
                    <div className="mb-3 mx-2">
                        <label for="nomInput" className="form-label text-light">nom : </label>
                        <input type="email" className="form-control" id="nomInput" aria-describedby="emailHelp"/>
                        
                      </div>
                      <div className="mb-3 mx-2">
                        <label for="prenomInput" className="form-label text-light">prenom : </label>
                        <input type="email" className="form-control" id="prenomInput" aria-describedby="emailHelp"/>
                        
                      </div>
                    <div className="mb-3 mx-2">
                      <label for="nickInput" className="form-label text-light">Choisissez votre Pseudo : </label>
                      <input type="email" className="form-control" id="nickInput" aria-describedby="emailHelp"/>
                      
                    </div>
                    <div className="mb-3 mx-2">
                        <label for="mailInput" className="form-label text-light">Email address : </label>
                        <input type="email" className="form-control" id="mailInput" aria-describedby="emailHelp"/>
                        
                      </div>
                    <div className="mb-3 mx-2">
                      <label for="passInput" className="form-label text-light ">Password</label>
                      <input type="password" className="form-control" id="passInput"/>
                    </div>
                    <div className="mb-3 mx-2">
                        <label for="passControl" className="form-label text-light ">Retapez votre Password</label>
                        <input type="password" className="form-control" id="passControl"/>
                      </div>
                    <div className="span d-flex justify-content-start">
                        <button type="submit" className="btn btn-primary mt-1 w-100 mt-2 mb-5"> créer mon compte ! </button>
                        
                    </div>
                    
                </form>
            </div>
            <div className="col-0 col-md-4">

            </div>
        </div>
    </div>
    
    )
}

export default Inscription;