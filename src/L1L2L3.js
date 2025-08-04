// const heading = React.createElement("h1", {id: 'heading'}, "Namaste React Js!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


{/* <div id="parent">
    <div id="child">
        <h1>Namaste React Js!</h1>
    </div>
</div> */}

// if we have to create teh above HTML structure using React.createElement then how we can do it?
// const parent = React.createElement("div", {id: 'parent'},
//     React.createElement("div", {id: 'child'},   
//         React.createElement("h1", null, "Namaste React Js!")
// ));

// root.render(parent);

{/* <div id="parent">
    <div id="child">
        <h1>Namaste React Js!</h1>
        <h1>Going to be learned by geekySpyder</h1>
    </div>
</div> */}

// if we have to create the above HTML structure where we have two sibling elements inside the child div then how we can do it?
// const parent2 = React.createElement("div", {id: 'parent'},
//     React.createElement("div", {id: 'child'},   
//         [React.createElement("h1", {key: 0}, "Namaste React Js!"),
//         React.createElement("h1", {key: 1}, "Going to be learned by geekySpyder")]
//     )
// );

// root.render(parent2);


// since now we have installed the dependencies for React and ReactDOM, we can import them directly here in this file and execute our code.
import React from 'react'; // we are impporting React here from node_modules
import ReactDOM from 'react-dom/client'; // we are importing ReactDOM here from node_modules

// will our code will work now!, 

const parent = React.createElement("div", {id: 'parent'},
    React.createElement("div", {id: 'child'},   
        React.createElement("h1", null, "Namaste React Js!")
));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// React functional Component
const HeadingComponent = () => {
    return (
        <h1 className="heading">Namaste React Js!</h1>
    );
}

// here our HeadingComponent is a functional component which is returning a JSX element.
// JSX is a syntax extension for JavaScript that looks similar to XML or HTML.

const fn = () => true;

const fn1 = () => {
    return true;
}

// both the function above are doing the same thing, but the second one is more readable and maintainable.
// first one is an arrow function without a body, which returns the value directly.

const HeadingComponent1 = () => <h1 className='heading'>Namaste Akancha my Wife</h1>;

const HeadingComponent3 = () => (<h1 className='heading'>Namaste Akancha my Wife</h1>);


const HeadingComponent2 = () => {
    return <h1 className='heading'>Namaste Akancha my Wife</h1>;
}

const HeadingComponent4 = () => {
    return (<h1 className='heading'>Namaste Akancha my Wife</h1>);
}

// all the above components are doing the same thing, but the first one is more concise and readable.
// we can use any of the above components as per our requirement.

// React element is a plain object which is used to create the virtual DOM.
// React element is immutable, which means we cannot change the properties of the element once it is
const heading = () => {
    return <div>Akhand weds Akancha</div>
}

const Heading = () => {
    return <h1>Akhand weds Akancha</h1>;
}

// This is a functional component which is returning a JSX element.
// We can use this component in our application to render the heading element.

// all the components are rendered like this
// root.render(<HeadingComponent />);

const TitleComponent = () => {
    return (
        <h1 className="title">Namaste React Js!</h1>
    );
}

const HeadingComponent5 = () => {
    return (
        <div>
            {/* This is component composition putting other component inside another component */}
            <TitleComponent />
            <h1 className="heading">Namaste Akancha my Wife</h1>
        </div>
    );
}

// Inside the JSX we can use the {} to write the javascript code.
const HeadingComponent6 = () => {
    const name = "Akancha";
    return (
        <div>
            {TitleComponent()} 
            {/* This is perfectly fine JSX syntax since TitleComponent is function at the end
            and we can execute it inside the {} braces and call it. */}
            <h1 className="heading">Namaste {name} my Wife</h1>
        </div>
    );
}

//we can also call the React element and React functional component inside the JSX {};


