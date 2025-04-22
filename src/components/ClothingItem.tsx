



const ClothingItem=({
                imageSrc,
                label,
                onDragStart
                }:{
                imageSrc:string,
                label:string,
                onDragStart:(e:React.DragEvent)=>void})=>{
            
                    return (
                       
                            <div draggable onDragStart={onDragStart}
                            className="p-4 text-center flex flex-col items-center justify-center   bg-white rounded-lg shadow-md cursor-pointer w-40 h-52 m-2">
                             <div>
                            <img src={imageSrc} alt={label}
                            className="w-24  h-24 object-contain mb-2"/>
                            </div>

                            <div className=" text-sm mt-1">{label}</div>

                            </div>
                       
                         )
                }

export default ClothingItem;