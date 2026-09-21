
import './App.css'
import Batch from './Components/Batch';
import fees,{ cname, Course } from './Components/Course'
import Courselist from './Components/Courselist';


function App() {
return(
  <>
    <Courselist/>
  </>
)

// let isDisplay = true;



// //browser la batch sagli show keli aahe
// return(
//   <>{
//     isDisplay ? <Batch/> : <h1>COmponent Not found ..!</h1>
//   }
//   </>
// )

// //ternary operator
// return(
//   <>
//   {
//     isDisplay ? <h1>hello</h1> : <h1>Welcome</h1>
//   }
// </>
// )

// if(isDisplay){
//   return(
//     <h1>Hello</h1>
//   )
// }
// else{
//   return(
//     <h1>welcome</h1>
//   )
// }

  // return (
  //   <>
  //   <h1>React App4</h1>
  //   <Course/>
  //   <h2>course name : {cname}</h2>
  //   <h2>course fees : {fees}</h2>
  //   </>
  // )
}

export default App
