Employee
[
/* 1 */
{
    "_id" : ObjectId("63393e212a24151bfcc1db1e"),
    "id" : "69420",
    "name" : "Mickey Doloso",
    "age" : 21.0,
    "jobRole" : "Store Manager",
    "salary" : "50"
},

/* 2 */
{
    "_id" : ObjectId("63393e212a24151bfcc1db1f"),
    "id" : "69421",
    "name" : "Rommel Paraon",
    "age" : 17.0,
    "jobRole" : "Store Associate",
    "salary" : "40"
},

/* 3 */
{
    "_id" : ObjectId("63393e212a24151bfcc1db20"),
    "id" : "69422",
    "name" : "James Zubiri",
    "age" : 19.0,
    "jobRole" : "Cashier",
    "salary" : "38"
},

/* 4 */
{
    "_id" : ObjectId("63393e212a24151bfcc1db21"),
    "id" : "69423",
    "name" : "Peter PArker",
    "age" : 28.0,
    "jobRole" : "Janitor",
    "salary" : "72"
},

/* 5 */
{
    "_id" : ObjectId("63393e212a24151bfcc1db22"),
    "id" : "202205",
    "name" : "Jam Rosario",
    "age" : 25.0,
    "jobRole" : "Store Associate",
    "salary" : "32000"
}
],

Inventory
[
    /* 1 */
{
    "_id" : ObjectId("63394c9f2a24151bfcc1db23"),
    "id" : "20220",
    "name" : "Chocolate Syrup - 20 kilograms",
    "price" : "29",
    "quantity" : "1000",
    "category" : [ 
        "Chocolates", 
        "Sweets"
    ]
},

/* 2 */
{
    "_id" : ObjectId("63394c9f2a24151bfcc1db24"),
    "id" : "202234",
    "name" : "Snowbear - 69 pieces",
    "price" : "1",
    "quantity" : "6300",
    "category" : [ 
        "Sweets", 
        "Mint"
    ]
},

/* 3 */
{
    "_id" : ObjectId("63394c9f2a24151bfcc1db25"),
    "id" : "54235",
    "name" : "Pepsi - 20 bottles",
    "price" : "50",
    "quantity" : "150",
    "category" : [ 
        "Sugar", 
        "Drinks"
    ]
},

/* 4 */
{
    "_id" : ObjectId("63394c9f2a24151bfcc1db26"),
    "id" : "5425423",
    "name" : "Chips - 20 grams",
    "price" : "50",
    "quantity" : "30000",
    "category" : [ 
        "Chips", 
        "Snacks"
    ]
},

/* 5 */
{
    "_id" : ObjectId("63394c9f2a24151bfcc1db27"),
    "id" : "25423542",
    "name" : "Fries - 2 kilos",
    "price" : "5",
    "quantity" : "300",
    "category" : [ 
        "Potato", 
        "Snacks"
    ]
},

/* 6 */
{
    "_id" : ObjectId("63394c9f2a24151bfcc1db28"),
    "id" : "202432",
    "name" : "Juice",
    "price" : "8.75",
    "quantity" : "100",
    "category" : [ 
        "Fruit", 
        "Beverages"
    ]
},

/* 7 */
{
    "_id" : ObjectId("63394c9f2a24151bfcc1db29"),
    "id" : "542542",
    "name" : "Beer",
    "price" : "70",
    "quantity" : "1200",
    "category" : [ 
        "Alcohol", 
        "Beverages"
    ]
},

/* 8 */
{
    "_id" : ObjectId("63394c9f2a24151bfcc1db2a"),
    "id" : "5425542",
    "name" : "Iced Tea",
    "price" : "10",
    "quantity" : "5000",
    "category" : [ 
        "Drink", 
        "Fruits"
    ]
}
],

Payment
[
    /* 1 */
{
    "_id" : ObjectId("63394e242a24151bfcc1db2b"),
    "id" : "653265",
    "grossAmount" : "100",
    "discounts" : "10",
    "netAmount" : "70",
    "date/time" : "2022-06-18T19:00:00Z"
},

/* 2 */
{
    "_id" : ObjectId("63394e242a24151bfcc1db2c"),
    "id" : "414312",
    "grossAmount" : "80",
    "discounts" : "50",
    "netAmount" : "50",
    "date/time" : "2022-01-21T14:15:55Z"
},

/* 3 */
{
    "_id" : ObjectId("63394e242a24151bfcc1db2d"),
    "id" : "54235452",
    "grossAmount" : "169",
    "discounts" : "60",
    "netAmount" : "40",
    "date/time" : "2022-06-18T15:29:08Z"
},

/* 4 */
{
    "_id" : ObjectId("63394e242a24151bfcc1db2e"),
    "id" : "426536536",
    "grossAmount" : "80",
    "discounts" : "99",
    "netAmount" : "50",
    "date/time" : "2022-11-01T15:35:52Z"
},

/* 5 */
{
    "_id" : ObjectId("63394e242a24151bfcc1db2f"),
    "id" : "5243254352",
    "grossAmount" : "300",
    "discounts" : "50",
    "netAmount" : "90",
    "date/time" : "2022-11-01T08:15:12Z"
},

/* 6 */
{
    "_id" : ObjectId("63394e242a24151bfcc1db30"),
    "id" : "14312",
    "grossAmount" : "500",
    "discounts" : "100",
    "netAmount" : "13",
    "date/time" : "2022-12-01T12:22:35Z"
}
],

StorePromo
[
    /* 1 */
{
    "_id" : ObjectId("63394fa22a24151bfcc1db31"),
    "id" : "GO50",
    "name" : "BIG SALE!",
    "period" : 20.0,
    "dailySales" : "29, 32, 99, 90, 55, 39, 69"
},

/* 2 */
{
    "_id" : ObjectId("63394fa22a24151bfcc1db32"),
    "id" : "BUY20",
    "name" : "BDAY SALE",
    "period" : 9.0,
    "dailySales" : "990, 500"
},

/* 3 */
{
    "_id" : ObjectId("63394fa22a24151bfcc1db33"),
    "id" : "GET80",
    "name" : "Back-To-School SALE",
    "period" : 80.0,
    "dailySales" : "60, 420"
},

/* 4 */
{
    "_id" : ObjectId("63394fa22a24151bfcc1db34"),
    "id" : "GoSurf50",
    "name" : "Globe 20",
    "period" : 6.0,
    "dailySales" : "59, 23, 65, 157, 132, 44, 420"
}
]