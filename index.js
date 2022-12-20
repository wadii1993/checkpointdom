var classbtsplus = document.querySelectorAll(".plus");
var classbtsminus = document.querySelectorAll(".minus");
var classprice = document.querySelectorAll(".price");
var classunitprice = document.querySelectorAll(".unitPrice");
var classlike = document.querySelectorAll(".like");
var classdelete = document.querySelectorAll(".delete");
var tot = document.getElementById("total");

for( let i=0; i < classbtsplus.length;i++)
{
   classbtsplus[i].addEventListener("click",increase);
   
   
}

for( let i=0; i < classbtsminus.length;i++)
{
    classbtsminus[i].addEventListener("click",decrease);
   
   
}

function sum() {
    var somme = 0;
    for (var i = 0; i < classprice.length; i++) {
      somme = somme + Number(classprice[i].innerHTML);
      
    }
    tot.innerHTML = somme;
  }

function increase(e) 
{
    var cible=e.target;
    div = cible.parentElement;
    p = div.querySelector("p");
    var quantity=Number(p.innerHTML);
    quantity++;
    p.innerHTML = quantity;
    var tablerow= cible.parentElement.parentElement.parentElement;

    var unitPrice= tablerow.querySelector(".unitPrice");
    var flous= tablerow.querySelector(".price");
    var unitPrix = Number(unitPrice.innerHTML);
    
    var prod= quantity*unitPrix;
    flous.innerHTML=prod;
    /***********somme total*********************/
    
   sum();
    
    
}
function decrease(e) 
{
    var cible=e.target;
    div = cible.parentElement;
    p = div.querySelector("p");
    var quantity = Number(p.innerHTML);
    if (quantity > 0)
    {
    quantity--;
    
    }    
    p.innerHTML = quantity;

    var tablerow= cible.parentElement.parentElement.parentElement;

    var unitPrice= tablerow.querySelector(".unitPrice");
    var price= tablerow.querySelector(".price");
    var unitPrix = Number(unitPrice.innerHTML);
    
    var prod= quantity*unitPrix;
    price.innerHTML=prod;
    sum();
}
function liky(e)
{
    var cible= e.target;
    if(cible.style.color !== "red")
    {
        cible.style.color = "red";
    }
    else
    cible.style.color ="gray";
}
function supprimer(e)
{
    var cible=e.target;
    
    var trremov = cible.parentElement.parentElement.parentElement.parentElement;
    trremov.remove();
    console.log(document.querySelectorAll("tr"));
    var price = trremov.querySelector(".price");
    price.innerHTML=0;
    sum();
}

for( let j=0;j< classlike.length;j++)
{
    classlike[j].addEventListener("click",liky);
}
for( let j=0;j< classdelete.length;j++)
{
    classdelete[j].addEventListener("click",supprimer);
}
 