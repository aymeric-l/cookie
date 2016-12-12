var bouton;
var affichage;
var multiplicateur;
var score = 0;
var prix = 50;
var compteur = 1;

function autoclick(){
	if(score >=50){
		setInterval(javabouton, 2000);
	}
}

function javabouton(){
	score=score+compteur;
	console.log(score);
	document.getElementById("resultat").innerHTML=score;
}

function incrementer(){
	if(score>=prix){
	compteur=compteur+1;
	score=score-prix;
	prix = prix*2;
	console.log(compteur);
		document.getElementById("multiplicateur").innerHTML="Multiplicateur X"+compteur+". Prix du prochain achat : "+prix;
		document.getElementById("resultat").innerHTML=score;
	}

}
