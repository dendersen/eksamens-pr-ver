/*
sort er en funktion som sortere den array.
sortering bruges indtil flere steder, hver gang man skal rykke rundt i en array efter den er lavet så alting sidder rigtigt i din array (stor til lille eller lignende)
*/

function antalKør(n){
  function t(n){
    if (n == 0){
      return 0
    }
    return n + t(n-1)
  }
  return t(n-1)
}

/**
 * 
 * @param {Array} list 
 */
function sort2(list){
  let l2 = []
  l2[0] = list[0]
  let l1 = list.slice(1,list.length-1)

  function sort(i,array){
    let j = 0
    while (true){
      console.log(j,i)
      if (array[j] > i){
        return j
      }
    }
  }
  
  console.log(l1,l2)
  for (let i = 0; i< l1.length;i++){
    console.log(i)
    if(l2[Math.floor(l2.length/2)]>l1[0]){
      let point = sort(i,l2.slice(Math.floor(l2.length/2),l1.length-1))
      let l3 = l2.splice(0,point+1)
      l3.push(l1[i])
      l3.concat(l2.splice(point+1,l1.length-1))
      l2 = l3
    }else{
      let point = sort(l1[0],l2.slice(0,Math.floor(l2.length/2)))
      let l3 = l2.splice(0,point+1)
      l3.push(l1[i])
      l3.concat(l2.splice(point+1,l1.length-1))
      l2 = l3
    }
  };
  return(l2)
}
console.log(sort2([5,3,4,1]))