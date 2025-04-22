
import {useState} from "react";

const postionMap:Record<string,{top:string,left:string}>={
    top: { top: "10px", left: "120px" },
    middle: { top: "100px", left: "100px" },
    bottom: { top: "220px", left: "100px" },
    veryBottom: { top: "350px", left: "100px" }
}
const Canvas=({onAddCartOutfit,onSaveToLocal}:{onAddCartOutfit:(items:any[])=>void;
    onSaveToLocal:(items:any[])=>void
 })=>{

    const [itemOnCanvas,setItemsOnCanvas]=useState<any[]>([])

    const handleDrop=(e:React.DragEvent)=>{
        e.preventDefault()
        const data=e.dataTransfer.getData("item")
        if(!data){
            return;
        }


        const item=JSON.parse(e.dataTransfer.getData("item"))

        const position=postionMap[item.position]||{top:"0px",left:"0px"}
        setItemsOnCanvas([...itemOnCanvas,{...item,...position}])

    }
    const handleDragOver=(e:React.DragEvent)=>{
        e.preventDefault();
    }

    const handleAddToCart=()=>{
        if(itemOnCanvas.length===0){
            return
        }
        onAddCartOutfit(itemOnCanvas)
        setItemsOnCanvas([])
    }

    const handleSaveToLocal=()=>{
        if(itemOnCanvas.length===0){
            return
        }
        onSaveToLocal(itemOnCanvas)
        setItemsOnCanvas([])
    }




    return(
        <div className="flex flex-col items-center">
        <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="relative w-[300px] h-[500px]  w-full h-200 flex-wrap bg-gray-200 relative border-2 border-dashed border-gray-400"
        >

          
        
        {
            itemOnCanvas.map((item,index)=>(
                <img draggable key={index}
                src={item.imageSrc}
                alt={item.label}
                className="absolute cursor-move"
                style={{
                    top: item.top,
                   
                    left:"50%",
                    transform: "translateX(-50%)",
                    height:120,
                    width:130,
                    padding:14,
                    margin:5
                  
                }}
                />
                
            ))
        }

 

        </div>

        <div className="w-full flex flex-col md:flex-row mb-1 justify-center md:mb-5 mt-4 gap-4">
            <button className="px-2 mt-13 md:mt-0 w-40 md:w-20 cursor-pointer py-2 bg-red-500 text-white rounded" onClick={()=>setItemsOnCanvas([])}>Reset</button>
            &nbsp;&nbsp;
            <button className="px-2 w-40 cursor-pointer py-2 bg-pink-500 text-white rounded" onClick={handleSaveToLocal}>Save Outfit</button>
       
            &nbsp;&nbsp;
            <button className="px-2 w-40 cursor-pointer py-2 bg-pink-500 text-white rounded" onClick={handleAddToCart}>Add to Cart  <span>🛒</span> </button>
        </div>



        </div>

    )
}

export default Canvas;