//console.log('llegue');

//const myReactComponent = React.createElement("h1", {}, "I am creating my first React component");
//const myNestedReactComponent = React.createElement("div", {}, React.createElement("p", {}, "This element is nested"));

const App = () => {
    return React.createElement("h1", {}, "Our First React page has rendered");
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
