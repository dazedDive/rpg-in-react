import imageHome from '../../images/homeimage.png'
import Footer from '../../components/footer/Footer'
const Home =()=>{


    return(
        <>
        <div className="row">
            <div className="col-0 col-md-4">

            </div>
            <div className="col-0 col-md-4">
            <img src={imageHome} class="img-fluid" alt="dragon logo" width="80%"/>
              <p class="text-white">Alpha 0.01</p>
              <form>
                  <div class="mb-3 mx-2">
                    <label for="mail" class="form-label text-light">Email address</label>
                    <input type="email" class="form-control" id="mail" aria-describedby="emailHelp"/>
                    
                  </div>
                  <div class="mb-3 mx-2">
                    <label for="pass" class="form-label text-light ">Password</label>
                    <input type="password" class="form-control" id="pass"/>
                  </div>
                  <div class="span d-flex justify-content-start">
                      <button type="submit" id="connexion" class="btn btn-primary mt-1 w-100 mx-2">connexion</button>
                      
                  </div>
                  <div class="span d-flex justify-content-end mt-5 mb-3">
                  
                  <button type="submit" class="btn-sm  w-100 mx-2" id="creatAccount"> Pas de compte? inscrivez vous! ici</button>
                  </div>
              </form>
          </div>
            </div>
            <div className="col-0 col-md-4">
                
            </div>
        <div>
        <Footer/>
        
        </div>
        </>
    )
}
export default Home