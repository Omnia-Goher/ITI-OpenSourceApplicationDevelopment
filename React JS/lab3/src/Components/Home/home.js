import { useEffect, useState } from "react";
import Artist from "../Artist/artist";

let ArtistsList = () =>{
    let [ArtistsList , setArtistsList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3500/artists")
        .then((response)=>{return response.json()})
        .then((data)=>{
            setArtistsList(data)
        })
        .catch((err)=>{console.log(err)});
    })
    let RenderArtists = ()=>{
        return ArtistsList.map((artist)=>{
            return (
                <div className="col-4 col-md-3">
                    <Artist Artist={artist} key={artist.id}/>
                </div>
                )
            })
    }
    return(
        <div className="col-12 d-flex justify-content-evenly align-items-center flex-wrap" style={{height:"90vh",padding:"0 50px 0 100px"}}>
            {RenderArtists()}
        </div>
    )
}
export default ArtistsList;