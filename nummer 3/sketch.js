/*
a) 
rekursion er når du bruger din callstack til at lave et loop, istedet for et for eller while loop. man har en funktion der kalder sig selv eller som kalder en funktion som kalder den originale funktion. på denne måde kan man lave loopet med skiftende parametre for eksempel hvis man skal regne noget som kræver du regner stykekt med en tidligere version af formlen
tag for eksempel et af minne tidligere stykker kode
https://github.com/dendersen/FIBENACI
som kan ses i koden under
her starter man med at gemme de første fibonacci tal i sequencen (1 og 0)
her kigger den på formlen og ser om den har det tal den skal regne fra fibonaci sequencen hvis den ikke har opsæter den en formel der heder fib(n-1)+fib(n-2) = fib (n)
udregnede fibonaci tal gemmes så så de ikke skal regnes igen

b)
at opdele et problem i flere små problemere, ofte løses alle problemerne med en eller 2 funktioner så de kan blive kaldt hvor de skal bruges
rekursive funktioner løser problemet og genbruger deres løsning så man ikke skal skrive kode for hver scenarie men istedet tager sit output og bruger det som et nyt input

*/

fib = []
parseInt(fib [0] = 0+0)
parseInt(fib [1] = 1+0)

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

async function calc(){
  try{
    if(fib.length<=90){//close to accurate up to 80, then looses accuracy until 101 where it stops calculating
      fib [fib.length] = parseInt(parseInt(fib[fib.length-1]) + parseInt(fib[fib.length-2]))
      console.log(fib.length-1, fib[fib.length-1])
      wait (1)
      calc()
      return(fib[fib.length-1])
    }
    console.log(fib.length + " numbers of fibonaci sequence calculated")
    console.log("scroll up to see them numbered")
    console.log(fib)
}catch(err){
    console.log(fib.length + " numbers of fibonaci sequence calculated")
    console.log("scroll up to see them numbered")
    console.log(fib)
  }
}



/**
 * 
 * @param {Array} a
 * @returns {number}
 */
eval(r=()=>(console.log("hello") + r()) + r())