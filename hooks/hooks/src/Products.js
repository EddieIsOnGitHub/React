// import React from 'react';
// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }
// function App() {
//     const user = {
//         firstName: 'Greg',
//         lastName: 'Tan',
//         imageUrl: 'https://picsum.photos/200/300'
//     };
//     return (
//         <div>
//             <h1>
//                 Hello, {formatName(user)}
//                 <br />
//                 <img src={user.imageUrl}></img>
//             </h1>
//         </div>
//     );
// }
// export default App;

import React from 'react';
function Products() {
    const products = ["Learning React", "Pro React", "Beginning React"];
    const listProducts = products.map((product) =>
        <li key={product.toString()}>{product}</li>
    );
    return (
        <div>
            <ul>{listProducts}</ul>
        </div>
    );
}
export default Products;
