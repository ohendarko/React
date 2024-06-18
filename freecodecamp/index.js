//ReactDOM.render(what i want to render, where i want to render)
function Navbar() {
  return (
    <div>
    <h1>This is JSX</h1>
    <p>This is a paragraph. Also JSX</p>
    </div>
  );
}

// const Navbar = () => {
//   return (
//     <div>
//     <h1>This is JSX</h1>
//     <p>This is a paragraph. Also JSX</p>
//     </div>
//   )
// }

ReactDOM.render(
  <Navbar />,
  document.getElementById("root"))