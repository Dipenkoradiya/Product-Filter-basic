"use strict";

const productData = [
    {
        laptop: {
            LAP1: {
                productId: "LAP1",
                category: "laptop",
                company: "Acer",
                name: "Acer Nitro 5",
                price: 50000,
                quantity: 2,
                availability: 1,
            },

            LAP2: {
                productId: "LAP2",
                category: "laptop",
                company: "ROG",
                name: "ROG 6",
                price: 70000,
                quantity: 3,
                availability: 0,
            },
            LAP3: {
                productId: "LAP3",
                category: "laptop",
                company: "MSI",
                name: "MSI",
                price: 150000,
                quantity: 10,
                availability: 1,
            },
        },
        mobile: {
            MOB1: {
                productId: "MOB1",
                category: "mobile",
                company: "Oneplus",
                name: "Oneplus 6t",
                price: 40000,
                quantity: 8,
                availability: 0,
            },
            MOB2: {
                productId: "MOB2",
                category: "mobile",
                company: "Apple",
                name: "iPhone 16",
                price: 140000,
                quantity: 5,
                availability: 1,
            },
            MOB3: {
                productId: "MOB3",
                category: "mobile",
                company: "Samsung",
                name: "Samsung s23",
                price: 150000,
                quantity: 10,
                availability: 0,
            },
        },
    },
];

// Search by name
function nameSearch(productData, enteredName) {
    for (let i in productData) {
        for (let j in productData[i]) {
            let productDataIJ = productData[i][j];
            for (let k in productDataIJ) {
                if (productDataIJ[k].name.toLowerCase().includes(enteredName)) {
                    console.log(productDataIJ[k]);
                }
            }
        }
    }
}
nameSearch(productData, "r");

// Search by category
function categorySearch(productData, enteredcategory) {
    for (let i in productData) {
        for (let j in productData[i]) {
            let productDataIJ = productData[i][j];
            for (let k in productDataIJ) {
                if (productDataIJ[k].category.toLowerCase().includes(enteredcategory)) {
                    console.log(productDataIJ[k]);
                }
            }
        }
    }
}
categorySearch(productData, "ile");

// Search by company
function companySearch(productData, enteredcompany) {
    for (let i in productData) {
        for (let j in productData[i]) {
            let productDataIJ = productData[i][j];
            for (let k in productDataIJ) {
                if (productDataIJ[k].company.toLowerCase().includes(enteredcompany)) {
                    console.log(productDataIJ[k]);
                }
            }
        }
    }
}
companySearch(productData, "ung");

// Search by Multiple companies
function companySearch(productData, enteredcompany) {
    let enteredcompanies = enteredcompany.split(" ");
    for (let i in productData) {
        for (let j in productData[i]) {
            let productDataIJ = productData[i][j];
            for (let k in productDataIJ) {
                for (let l in enteredcompanies) {
                    if (productDataIJ[k].company.toLowerCase().includes(enteredcompanies[l])) {
                        console.log(productDataIJ[k]);
                    }
                }
            }
        }
    }
}
companySearch(productData, "samsung cer rog");

// Search by company and category
function companySearch(productData, enteredcompany) {
    let enteredcompanies = enteredcompany.split(" ");
    for (let i in productData) {
        for (let j in productData[i]) {
            let productDataIJ = productData[i][j];
            for (let k in productDataIJ) {
                if (
                    productDataIJ[k].category.toLowerCase().includes(enteredcompanies[0]) ||
                    productDataIJ[k].company.toLowerCase().includes(enteredcompanies[1])
                ) {
                    console.log(productDataIJ[k]);
                }
            }
        }
    }
}
companySearch(productData, "laptop samsung");

// Search by category and price
function companySearch(productData, enteredcompany) {
    let enteredcompanies = enteredcompany.split(" ");
    for (let i in productData) {
        for (let j in productData[i]) {
            let productDataIJ = productData[i][j];
            for (let k in productDataIJ) {
                if (productDataIJ[k].category.toLowerCase().includes(enteredcompanies[0]) && productDataIJ[k].price <= enteredcompanies[1]) {
                    console.log(productDataIJ[k]);
                }
            }
        }
    }
}
companySearch(productData, "laptop 100000");

// Search by availability >=
function availabilitySearch(productData, enteredavailability) {
    for (let i in productData) {
        for (let j in productData[i]) {
            let productDataIJ = productData[i][j];
            for (let k in productDataIJ) {
                if (productDataIJ[k].availability == enteredavailability) {
                    console.log(productDataIJ[k]);
                }
            }
        }
    }
}
availabilitySearch(productData, 0);

// let names = (data) => {
//     console.log(data[0]);
// };
// names(productData);

// console.log(productData[0].laptop.LAP2.name);
// // console.log(productData[0].laptop.LAP1.name);
// const abc = productData.map(myfunction);
// function myfunction(data) {
//     for (let i in data) {
//         for (let j in data[i]) {
//             if (data[i][j].company === "Apple" && data[i][j].quantity > 1) {
//                 // console.log(data[i][j]);
//             }
//         }
//     }
// }

// function getNestedItems(array, category, id, name) {
//     return array.map((item) => {
//         return item[category][id];
//     });
// }

// console.log(getNestedItems(productData, "laptop", "LAP2"));
