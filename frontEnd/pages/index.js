// below react import is not needed because Next.js takes care of importing it for us
//import React from 'react';


// full blown React component 
// class Home extends React.component {

//     render(){
//         return <p>Hey</p>
//     }
// }
import Link from 'next/link';


// stateless functional component
const Home = props => (
    <div>
      <p>Hey!</p>

    </div>
);



export default Home;