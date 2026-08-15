// React re-render pe function dubara create hota hai (new reference)

import { useCallback } from "react"


// isko avoid karne ke liye useCallback use karte hain
// ye function ko same rakhta hai jab tak dependencies change na ho


// useMemo value(result) ko same rakhta hai jab tak dependencies change na ho
// useCallback function ko same rakhta hai jab tak dependencies change na ho 

const handleclick=useCallback(()=>{
   console.log("button clicked");
},[]);