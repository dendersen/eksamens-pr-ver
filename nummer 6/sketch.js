//i javascript er en error ikke et specifickt class men istedet et kald af throw som lukker alle funktioner indtil den rammer en try{}catch() som tager imod den og håndtere den, den kan være en hvilken som helst type, i tilfælde af et der ikke rammes en throw så køres finally{}

function f1(a,b,c){
  return Math.sqrt((a+1)/(b-1)-c)
}

function f2(d,e){
  for (let a = d; a <= e; a++){
    for (let b = d; a <= e; b++){
      for (let c = d; a <= e; c++){
        try{
          f1(a,b,c)
        }catch{
          console.log("that didn't work, failed at: " + a + " " + b + " " + c)
          console.error(err)
        }
      }
    }
  }
  console.log("no error")
}