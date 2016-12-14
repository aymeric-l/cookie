var score = 0;
var prix = 50;
var compteur = 1;
var prixauto = 50;
var depense = 0;
var total;
function autoclick(){
	if(score >=prixauto){
		setInterval(javabouton, 2000);
		document.getElementById("total").innerHTML=total;
		score=score-prixauto;
		prixauto=prixauto*2;
		document.getElementById("clickauto").innerHTML="Click automatique,prix :"+prixauto;
	}
}



function javabouton(){	
	score=score+compteur;
	total = score+depense;
	console.log(depense);
	console.log(total);
	document.getElementById("resultat").innerHTML=score;
	document.getElementById("total").innerHTML="Nombre total de cookies gagnés : "+total;
}

function incrementer(){
	if(score>=prix){
	compteur=compteur+1;
	depense=depense+prix;
	document.getElementById("total").innerHTML=total;
	score=score-prix;
	prix = prix*2;
	console.log(compteur);
		document.getElementById("multiplicateur").innerHTML="Multiplicateur actuel : X"+compteur+". Prix du prochain achat : "+prix;
		document.getElementById("resultat").innerHTML=score;
	}

}
