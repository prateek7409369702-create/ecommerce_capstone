const products=[{n:'Laptop',p:'₹55000'},{n:'Phone',p:'₹25000'},{n:'Headphones',p:'₹3000'}];
const c=document.getElementById('products-list');
products.forEach(x=>c.innerHTML+=`<div class='card'><h3>${x.n}</h3><p>${x.p}</p><button>Add to Cart</button></div>`);
window.addEventListener('hashchange',()=>document.querySelector(location.hash||'#home')?.scrollIntoView({behavior:'smooth'}));