const card = ["shoes", "pant", "t-shirt"];

const ordered = createOrder(card);

ordered.then(function(orderId) {
    console.log(orderId);
}).catch(function(error) {
    console.error(error);
});

function createOrder(card) {
    return new Promise((resolve, reject) => {
        if (!validateCard()) {
            const err = new Error("Invalid card");
            reject(err);
        } else {
            const orderId = "123ok";
            resolve(orderId);
        }
    });
}

function validateCard() {
    return true; // Assuming it always returns true for simplicity
}
