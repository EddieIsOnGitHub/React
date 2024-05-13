import React from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

function Rating(props) {
  return (
    <div>
      <h1>Rating:{props.rating}</h1>
    </div>
  );
}

function App() {
  const isValid = true;


  //   return (
  //     <div>
  //       <h1>
  //         Learn React
  //         <Products />

  //         <Button disabled={!isValid}>Default</Button>

  //         {props.rating >= 1 ? (
  //           <IoIosStar />
  //         ) : (
  //           <IoIosStarOutline />
  //         )}
  //         {props.rating >= 2 ? (
  //           <IoIosStar />
  //         ) : (
  //           <IoIosStarOutline />
  //         )}
  //         {props.rating >= 3 ? (
  //           <IoIosStar />
  //         ) : (
  //           <IoIosStarOutline />
  //         )}
  //         {props.rating >= 4 ? (
  //           <IoIosStar />
  //         ) : (
  //           <IoIosStarOutline />
  //         )}
  //         {props.rating >= 5 ? (
  //           <IoIosStar />
  //         ) : (
  //           <IoIosStarOutline />
  //         )}
  //       </h1>
  //     </div>
  //   );
  // }
  return (
    <div>
      <h1>Rating: {rating}</h1>
      {rating >= 1 ? (
        <IoIosStar onClick={() => setRating(1)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(1)} />
      )}
      {rating >= 2 ? (
        <IoIosStar onClick={() => setRating(2)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(2)} />
      )}
      {rating >= 3 ? (
        <IoIosStar onClick={() => setRating(3)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(3)} />
      )}
      {rating >= 4 ? (
        <IoIosStar onClick={() => setRating(4)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(4)} />)}
      {rating >= 5 ? (
        <IoIosStar onClick={() => setRating(5)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(5)} />
      )}</div>
  );

}
export default App;
