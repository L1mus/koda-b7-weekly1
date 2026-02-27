const countingToN = (n)=>{
  if(typeof n !== "number"){
    console.log("input invalid")
  }
  let result = 0
    const interval= setInterval(()=>{
       console.log(result += 1) 
          if(result === n){
            clearInterval(interval)
          } 
    }, 1000)
}


countingToN(6)
