let address = {
    street: 'camino',
    city: 'Malaga',
    zipCode: '29004'
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);