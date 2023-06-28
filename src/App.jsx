import { Outlet } from "react-router-dom"
import Header from "./komponen/Header"




// PELATIHAN GABUNGAN

// includes=>mengembalikan arraya boolean
// let member="Yedam"
// member.includes("a");

// const harga = 25000000
// harga.toLocaleString()
// id->Kode bahasa
// ID->Kode Negara
// harga.toLocaleString("id-ID")

// const tanggal = new Date("2023-01-01T00:09")
// tanggal
// tanggal.toLocaleString()
// tanggal.toLocaleString("id",{
        // day: "numeric",
        // weekday:"long"})
function App () {
  return (
    <>
    <Header/>
    <Outlet/>  
    </>  

  )
}

export default App