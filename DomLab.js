// const button = document.getElementById('add');

        
// function updateTotal(){
//     console.log("total");
// }

button.addEventListener('click', updateTotal);
let total = 0;
                // var a = document.getElementById("button").click(2).value;
                // var b = document.getElementById("button1").click(3).value;
                // var c = document.getElementById("button2").click(4).value;
                // var d = document.getElementById("button3").click(6).value;

                // var total = a + b + c + d;

            // const cola = document.getElementById('2.00');
            // const peanut = document.getElementById('3.00');
            // const chocolate = document.getElementById('4.00');
            // const gummies = document.getElementById('6.00');

                    function calculatePrice(amount) {
                        total+=amount;
                        total.innerHTML= `${total}`;

                    // const total = 
                    // document.getElementById("cola");
                    // document.getElementById("peanuts");
                    // document.getElementById("chocolate");
                    // document.getElementById("gummies");
                    cola.addEventListenter("click", (event) => {
                    total = total +  2;
                    total.innerText = "$" + total + ".00";
                    });

                    peanuts.addEventListenter("click", (event) => {
                    total = total +  3;
                    total.innerText = "$" + total + ".00";
                    });

                    chocolate.addEventListenter("click", (event) => {
                    total = total +  4;
                    total.innerText = "$" + total + ".00";
                    });

                    gummies.addEventListenter("click", (event) => {
                    total = total +  6;
                    total.innerText = "$" + total + ".00";
                    });

                }

                    //     button.addEventListener("onclick", () => {
                    //     var newValue = parseInt(document.getElementById('button').value
                    // });

                    //     button1.addEventListener("on click", () => {
                    //     var newValue = parseInt(document.getElementById('button1').value);
                    // });
                    
                    //     button2.addEventListener("on click", () => {
                    //     var newValue = parseInt(document.getElementById('button2').value);
                    // });

                    //     button3.addEventListener("on click", () => {
                    //     var newValue = parseInt(document.getElementById('button3').value);
                    // });

                
                        //   var newValue = parseInt(document.getElementById('total').value);

      
        <!-- //         var newValue = parseInt(document.getElementById('total').value);
        //         document.getElementById('total').value += newValue;

                
        //     return (calculatePrice);
        // }
        //     console.log('total');
            // function calculatePrice(x) {
            //     var newValue = x;
            //     document.getElementById('total').value += newValue;
        

// function calculateTotalPrice()
// { 
//     var newValue = parseInt(document.getElementById('cost1').value);
//     document.getElementById('total').value += newValue; -->

// const button = document.getElementById('2.00');
// const button1 = document.getElementById('3.00');
// const button2 = document.getElementById('4.00');
// const button3 = document.getElementById('6.00');
        
// function calculatePrice(){
//     console.log("Total");
// }

// button.addEventListener('click', writeMessage);