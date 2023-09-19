
const heading = React.createElement("h1", {
    id: 'heading'
}, "Hello world using React");
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)

// creating a complex structure like this
//     <div id="parent">
//         <div id="child">
//             <h1>I am an h1 Tag</h1>
//         </div>
//     </div>

const parent = React.createElement("div", { id: 'parent' }, React.createElement("div", { id: 'child' }, React.createElement("h1", {}, "I am an h1 tag")));

root.render(parent)

// rendering siblings
//     <div id="parent">
//         <div id="child">
//             <h1>I am an h1 Tag</h1>
//             <h2>I am an h2 Tag</h2>
//         </div>
//     </div>
//         <div id="child2">
//             <h1>I am an h1 Tag2</h1>
//             <h2>I am an h2 Tag2</h2>
//         </div>

const parent2 = React.createElement("div", { id: 'parent' }, [React.createElement("div", { id: 'child' }, [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag")]), React.createElement("div", { id: 'child2' }, [React.createElement("h1", {}, "I am an h1 tag2"), React.createElement("h2", {}, "I am an h2 tag2")])]);

root.render(parent2)