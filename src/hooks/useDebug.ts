import { useEffect } from "react"

export const useDebug = () => {
useEffect(() => {
  console.log("Mount")

  return () => {
    console.log("Unmount")
  }
}, [useDebug])

}
