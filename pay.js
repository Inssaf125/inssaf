paypal.Buttons({
    createOrder: function(data, actions) {
        // This functions sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({ 
            purchase_units: [{ 
                amount: { 
                    value: '10.0'
                 }
            }]
         });
     },
    onApprove: function(data, actions) { 
        //This functions captures the funds from the transaction.
        return actions.order.capture().then(function(details) { 
            //This functions shows a transaction success message to your buyer.
            alert('Transaction completed by ' + details.payer.name.given_name);
        })
    }
}).render('#paypal-button-container'); 

const quantityInput = document.getElementById('quantity');
    const paypalLink = document.getElementById('paypal-link');

    const basePrice = 20; // Prix unitaire
    const paypalBaseURL = "https://www.paypal.com/paypalme/ton_compte/";

    quantityInput.addEventListener('input', () => {
        const quantity = parseInt(quantityInput.value) || 1;
        const totalPrice = (quantity * basePrice).toFixed(2); // Calcul du prix total
        paypalLink.href = `${paypalBaseURL}${totalPrice}`;
    });

    // Initialisation du lien
    quantityInput.dispatchEvent(new Event('input'));
    