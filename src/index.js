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

// const Title = () => {
//    const title = "given title";
//   return (
//     <h2> {title}</h2>
//   );
// };

// const Image = () => {
//   return (
//     // <img src="https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg" alt='main from book' />
//     <img
//       src="./images/local_image.jpg"
//       //WHATEVER WE PUT IN THE PUBLIC, IT CAN BE ACESSED! IS PUBLIC1
//       //NOT A POPULAR OPTION SINCE ASSETS IN PUBLIC FOLDER DON'T GET OPTIMIZED!
//       //MORE EFFICIENT TO PUT THEM IN SRC FOLDER
//       alt="new"
//     />
//   );
// };

// const Author = () => {
//   const inlineHeadingStyle = { color: "green" };
//   return <div style={inlineHeadingStyle}>index</div>;
// };

// const Book = (props) => {
//   console.log(props)
//   return (
//     <div className="book">
//       <Image />
//       <Author />
//       <Title />
//       <p>{props.job}</p>
//       <p>{props.title}</p>
//       <p>{props.number}</p>
//     </div>
//   );
// };

// const BookList = () => {
//   return (
//     <div className="booklist">
//       <Book job='developer'/>
//       <Book job='developer' title='a title cool' number={22}/>
//       <Book />
//       <Book />
//       <Book />
//     </div>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BookList />);

//Objects! For example called from an API...
// const firstBook = {
//   author: 'Jordan Moore',
//   title: 'Interesting Facts F',
//   img: './images/local_image.jpg',
// }
// const secondBook = {
//   author: "Jordan Moore second",
//   title: "Interesting Facts F2",
//   img: "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg",
// };
// const thirdBook = {
//   author: "Jordan Moore third",
//   title: "Interesting Facts F3",
//   img: "https://images-na.ssl-images-amazon.com/images/I/71bBKivYGZL._AC_UL600_SR600,400_.jpg",
// };
// const fourthBook = {
//   author: "Jordan Moore fourth",
//   title: "Interesting Facts F4",
//   img: "https://images-na.ssl-images-amazon.com/images/I/91XPKk96LXL._AC_UL600_SR600,400_.jpg",
// };

// // const Title = () => {
// //   const title = "given title";
// //   return <h2> {title}</h2>;
// // };

// // const Image = (props) => {
// //   console.log('Image '+{props})
// //   return (
// //     // <img src="https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg" alt='main from book' />
// //     <img src={props.img}
// //       //WHATEVER WE PUT IN THE PUBLIC, IT CAN BE ACESSED! IS PUBLIC1
// //       //NOT A POPULAR OPTION SINCE ASSETS IN PUBLIC FOLDER DON'T GET OPTIMIZED!
// //       //MORE EFFICIENT TO PUT THEM IN SRC FOLDER
// //       alt="new"
// //     />
// //   );
// // };

// // const Author = () => {
// //   const inlineHeadingStyle = { color: "green" };
// //   return <div style={inlineHeadingStyle}>index</div>;
// // };

// const Book = (props) => {
//   console.log(props);
//   const { img, title, author } = props.bookObject;
//   const { children } = props
//   return (
//     <div className="book">
//       <img src = {img} alt='caca'/>
//       <h2>{title}</h2>
//       <p>{author}</p>
//       {children}
//     </div>
//   );
// };

// const BookList = () => {
//   return (
//     <div className="booklist">
//       <Book bookObject = {firstBook} />
//       <Book bookObject = {secondBook} />
//       <Book bookObject = {thirdBook} />
//       <Book bookObject = {fourthBook}>
//         <p>lorem <button>click me</button></p>
//       </Book>

//     </div>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BookList />);

//But what if the objects come in a list? Like they usually do...?
// const listOfBooks = [
//   {
//     author: "Jordan Moore",
//     title: "Interesting Facts F",
//     img: "./images/local_image.jpg",
//     id: 1,
//   },
//   {
//     author: "Jordan Moore second",
//     title: "Interesting Facts F2",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg",
//     id: 2,
//   },
//   {
//     author: "Jordan Moore third",
//     title: "Interesting Facts F3",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71bBKivYGZL._AC_UL600_SR600,400_.jpg",
//     id: 3,
//   },
//   {
//     author: "Jordan Moore fourth",
//     title: "Interesting Facts F4",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91XPKk96LXL._AC_UL600_SR600,400_.jpg",
//     id: 4,
//   },
// ];

