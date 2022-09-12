import Footer from "../../components/footer/Footer"
const Error =() =>{


    return(
     <div class="container-fluid bg-dark">
        <div class="row">
            <div class="col-0 col-md-4">

            </div>
            <div class="col-0 col-md-4">
                <span className="d-flex justify-content-center mt-5">
                <img src="/assets/error.png" alt="imageerror" className="img-fluid "></img>
                </span>
                <h1 class="text-white text-center mt-5">ERROR 404</h1>
                <h3 class="text-white text-center">Oups.. il semblerait que la</h3>
                <h3 class="text-white text-center">page ciblé, n'existe pas...</h3>
                <h3 class="text-white text-center">Vous n'avez rien a faire ici..</h3>
                <h3 class="text-white text-center mb-5">Revenez à l'acceuil...</h3>
                <h3 class="text-white text-center mb-5"> </h3>
                <button type="button" class="btn btn-light w-100  mt-5 mb-5">Retour Acceuil</button>
            </div>
            <div class="col-0 col-md-4">

            </div>
        </div>
        <Footer/>
    </div>

       
    
    )
}
export default Error