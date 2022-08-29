// javascrtipt funktioner
// en funktion kan modtage parametre for som vil virke som lokale variabler for funktionen, de tillader dig at have en effekt på funktionen hver gang den kører, det betyder også at du ikke behøver globale variabler for at kører funktioner
// en funktion kan også returnere et svar dette er dog kun i form af en variabel, man kan ikke svare med to variabler men man kan godt returnere en array for at give flere værdier
// på denne måde behøver man ikke at skrive den samme kode igen og igen for at kune bruge forskellige tal i koden men istedet lave en funktion der tager imod de tal og returnere et tredje


// koden laver først et canvas med no stroke og en baggrund på 51
// der efter udfører den funktionen drawTarget() 3 gange
// drawTarget() tager en x og y position som er centrum af møsteret
// der efter modtages der efter tages en radius på mønsteret altså det største mønstere kan fylde
// og derefter antalet af cirkler der skal tegnes
// 
// hvordan virker funktionen
// først udregnes grayvalues som indeholder farve forskellen melle cirklerne
// så findes størelses forkellen mellem cirklerne
// der laves et loop som kører det samme antal gange som der skal være cirkler
// i er antalet af cirkler der er blevet tegnet af det loop
// så såttes tenge farven til grayvalues gange i, hvilket betyder at cirklerne skifter farve fra sort til lys grå (255-grayvalues)
// en cirkel tenges på med centrum i den givne position, med en radius på den givene radius - i gange størelses forskellen, dette giver en linær ændring i størelsen mellem cirklerne 
// i stiger med 1 og loopet gentages hvis i er mindre end det ønskede antal cirkler

function setup() {
  createCanvas(720, 400);
  background(51);
  noStroke();
  noLoop();
}
function draw() {
  drawTarget(width * 0.25, height * 0.4, 200, 4);
  drawTarget(width * 0.5, height * 0.5, 300, 10);
  drawTarget(width * 0.75, height * 0.3, 120, 6);
}
function drawTarget(xloc, yloc, size, num) {
  const grayvalues = 255 / num;
  const steps = size / num;
  for (let i = 0; i < num; i++) {
    fill(i * grayvalues);
    ellipse(xloc, yloc, size - i * steps, size - i * steps);
  }
}

function lige_ulige(lige,n){
  if (lige == null)
    lige = false
  if (n == null)
    n = 10
  
  l = []
  for (let i = 0; i <= n; i++){
    a = i % 2 == 0
    
    if (a && lige){
      l[l.length] = i
    } else 
    if(!a && !lige){
      l[l.length] = i
    }
  }
  console.log(l)
}

function randoCirkel(n){
  for (let i = 0; i < n; i++){
    r = random(0, 300)
    ellipse(random(0+r,width-r), random(0+r,height-r), r)
  }
}