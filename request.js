let url = 'https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js'

fetch(url)
    .then(response => response.text())
    .then(data => mostrarDatos(data))
    .catch(error => console.log(error))


const mostrarDatos = (data) => {
    let products = JSON.parse(data);
    console.log(products);
    //descripcion
    imgt = document.getElementById("img").src = +products["media"][0]['preview_image']['src'];
    console.log(imgt)
        //img = '<img>' 
        //document.getElementById('img').innerHTML = img
        //titulo
    titulo = '<h1>' + products.title;
    document.getElementById('titulo').innerHTML = titulo
        //precio
    precio = '<h3>' + products.price;
    document.getElementById('precio').innerHTML = precio
        //precio sin descuento
    preciod = '<h5>' + products.compare_at_price;
    document.getElementById('preciod').innerHTML = preciod
        //color
    opc = '<h5>' + products['options'][0]['values'][0];
    document.getElementById('opc').innerHTML = opc
        //talla
    opc = '<h5>' + products['options'][0]['values'][1];
    document.getElementById('opc2').innerHTML = opc
        //descripcion
    content = '<p>' + products.description;
    document.getElementById('descrip').innerHTML = content
}