/**
 * ReactElement(gives object) => HTML(Browser understands)
 * render() method converts obj to html tags
 */
const heading = React.createElement(
    "h1", 
    {id: "heading", xyz:"abc"}, 
    "hello world from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);