const container = document.getElementById("categorias");
        const cargando = cargandoEl();
        container.appendChild( cargando );
      
        fetch("https://api.storerestapi.com/categories")
        .then((respuesta) => respuesta.json() )
        .then((data) => {

            const categorias = listaCategorias(data.data);
            setTimeout(() => {
                container.textContent = "";
                container.appendChild( categorias );
            }, 1000);
            
        })
        .catch((err) => {
            console.log(err);
            container.textContent = "";
            container.appendChild( errorEl() );
        });
       
        function cargandoEl() {
            const contenedor = document.createElement("div");
            contenedor.className ="cargando";
            contenedor.textContent = "Cargando, por favor espere";
            return contenedor;
        }
        
        function errorEl() {
            const contenedor = document.createElement("div");
            contenedor.className ="error";
            contenedor.textContent = "Lo sentimos, intentelo mas tarde.";
            return contenedor;
        }

        function listaCategorias(categorias) {
            const contenedor = document.createElement("div");
            contenedor.className = "categorias";
            for (const categoria of categorias) {
              const boton = document.createElement("button");
              boton.textContent = categoria.name;
              boton.onclick = () => {
                console.log(`Hizo clic en ${categoria.name}`);
                // Realice una acción aquí, si es necesario
              };
              contenedor.appendChild(boton);
            }
            return contenedor;
          }

/* */


fetch("https://api.storerestapi.com/categories")
    .then((respuesta)=>respuesta.json())
    .then((categorias)=>{
        console.log('CATEGORIAS: ', categorias);
        for (const cate of categorias) {
            const elementoCategoria = crearCategoria(cate);
            const contenedor = document.getElementById("categorias");
            contenedor.appendChild(elementoCategoria);
        }
    })
    .catch(error);


function error(err) {
    console.log(err);
}

function crearCategoria(categoria) {
    const categoriaContenedor = document.createElement("article");
    const categoriaNombre = document.createElement("header");

    categoriaContenedor.className = "categoria-item" 

    categoriaNombre.textContent = categoria.name;

    categoriaContenedor.appendChild(categoriaNombre);
    return categoriaContenedor;
}
/*
{ _id: "61ab1ca64a0fef3f27dc663f", 
    name: "men's fashion", 
    slug: "mens-fashion", … }
*/
fetch("https://fakestoreapi.com/products")
    .then((respuesta)=>respuesta.json())
    .then((productos)=>{
        console.log('PRODUCTOS: ', productos);
        for (const prod of productos) {
            const elementoProducto = crearProducto(prod);
            const contenedor = document.getElementById("productos-contenedor");
            contenedor.appendChild(elementoProducto);
        }
    })
    .catch(error);


function error(err) {
    console.log(err);
}

function crearProducto(producto) {
    const prodContenedor = document.createElement("article");
    const prodImg = document.createElement("img");
    const prodNombre = document.createElement("header");
    const prodDetalle = document.createElement("aside");
    const prodPrecio =  document.createElement("div");
    const prodBoton =  document.createElement("button");

    prodContenedor.className = "producto-item"

    prodImg.src = producto.image;
    prodNombre.textContent = producto.title;
    prodPrecio.textContent = `S/. ${producto.price}`;
    prodBoton.textContent = "Comprar";
    prodBoton.onclick = () => comprarProducto(producto);

    prodDetalle.appendChild(prodPrecio);
    prodDetalle .appendChild(prodBoton);
    prodContenedor.appendChild(prodImg);
    prodContenedor.appendChild(prodNombre);
    prodContenedor.appendChild(prodDetalle);
    return prodContenedor;
}

function comprarProducto(producto) {
    console.log('COMPRAR', producto);
}
/*
id: 1, 

title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, … }
​​
category: "men's clothing"
​​
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
​​
image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
​​
price: 109.95
*/






// const categoriasUrl = "https://api.storerestapi.com/categories";
// const aside = document.querySelector('aside');

// fetch(categoriasUrl)
//   .then(response => response.json())
//   .then(data => {
//     const categorias = data.map(categoria => {
//       return `<a href="#" data-categoria="${categoria}">${categoria}</a>`
//     }).join('');
//     aside.innerHTML = categorias;
//   })
//   .catch(error => console.error(error));

//   console.log(categoriasUrl);