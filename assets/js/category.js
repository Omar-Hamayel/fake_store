
const getProducts = async()=>{
   const params= new URLSearchParams(window.location.search).get('category');
   console.log(params)
    const {data} = await axios.get(`https://dummyjson.com/products/category/${params}`)
    return data
}
const showProducts = async () =>{
  document.querySelector(".loader-container").classList.add("active")
    const product  = await getProducts();
    document.querySelector(".products .container .row").innerHTML=product.products.map ((product)=>{
        return `
        <a class = product href="details.html?id=${product.id}">
        <img src="${product.thumbnail}"/>
        <h2>${product.title}</h2>
        <p>${product.price}</p>
        </a>
      `  
    }).join("");
    document.querySelector(".loader-container").classList.remove("active")
}
showProducts();