var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});


start()

function start(){
inquirer.prompt([
{
    type: "list",
    name: "Type",
    message: "Welcome To The Trails General Store! What Would You Like To Do?",
    choices: ["Browse", "Shop","Leave"]   
    }
]).then(function(check){
    switch(check.Type) { 
        case "Browse":
        browse()
        break;
        
        case "Shop":
        shop()
        break;

        case "Leave":
        console.log("Goodbye Have a Wonderful Time!");
        connection.end()
}
})
}

  function browse() {

	queryStr = 'SELECT * FROM products';

	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Current Stock: ');
		console.log('__________________________________________________________________________');

		var display = '';
		for (var i = 0; i < data.length; i++) {
			display = '';
			display += 'Item ID: ' + data[i].item_id + ' || ';
			display += 'Product Name: ' + data[i].product_name + ' || ';
			display += 'Type: ' + data[i].department_name + ' || ';
            display += 'Price: $' + data[i].price + ' || ';
            display += 'In Stock:' + data[i].stock_quantity;

            console.log(display);
		}

		console.log('__________________________________________________________________________');
           
        inquirer.prompt([
            {
                type: "list",
                name: "Type",
                message: "Would You Like To Buy Anything?",
                choices: ["Yes", "No"]   
                }
            ]).then(function(check){
                if(check.Type ==="Yes"){
                shop()
                }
                else{ 
                console.log("have a good day!")
                connection.end()
                }
            })

    })
}
function shop(){
inquirer.prompt([
    {
        type: 'input',
        name: 'item_id',
        message: 'Please enter the Item ID which you would like to purchase.',
    },
    {
        type: 'input',
        name: 'quantity',
        message: 'How many do you need?',
    }
]).then(function(input) {

    var item = input.item_id;
    var quantity = input.quantity;

    var queryStr = 'SELECT * FROM products WHERE ?';

    connection.query(queryStr, {item_id: item}, function(err, data) {
        if (err) throw err;

        if (data.length === 0) {
            console.log('Sorry, what Did You Want Again?');
            shop();
        } else {
            var merch = data[0];

            if (quantity <= merch.stock_quantity) {

                var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (merch.stock_quantity - quantity) + ' WHERE item_id = ' + item;

                // Update the inventory
                connection.query(updateQueryStr, function(err, data) {
                    if (err) throw err;
                    
                    console.log("So " + quantity + " " + merch.product_name +" comes to $" +merch.price * quantity)
                    console.log('Have Fun Storming the Castle!');
                    connection.end();
                })
            } else {
                console.log('Hey I Do Not Have Enough, Order A Bit Less);
                console.log("---------------------------------------------------------------------");
                shop();

            }
        }
    })
})
}
