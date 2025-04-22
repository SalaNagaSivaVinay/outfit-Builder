
import { useEffect,useState } from "react";


const Savedoutfits=({savedOutfits,onClear}:
    {
       savedOutfits:any[][],
       onClear:()=>void
    })=>{



    
    return(

        <div  className="w-64 flex flex-col justify-center bg-white p-4 shadow-lg mt-4">
              <h3 className="font-semibold text-xl mb-4">Saved Outfits</h3>

            {savedOutfits.length===0?(
                <div>
                <p className="mb-4">No saved outfits</p>
                <img className="w-140" src="https://cdn-icons-png.flaticon.com/512/1894/1894649.png" alt="saved-outfit-empty"/>
                </div>
            ):
            
                savedOutfits.map((outfit,index)=>
                <div className="mb-3" key={index}>
                    {
                        outfit.map((item,i:number)=>(
                            <div key={i}>
                                <img 
                                src={item.imageSrc}
                                alt={item.label}
                                className="w-16 h-16 object-contain"
                                />

                            </div>
                        ))
                    }
                </div>

              
                
            
            )
            }



        {
          savedOutfits.length!==0&&

        <div className="flex justify-start">
            <button onClick={onClear}
            className="bg-gray-700 cursor-pointer text-white px-4 py-2 rounded"
                >Clear saved outfits</button>
        </div>

        }



        </div>
    )
}

export default Savedoutfits;