const heading = React.createElement("h1", {id: "heading"}, "Namaste from React");
console.log('heading: ', heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)