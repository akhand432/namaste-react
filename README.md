Now we will integrate the git into our project, so that we can maintain the repository in the github and push our code in remote/origin.

This is a good way to create your project, and keep pushing the changes periodically. So, that we can track the changes.

To configure the project with git version control as of now it isn't configured.

So, we need to 1st configure with 'git init' command->

with this command our project is not configured to track our changes. Whatever we do.

Since, we are currently using index.html to build our static page with some dynamic content.

However, once we will make the project complex and grow we need dependencies to manage our applicaiton.
like in index.html file we have used the react cdn as of now it's good to place there.
Howerver, this is not correct way to put the cdn into index.html file.

We need to install it as a dependency so, we can import it and used in our js files.

This are the issues we shouldn't have cdn in our prjoect ->

1. Reliability Issues
You're dependent on a third-party server. If the CDN is down or blocked (e.g., by firewalls, in China, or by strict networks), your app may break.

2. Version Control Problems
CDN links may point to specific or latest versions. If the CDN updates the file or you accidentally use a different version later, it can cause unexpected bugs or behavior.

Local development and production might behave differently.

3. Security Risks
Including third-party scripts from external sources can open you up to supply chain attacks if the CDN is compromised.

You lose control over the content of the file (unless you're using a hash-based Subresource Integrity check, which most people don’t add).

4. Performance Inconsistencies
While CDNs can offer performance benefits (via caching), loading files from different origins can actually slow things down or result in cache misses if users have never visited a site using that exact CDN.

Self-hosting your assets (via Webpack, Vite, etc.) gives you tighter control and allows bundling and minification.

5. Offline Development
If you're on a plane or a bad internet connection, your local server may fail to load the assets via CDN. A local setup keeps your development environment fully functional offline.


Since we will be downloading the packages into our project, we need to have some manager which can 
control those packages, and give control to us. For that, we use the npm which is global repository 
for managing the packages.

To configure it in our application we need to run the command "npm init" for npm in our project->

package.json is the configuration for npm.

The most important package for our project is bundler. This bundler will bundle our app 
and make separate file for html, css, js so, that the application can be bundled together into one code which the browser understands like html, css and js.

The important bundler are Webpack, Vite, Parcel etc.

Parcel is easy to configure so, here we will be using it.

There are two types of dependencies one is dependency and other is dev dependency.

Dependency is used when we bundle or ship our code into production so, we keep only those packages there.

However we have dev dependency when we build our application in local and want to streamline our building application smooth so, we use this. Like configuring the moongoose to detect the changes
in files and without restrarting the server it's quickly detect it and run the application.
So, we don't need moongoose in dependency section

"parcel": "^2.15.4"
^-> This symbol is called as carret. 2 here is major, 15 is minor, and 4 is patches.
This symbol will download the minor version of the package.
~-> This symbol is called as tilte. If we put the ~ then it's automatically download the major version which might break our application because it's might contain the sweepting changes in the package.


package-lock.json keep and lock the version of dependency and keep the exact version which is installed in the project.

Once we installed the parcel we can see we have lot's of files got added in node_modules.
So, other than parcel those packages are the transitive dependencies as parcel internally depedent on this packages to work smoothly.

npx parcel index.html bundles our app and run it on server

#Parcel
-> create server
-> hot module replacement
-> dev build
-> file watching algorithm written in c++
-> creating cache - faster build
-> image optimization
-> bundling
-> minification
-> compression reducing spaces
-> consistent hashing
-> code splitting
-> differntial bundling-> supports older browser
-> diagonstic
-> error handling
-> host app in https
-> tree shaking-remove unused code
-> different dev and prod bundles

npx parcel build index.html production build command

amazing documentation on parcel one of best documentation
https://parceljs.org/

we can use the browserlist to make our application supported for older version
we need to configure in package.json file to support the browsers for which versions to support


we can create a script to start our devlopment build.
we can create a script to start our production build.

npm run start is exactly similar to npm start
start is a keyword reserved by npm.

if we do npm build it won't start the production build.

npm run build to start the prod build.

const parent2 = React.createElement("div", {id: 'parent'},
    React.createElement("div", {id: 'child'},   
        [React.createElement("h1", {key: 0}, "Namaste React Js!"),
        React.createElement("h1", {key: 1}, "Going to be learned by geekySpyder")]
    )
);

writing this way React elements is core of creating elements and tags in React Js.

however this is so clumsy to write and if we have to write even a small code we need to write lot's of code.

to overcome this JSX was introduced.

Javascript syntax is not part of React. JSX is different React is different.
JSX is different than HTML. 
JSX is not html inside javascript. JSX is like html or XML syntax.

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

this jsxHeading is similar to how we have written above React.createElement

React.createElement('h1', {id: "heading"}, "Namaste React ");

JS engine will understand the EMCA script 6 not this JSX syntax.

So, how are code is being understood by the JS we have something as parcel which is doing the things for us.

JSX( is transpiled before it reaches the JS engine.)
This code get convert into JS so, that broweser can understand the code.
And it's Babel is a package which does this behind the scene.

React.createElement => ReactElement-JS Object => HTMLElement(render)

// JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)

// Since JSX is HTML like syntax however in html if we have to provide class we give 
class="heading" however in JSX we follow className="heading" which get converted into respective 
tag and class attributes gets applied to it.
If we have to provide the attributes in JSX we give it in camel casing.

If we have to write JSX in single line then this is perfectly valid syntax
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>
however, if we have to write it in multiple line then we write it inside round braces.

React Components
Class based Components => It follows class structure 
Functional Components => It follows function structure


JSX also santitizes the code to prevent the cross site scripting attack. So, we don't need to work
what codes goes behind the {} curly braces.


we can also call the React element and React functional component inside the JSX {};

