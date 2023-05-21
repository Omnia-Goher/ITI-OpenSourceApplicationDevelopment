import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./details.css";

let ArtistDetails = ()=>{
    let {id} = useParams();
    let [ArtistsDetails , setArtistsDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3500/artists/${id}`)
        .then((response)=>{return response.json()})
        .then((data)=>{
            setArtistsDetails(data)
        })
        .catch((err)=>{console.log(err)});
    })

    return(
        <div className="d-flex justify-content-center align-items-center">
            <div className="col-9 p-0" key={ArtistsDetails.id}>
                <div className="row d-flex justify-content-center align-items-center flex-wrap" style={{marginTop:"90px"}}>
                    <div className="col-9 col-md-5 p-0">
                        <img className="rounded-end rounded-5 shadow-lg" src={`../covers/${ArtistsDetails.cover}.jpg`} aria-hidden alt={ArtistsDetails.cover} width="100%"/> 
                    </div>
                    <div className="col-9 col-md-5 p-0 rounded-start rounded-5 p-5 shadow-lg" style={{height:"545px"}}>
                        <div className="mb-4 mt-4">
                            <h6 className="text text-center fs-2 fw-bold mb-4">{ArtistsDetails.name}</h6>
                            <p className="text text-center fs-5" style={{color:"gray"}}>{ArtistsDetails.bio}</p>
                        </div>
                        <div className="d-flex flex-row justify-content-evenly flex-wrap mt-5">
                            {ArtistsDetails.albums && ArtistsDetails.albums.map((album)=>(
                                <div className="col-2">
                                    <img className="img" src={`../albums/${album.cover}.jpg`} aria-hidden alt={album.cover}/>
                                </div>           
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistDetails;