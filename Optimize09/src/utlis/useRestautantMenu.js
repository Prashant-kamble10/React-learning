import { useEffect, useState } from "react";


const useRestaurantMenu = (resId) =>{
// fetching RestaurantMenu logic here

    // this file is an example of "customHooks"
const [resInfo, setResInfo] = useState(null);


useEffect(()=>{
    fetchMenu()
},[])


const fetchMenu = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId)
        const json = await data.json();
        console.log('MenujsonFromCustomHooks: ', json);
        setResInfo(json.data)
        console.log('resInfo: ', resInfo);
}

    return resInfo;
}

export default useRestaurantMenu;