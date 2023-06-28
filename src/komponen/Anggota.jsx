import "./Anggota.css"


export default function Anggota({image,nama,posisi}){
    return(
        <div className="cont">
        <div className="card">
            <img src={image} alt={nama} />
            <div>{nama}</div>
            <div>{posisi}</div>
        </div>

        </div>
    )
}