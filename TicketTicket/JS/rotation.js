document.write('<div id="banniere">'+banniere()+'</div>');
function banniere(){
   var nbBanniere = 3;
   /*On choisis de manière aléatoire le numéro de la bannière à afficher*/
   var numero = Math.floor(Math.random()*nbBanniere);
    
   switch(numero){
      case 0:
         var contenu = '<div id="ban1">Banniere numero 1<div>';
         break;
      case 1:
         var contenu = '<div id="ban2"><span>Banniere numero 2<div>';
         break;
      case 2:
         var contenu = '<div id="ban3"><span>Banniere numero 3<div>';
         break;
   }
   return contenu+'<br/><a href="http://www.tutorielsenfolie.com">site de turoriel</a>';
}

/*Toute les 3 secondes on fait tourner la bannière*/
var timer=window.setInterval("rotation()", 3000);
function rotation(){
    /*On change le contenu de la bannière*/
    document.getElementById('banniere').innerHTML = banniere();
}