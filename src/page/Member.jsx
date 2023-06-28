import { useState } from "react"
import Anggota from "../komponen/Anggota"
import  "./Member.css"


export default function Member(){
const [mem,setMem] = useState([
        {
          id:1,
          nama:"Yedam",
          posisi:"Lead Vokal",
          image: "https://public.urbanasia.com/images/post/2022/05/07/1651899497-bang-yedam.jpg"
        },
        {
          id:2,
          nama:"Doyoung",
          posisi:"Vokalis",
          image: "https://cdn.idntimes.com/content-images/community/2021/12/fromandroid-b4b774e60eff1b034babc409da459efd.jpg"
        },
        {
          id:3,
          nama:"Hyunsuk",
          posisi:"Rapper",
          image: "https://i.pinimg.com/originals/62/40/43/62404328bf3c82560a63b52d2f884c25.jpg"
        },
        {
          id:4,
          nama:"Jaehyuk",
          posisi:"Vokalis",
          image: "https://image.akurat.co/uploads/gallery/2022/07/big/gal_62db73d85da8c4-37794398-16316073.jpg"
        },
        {
          id:5,
          nama:"Haruto",
          posisi:"Rapper",
          image: "https://asset.kompas.com/crops/2LKKYTUMe_bjAnbdxWF1eMjvDm8=/0x281:1080x1001/750x500/data/photo/2020/07/20/5f15608d97d62.jpg"
        },
        // {
        //   id:6,
        //   nama:"Jihoon",
        //   posisi:"Vokalis",
        //   image: ""
        // },
        {
          id:7,
          nama:"Jeong Woo",
          posisi:"Vokalis",
          image: "https://cdn1-production-images-kly.akamaized.net/7DguPiBKlWjEEO8b5cNHf6VJHeQ=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4174156/original/075657900_1664356918-Screen_Shot_2022-09-28_at_16.21.30.jpg"
        },
        {
          id:8,
          nama:"Hoshi",
          posisi:"Rapper",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Park_Ji-hoon_going_to_a_Show%21_Music_Core_recording_on_November_14%2C_2020.png/640px-Park_Ji-hoon_going_to_a_Show%21_Music_Core_recording_on_November_14%2C_2020.png"
        },
        {
          id:9,
          nama:"Asahi",
          posisi:"Dancer",
          image: "https://assets.hops.id/crop/0x0:0x0/750x500/webp/photo/hops/2021/09/3-44.jpg"
        }
      
])

const [search,setSearch] = useState("")

    return(
    
        <>
        <input type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        <main>

            <div className="foto">
            {mem.filter((m) => m.nama.toLowerCase().toUpperCase().includes(search) ).map((m,i)=>(
               <div key={i}>
               <Anggota  
                {...m}
                />
                </div>
           ))}
           </div>
        </main>  
        </>
    )
}