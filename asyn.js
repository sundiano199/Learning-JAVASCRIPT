// asynchronous JS
// non-blocking code
console.log("A");
setTimeout(() => {
    console.log("B");    
}, 5000); // i.e 5 seconds
console.log("C");
// a c b


// fetch DATA from an external source
// Application progrsmming interface
// private api and public api
//
const url = 'http://jsonplaceholder.typicode.com/users';
// callbacks(.then) async/await
// PROMISES - pending fulfilled()
// Json - javascript objerct notation

const fetchUsers = async() => {
    try { 
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(data);        
    } catch (error) {
        console.log(error); 
    }
};
fetchUsers()



const productUrl = "https://fakestoreapi.com/products"
const fetchProducts = async () => {
    try {
    const response = await fetch(productUrl);
    const data = await response.json();
    console.log(data);        
    } catch (error) {
        console.log(error);        
    }
};
fetchProducts();