// const Book = (props) => {
//   console.log(props);
//   const { img, title, author } = props;
//   const { children } = props;
//   return (
//     <div className="book">
//       <img src={img} alt="caca" />
//       <h2>{title}</h2>
//       <p>{author}</p>
//       {children}
//     </div>
//   );
// };

// const BookList = () => {

//   return <section>{listOfBooks.map((book) => {
//     const {img, title, author} = book;
//     return <Book img={img} title={title} author = {author} />;
//   })}</section>;
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BookList />);

//Imagine an object with many many attributes...
// you can see that the deconstructing of that object takes some time, you have to wrtie all attributes manually down...
// then the prop assembles all of them together in the props object...So we have to reconstruct them again
//sounds like a lot of work to me(l333,349,350)

// Two options: 1. Pass the object as a whole  or 2.Use the spread operator.

//1.
// 1.1
// const listOfBooks = [
//   {
//     author: "Jordan Moore",
//     title: "Interesting Facts F",
//     img: "./images/local_image.jpg",
//     id: 1,
//   },
//   {
//     author: "Jordan Moore second",
//     title: "Interesting Facts F2",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg",
//     id: 2,
//   },
//   {
//     author: "Jordan Moore third",
//     title: "Interesting Facts F3",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71bBKivYGZL._AC_UL600_SR600,400_.jpg",
//     id: 3,
//   },
//   {
//     author: "Jordan Moore fourth",
//     title: "Interesting Facts F4",
//     img: "https://images-na.ssl-images-amazon.com/images/I/91XPKk96LXL._AC_UL600_SR600,400_.jpg",
//     id: 4,
//   },
// ];

// const Book = (props) => {
//   console.log(props);
//   const { img, title, author, id } = props.book;
//   const { children } = props;
//   return (
//     <div className="book">
//       <img src={img} alt="caca" />
//       <h2>{title}</h2>
//       <p>{author}</p>
//       <p>{id}</p>
//       {children}
//     </div>
//   );
// };

// const BookList = () => {
//   return (
//     <section>
//       {listOfBooks.map((book) => {
//         return <Book book = {book} />;
//       })}
//     </section>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BookList />);
// 2 {...book} spread operator
const listOfBooks = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts F",
    img: "./images/local_image.jpg",
    id: 1,
  },
  {
    author: "Jordan Moore second",
    title: "Interesting Facts F2",
    img: "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg",
    id: 2,
  },
  {
    author: "Jordan Moore third",
    title: "Interesting Facts F3",
    img: "https://images-na.ssl-images-amazon.com/images/I/71bBKivYGZL._AC_UL600_SR600,400_.jpg",
    id: 3,
  },
  {
    author: "Jordan Moore fourth",
    title: "Interesting Facts F4",
    img: "https://images-na.ssl-images-amazon.com/images/I/91XPKk96LXL._AC_UL600_SR600,400_.jpg",
    id: 4,
  },
];

const Book = (props) => {
  console.log(props);
  const { img, title, author, id } = props;
  const { children } = props;
  return (
    <div className="book">
      <img src={img} alt="caca" />
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{id}</p>
      {children}
    </div>
  );
};

const BookList = () => {
  return (
    <section>
      <EventExample />
      {listOfBooks.map((book) => {
        return <Book {...book} otheobject = 'hola'/>;
      })}
    </section>
  );
};

const EventExample = () => {
   const handleFormInput = (e) => {
     console.log("handle form input");
     console.log(e)
   };
   const handleButtonClick = () => {
     alert("handle button click");
   };
   const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted')
   }
  return (  
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical form</h2>
        <input type="text" name="example" style={{margin: '1rem 0'}} onChange={handleFormInput}/>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

