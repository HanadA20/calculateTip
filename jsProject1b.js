        
//external javascript sheet//

//Calculator Function//
        function calculateTip() {
            
            console.log("Calculating tip")
            // Bill Amount //
            var billAmount = parseFloat(document.getElementById("amountBox").value);
            // Tip Percentage //
            var tipPercent = parseFloat(document.getElementById("tipBox").value);
            // Tip Amount //
            var tipAmount = (billAmount * (tipPercent / 100).toFixed(2));
            // Bill + Tip //
            var total = (billAmount + parseFloat(tipAmount)).toFixed(2);
         
            document.getElementById("output").innerHTML = "Your Tip Amount is $" + tipAmount + "<br><br> Total + Tip = $" + total;
            
        }
        // Function for Button //
        function init() {
    
            console.log("init")
            
            var button = document.getElementById("tipButton");
    
            button.addEventListener("click", event =>{calculateTip()});
        }
            window.addEventListener("load", init);