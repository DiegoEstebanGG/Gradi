let url = 'https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js'

fetch(url)
    .then(response => response.text())
    .then(data => mostrarDatos(data))
    .catch(error => console.log(error))


const mostrarDatos = (data) => {
    let products = JSON.parse(data);
    console.log(products);
    titulo = '<h1>' + products.title;
    document.getElementById('titulo').innerHTML = titulo
    content = '<p>' + products.description;
    document.getElementById('descrip').innerHTML = content
}