import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//   return <h2> My first component</h2>
// }

// function Greeting(){
//   return React.createElement('h2',{},'hello world')
// }

// function Greeting() {
//   return (
//     <div>
//       <h2> My first component</h2>
//     </div>
//   );
// }

// function Greeting(){
//   return React.createElement('div',{},React.createElement('h3',{}, 'My first COmponent'))
// }

// function Greeting() {
//   return (
//     <div>
//       <h2> My first component</h2>
//       <ul>
//         <li><a href="#" target="_blank" rel="noopener noreferrer">Hello World</a></li>
//       </ul>
//     </div>
//   );
// }

// The returned JSX MUST BE A UNIQUE ELEMENT, you can go as complex and crazy as you
//want but WITHIN that JSX element!!!
//If you try the following, it wont work :(!!!...
//And of course the editor says:
// 'JSX expressions must have one parent element'

// function Greeting() {
//   return (
//     <div>
//       <h2> My first component</h2>
//     </div>
//     <h1>hello</h1>
//   );
// }
//...put a unique parent element and problem solved! :)

// function Greeting() {
//   return (
//     <section>
//       <div>
//         <div>
//           <h2> My first component</h2>
//         </div>
//         <h1>hello</h1>
//       </div>
//       <h2>Cool section</h2>
//     </section>
//   );
// }

//you can also go with ...

// function Greeting() {
//   return (

//     <React.Fragment>
//       <div>
//         <div>
//           <h2> My first component</h2>
//         </div>
//         <h1>hello</h1>
//       </div>
//       <h2 className="RedCoolText">Cool section</h2>
//     </React.Fragment>

//   );
//}

// The parenthesis in the return is not necessary is there to help us.
//If we did not have it...this does not work

// function Greeting() {
//   return 
//     <React.Fragment>
//       <div>
//         <div>
//           <h2> My first component</h2>
//         </div>
//         <h1>hello</h1>
//       </div>
//       <h2 className="RedCoolText">Cool section</h2>
//     </React.Fragment>
//   ;
// }

//Without parentesis we need that the opening of the first element stays on the same
//line as the return statement :)
function Greeting() {
  return <React.Fragment>
      <div>
        <div>
          <h2> My first component</h2>
        </div>
        <h1>hello</h1>
      </div>
      <h2 className="RedCoolText">Cool section</h2>
    </React.Fragment>
  ;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
