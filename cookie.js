var score = 0;
var prix = 50;
var compteur = 1;
var prixauto = 50;
var depense = 0;
var total;

totale = lireCookie('totalCookie');
document.getElementById("total").innerHTML="Nombre total de cookies gagnés : "+totale;

function autoclick(){
	if(score >=prixauto){
		setInterval(javabouton, 2000);
		document.getElementById("total").innerHTML="Nombre total de cookies gagnés : "+total;
		depense=depense+prixauto;
		score=score-prixauto;
		document.getElementById("resultat").innerHTML=score;
		prixauto=prixauto*2;
		document.getElementById("clickauto").innerHTML="Click automatique,prix :"+prixauto;
	}
}

function createCookie(name,value,days) {
	document.cookie = 'totalCookie='+total+'; expires=Mon, 26 Dec 2016 00:00:00 UTC; path=~/Document/';
}

function javabouton(){	
	score=score+compteur;
	total = parseInt(totale)+score+depense;
	console.log(depense);
	console.log(total);
	document.getElementById("resultat").innerHTML=score;
	document.getElementById("total").innerHTML="Nombre total de cookies gagnés : "+total;
	createCookie();
}

function incrementer(){
	if(score>=prix){
	compteur=compteur+1;
	depense=depense+prix;
	document.getElementById("total").innerHTML="Nombre total de cookies gagnés : "+total;
	score=score-prix;
	prix = prix*2;
	console.log(compteur);
		document.getElementById("multiplicateur").innerHTML="Multiplicateur actuel : X"+compteur+". Prix du prochain achat : "+prix;
		document.getElementById("resultat").innerHTML=score;
	}

}

function lireCookie(name){
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return 0;
}
