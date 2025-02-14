import { useEffect, useState } from "react";

const ModeToggle = () => {
    const [mounted,setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted){
        return null
    }
    return ( <>Toggle</> );
}
 
export default ModeToggle;