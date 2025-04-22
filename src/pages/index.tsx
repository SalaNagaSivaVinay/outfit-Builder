import {useState,useEffect} from "react";




import { Geist, Geist_Mono } from "next/font/google";
import ClothingItem from "@/components/ClothingItem";
import Canvas from "@/components/Canvas";
import Cart from "@/components/Cart";
import Savedoutfits from "@/components/savedOutfits";



export default function Home() {

  const[outfits,setOutfits]=useState<any[]>([])

  const[addCartOutfits,setAddCartOutfits]=useState<any[][]>([])
  const[savedOutfits,setSavedOutfits]=useState<any[][]>([])

  useEffect(()=>{

    const outfits=JSON.parse(localStorage.getItem("savedOutfits")||"[]")
    console.log("loadded outfits",outfits);
    setSavedOutfits(outfits);

},[])



  const clothingItems=[
    {
      imageSrc:"/images/shirtimage1.png",
      label:"Shirt",
      position:"middle"
    },
    {
      imageSrc:"/images/pantimage1.jpeg",
      label:"Pant",
      position:"bottom"
    },
    {
      imageSrc:"/images/shoesimage1.jpg",
      label:"Shoes",
      position:"veryBottom"
    },
    {
      imageSrc:"/images/capimage1.jpeg",
      label:"Cap",
      position:"top"
    },
    {
      imageSrc:"/images/jeansimage1.jpeg",
      label:"Jeans",
      position:"bottom"
    },
    {
      imageSrc:"/images/tshirtimage1.jpeg",
      label:"T-shirt",
      position:"middle"
    }
  ]

const handleDragStart=(e:React.DragEvent,item:any)=>{
                e.dataTransfer.setData("item",JSON.stringify(item))
}

const handleAddCartOutfit=(newOutfit:any[])=>{
          setOutfits((prev)=>[...prev,newOutfit])

}

const handleRemoveOutfit=(outfitIndex:number,itemIndex:number)=>{
  const updatedOutfits=[...outfits]
  updatedOutfits[outfitIndex]=updatedOutfits[outfitIndex].filter((item:any,indexData:number)=>indexData!==itemIndex)
  
  const cleanedOutfits=updatedOutfits.filter((each)=>each.length>0);
  setOutfits(cleanedOutfits)
}

const handleClearOutfits=()=>{
  localStorage.removeItem("savedOutfits");
  setSavedOutfits([]);
}


const handleSaveToLocal=(items:any[])=>{
  if(items.length===0){
      return
  }
  const existingOutfits=JSON.parse(localStorage.getItem("savedOutfits")||"[]");
  const updatedOutfitsData=[...existingOutfits,items]
  localStorage.setItem("savedOutfits",JSON.stringify(updatedOutfitsData))
  setSavedOutfits(updatedOutfitsData);
  setOutfits([])


}

  return (
   
    <div>
      <h1 className="text-center font-bold m-3 text-amber-800 text-4xl  text-shadow-amber-200 ">Outfit Builder </h1>
      <div className="flex  mt-12 text-center flex-row justify-around">
      <h2 className="font-extralight text-3xl ">Clothing Items</h2>
      <h2 className="font-extralight  mb-6 text-3xl">Canvas</h2>

      </div>
    <div className="flex flex-row justify-center  p-8">
   
      <div className="w-full md:w-1/4 flex  flex-col  items-center  overflow-auto h-140">
    
        {
          clothingItems.map((item,index)=>(
            <ClothingItem 
            key={index} 
            imageSrc={item.imageSrc}
            label={item.label}
            onDragStart={(e)=>handleDragStart(e,item,)}/>
          ))
        }
      </div>

      <div className="w-full md:w-1/2 mb-3 ">
       
        <Canvas onAddCartOutfit={handleAddCartOutfit} onSaveToLocal={handleSaveToLocal}/>
      </div>

    
     
    </div>

<hr/>
<div className="w-full flex flex-col md:flex-row justify-center md:justify-around items-center">
    <div className="md:w-1/4">
        <Cart outfits={outfits} removeItem={handleRemoveOutfit}/>
      </div>

    <div className="md:w-1/4 mt-5 mb-5">
      
      <Savedoutfits  savedOutfits={savedOutfits} onClear={handleClearOutfits}/>
    </div>
</div>


    </div>

   
  );
}
