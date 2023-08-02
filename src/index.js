import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
// function Greeting() {
//   return <React.Fragment>
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

//So in the following code 4 different components are going to be created: Author, Title, Image, Book and Bookstore.

const Title = () => {
   const title = "given title";
  return (
    <h2> {title}</h2>
  );
};

const Image = () => {
  return (
    // <img src="https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg" alt='main from book' />
    <img
      src="./images/local_image.jpg"
      //WHATEVER WE PUT IN THE PUBLIC, IT CAN BE ACESSED! IS PUBLIC1
      //NOT A POPULAR OPTION SINCE ASSETS IN PUBLIC FOLDER DON'T GET OPTIMIZED!
      //MORE EFFICIENT TO PUT THEM IN SRC FOLDER
      alt="new"
    />
  );
};

const Author = () => {
  const inlineHeadingStyle = { color: "green" };
  return <div style={inlineHeadingStyle}>index</div>;
};

const Book = (props) => {
  console.log(props)
  return (
    <div className="book">
      <Image />
      <Author />
      <Title />
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </div>
  );
};

const BookList = () => {
  return (
    <div className="booklist">
      <Book job='developer'/>
      <Book job='developer' title='a title cool' number={22}/>
      <Book />
      <Book />
      <Book />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
