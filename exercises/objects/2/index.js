let address = {
    street: 'camino',
    city: 'Malaga',
    zipCode: '29004'
};

// Factory Function

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
};

address1 = createAddress('a','b','c');
console.log(address1);


// Constructor Function
function Createaddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

address2 = new Createaddress('d', 'e', 'f');
console.log(address2);