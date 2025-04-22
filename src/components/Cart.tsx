

const Cart=({outfits,removeItem}:{outfits:any[][];removeItem:(outfitIndex:number,itemIndex:number)=>void})=>{

 console.log("outfits",outfits);
    return(
        <div className="w-64 bg-white p-4 shadow-lg mt-4">
            <h3 className="font-semibold text-xl mb-4">Cart</h3>
            {
                outfits.length===0?(
                    <div>
                    <p>No outfits in the cart.</p>
                    <img className="w-140" src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"alt="empty-cart"/>

                    </div>
                ):
                (
                    outfits.map((outfit,outfitIndex)=>(
                        <div key={outfitIndex}
                        className="flex flex-col items-center  mb-2">
                            {
                                outfit.map((item,itemIndex)=>(
                                    <div className="flex flex-row justify-between items-center mt-3 w-40" key={itemIndex}>
                                    <div className="text-blue-500">{item.label}
                                    </div>
                                    <div>
                                    <button onClick={()=>removeItem(outfitIndex,itemIndex)} className="text-red-500 bg-amber-200 border-amber-50  p-2 text-center rounded w-22 border-2 cursor-pointer">Remove</button>
                                    </div>
                                    </div>
                                ))
                            }
                          
                        </div>
                    ))
                )
            }
           
        </div>


    )
}

export default Cart;