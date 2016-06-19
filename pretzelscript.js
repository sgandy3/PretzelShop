
function calculateTotal()
     {
         document.getElementById("receipt").style.visibility = "visible";
         document.getElementById("paper").style.visibility = "visible";
         document.getElementById("speech").style.visibility = "hidden";
         document.getElementById("uispace").style.visibility = "hidden";
         document.getElementById("total").style.visibility = "hidden";
         document.getElementById("sale").style.visibility = "visible";
         
         var pretzel = 3.99;
         var userInput = document.getElementById("quantity");
         var userSelection = userInput.elements["pretzelNum"].value; //get value of object
         
         var totalSale = pretzel * userSelection;
         var tax = .08 * totalSale;
		 var salePlusTax = tax + totalSale;
         var total = salePlusTax.toFixed(2);
         
         
         document.getElementById("receipt").innerHTML=userSelection + " Pretzels @ $"+ pretzel +" = $" + totalSale.toFixed(2);
         document.getElementById("receipt").innerHTML+="<br><br>Tax: &nbsp;$" + tax.toFixed(2);
   
         
         if (userSelection < 6)
		  {
			
			document.getElementById("receipt").innerHTML+="<br>Total: $" + total;
		  }
		 else
		  {
			var discount = totalSale * .10;
			totalSale = totalSale - discount;
           
		
			
			document.getElementById("receipt").innerHTML+="<br>Total: $" + salePlusTax.toFixed(2);
			document.getElementById("receipt").innerHTML+="<br><br>You saved $" + discount.toFixed(2) + "!";
		  }
          
     }
     
     function resetFunction() {
           document.getElementById("receipt").style.visibility = "hidden";
           document.getElementById("paper").style.visibility = "hidden";
           document.getElementById("speech").style.visibility = "visible";
           document.getElementById("uispace").style.visibility = "visible";
         document.getElementById("total").style.visibility = "visible";
          document.getElementById("sale").style.visibility = "hidden";
        
     }
     
     /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


    
       