let cars = [
    {
        'Marca': 'Peugeot',
        'Modelo': '206',
        'Puertas': 4,
        'Precio': '$200.000,00'
    },
    {
        'Marca': 'Honda',
        'Modelo': 'Titan',
        'Cilindrada': '125cc',
        'Precio': '$60.000,00'
    },
    {
        'Marca': 'Peugeot',
        'Modelo': '208',
        'Puertas': 5,
        'Precio': '$250.000,00'
    },
    {
        'Marca': 'Yamaha',
        'Modelo': 'YBR',
        'Cilindrada': '160cc',
        'Precio': '$80.500,50',
    }]


function showCars(objs) {
    objs.map(car => {
        console.log(JSON.stringify(car, null, "//").replace(/\"/g, "").replace(/\n/g, ' ').replace(/{/g, "").replace(/}/g, "").replace('//', "").replace(/,/g, ""));
    })
}

function convert(value) {
    //convert String to decimal values
    return price = Number(value.replace(/[^0-9.-]+/g, "") * 1000);
}

function prices(objs) {
    var mostExpensive;
    var mostCheap;

    objs.map(car => {
        if (mostExpensive == undefined) {
            mostExpensive = car;
            mostCheap = car
        }
        else if (convert(car.Precio) > convert(mostExpensive.Precio)) {
            mostExpensive = car
        }
        else if (convert(car.Precio) < convert(mostCheap.Precio)) { mostCheap = car }
    })
    console.log("Vehículo más caro: " + mostExpensive.Marca + ' ' + mostExpensive.Modelo);
    console.log("Vehículo más barato: " + mostCheap.Marca + ' ' + mostCheap.Modelo);
}

function modelFinder(objs) {
    objs.find(car => {
        if (car.Modelo.includes('Y')) { console.log(car.Marca + ' ' + car.Modelo + ' ' + car.Precio + '\n') }
    })
}

function sortedCars(objs) {
    let sortedList = objs.sort((c1, c2) => (convert(c1.Precio) < convert(c2.Precio)) ? 1 : (convert(c1.Precio) > convert(c2.Precio)) ? -1 : 0)
    console.log('Vehículos ordenados por precio de mayor a menor: ' + '\n');
    sortedList.map(car => {
        console.log(car.Marca + ' ' + car.Modelo + '\n')
    })
}

function carSelling() {
    showCars(cars);
    prices(cars);
    modelFinder(cars);
    sortedCars(cars);
}
carSelling();