const getDetails = async()=>{
    const params= new URLSearchParams(window.location.search).get('id');
    const {data} = await axios.get(`https://dummyjson.com/products/${params}`)
    console.log(data)
     return data
 }
 const showDetails = async () =>{
    document.querySelector(".loader-container").classList.add("active")
     const product  = await getDetails();
     console.log(product)
     document.querySelector(".details .container .row").innerHTML=`
         <img src="${product.thumbnail}"/>
         <div class="single-details">
         <h1>${product.title}</h1>
         <p>${product.description}</p>
         <p class="price">${product.price} &#x24</p>
         <h2>${product.availabilityStatus}</h2>
         <div class="shop">
         <div class="number">
         <i class="fa-solid fa-plus fa-xl"></i>
         <p>1</p>
         <i class="fa-solid fa-minus fa-xl"></i>
         </div>
         <i class="fa-solid fa-cart-shopping fa-xl"></i>
         </div>
         </div>
       `
     
     document.querySelector(".loader-container").classList.remove("active")
 }
 showDetails();
