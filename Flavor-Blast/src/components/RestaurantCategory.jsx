import { ItemList } from "./ItemList";

export const RestaurantCategory=({data,showItems,setshowIndex})=>{

    const handleClick=()=>{
        setshowIndex();
    }
    return (
        <div>
            <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4">
                <div
                className="flex justify-between cursor-pointer"
                onClick={handleClick}>

                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>

                    <span>
                    ⬇️
                    </span>

                </div>
                {showItems && <ItemList items={data.itemCards}></ItemList>}
            </div>
        </div>
    )
};