## React's Virtual DOM and Efficient UI Updates

React employs a clever technique called the Virtual DOM. This in-memory representation mirrors the actual DOM structure but resides in memory. React compares the current and updated Virtual DOM trees to identify the minimal changes required in the real DOM. This process, known as reconciliation, optimizes performance by minimizing unnecessary DOM manipulations. Both React DOM (web) and React Native (mobile) leverage reconciliation to construct efficient UIs.

**Search Terms:**

- Transpiler plugin: Transforms modern JavaScript syntax (e.g., arrow functions, classes) into code compatible with older browsers.
- Polyfill: Provides browser fallback functionality for features not natively supported.

## Creating Modern React Projects

While `create-react-app` was a popular starting point, the recommendation has shifted towards more robust frameworks like:

- **Next.js:** Ideal for server-side rendering (SSR) and static site generation (SSG) for SEO and speed.
- **Remix:** Offers a full-stack web framework with data fetching, routing, and code-splitting for enhanced performance.
- **Gatsby:** Specialized in creating blazing-fast static websites using React and GraphQL.

For simpler projects, consider Vite:

- **Lightweight:** Vite boasts a streamlined development server for a quicker experience.
- **Preconfigured:** Vite comes pre-configured with essential setup, eliminating manual configuration steps.

**Installing Vite:**

1. Install Vite globally:

   ```bash
   npm install -g create-vite
   ```

2. Create a new React TypeScript project:

   ```bash
   create-vite my-react-app --template react-ts
   ```

3. Navigate to the project directory:

   ```bash
   cd my-react-app
   npm install
   npm run dev
   ```

4 . Optional: Changing Development Port

To modify the development server port to 3000, edit vite.config.ts and adjust the port property accordingly.

## Introducing TypeScript

TypeScript’s features

### Defining types: (Good practice, put the letter “T” in front of the declared types)

```Typescript
type TUser = {
    username: string,
    email: string,
    age?: number // optional property
}
```

### Defining Interfaces (An interface can also be extended, implemented, and merged):

```Typescript
type IUser = {
    username: string,
    email: string,
    age?: number // optional property
}
```

### Extending interfaces and types

```Typescript
// Extending an interface
interface IWork {
    company: string
    position: string
}

interface IPerson extends IWork {
    name: string
    age: number
}

// Extending a type
type TWork = {
    company: string
    position: string
}

type TPerson = TWork & {
    name: string
    age: number
}

// Extending an interface into a type
interface IWork {
    company: string
    position: string
}

type TPerson = IWork & {
    name: string
    age: number
}
```

### Implementing interfaces and types. (There is a limitation, you can't implement an interface ou type that is a union of 2 types ou interfaces )

```Typescript
// Implementing an interface
interface IWork {
    company: string,
    position: string
}

class Person implements IWork {
    name: 'Carlos',
    age: 35
}

// Implementing a type
type TWork = {
    company: string,
    position: string
}

class Person2 implements TWork {
    name: 'Cristina',
    age: 34
}
```

### Merging interface:

Unlike a type, an interface can be defined multiple times and will be treated as a single interface (all declarations will be merged.

```Typescript
interface IUser {
    username: string
    email: string
    name: string
    age?: number
    website: string
    active: boolean
}

interface IUser {
    country: string
}
```

### Enums

```Typescript
export enum Colors {
	V050 = “#333333”,
	V100 = “#666666”
}
```

### Namespaces

Namespaces provide a mechanism for organizing code within a module or project. They help to prevent naming conflicts, especially when working with large codebases or collaborating with other developers.

1. Utility Functions:

```Typescript
namespace Utils {
  export function formatDate(date: Date): string {
    // Date formatting logic here
  }

  export function calculateDiscount(price: number, discount: number): number {
    // Discount calculation logic here
  }
}

// Usage in another file
import { formatDate, calculateDiscount } from './Utils';
```

2. UI Component Styles:
   For larger projects, consider using namespaces to organize styles for specific UI components.

```Typescript
// Button.tsx

import styled from 'styled-components';

namespace ButtonStyles {
  export const Button = styled.button`
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  `;
}

// Usage within the Button component
const MyButton = () => {
  return <ButtonStyles.Button>Click Me</ButtonStyles.Button>;
};
```

### Template literals

```Typescript
 type Theme = 'light' | 'dark'
```

### TypeScript configuration file

You can extend your tsconfig.json pointing to other file and separate common stuff specific things of a project.

```Typescript
{
    "extends": "./tsconfig.common.json",
    "compilerOptions": {
        "baseUrl": "./packages",
        "paths": {
            "@web-creator/*": ["*/src"]
        }
    }
}
```

## Cleaning up your code

### Babel

Babel is a popular JavaScript compiler widely used in the React
community. It allows developers to write code using the latest language
features, such as JSX and ES6, that may not yet be supported in all
browsers.

To install Babel, follow these steps:

1. Install the required packages globally (although local installations are
   generally preferred):

```Bash
npm install -g @babel/core @babel/node
```

2. To compile a JavaScript file using Babel, run:

```Bash
babel source.js -o output.js]
```

3. Babel is highly configurable, and you can customize it using presets.
   To install the most common presets, run:

```Bash
npm install -g @babel/preset-env @babel/pres
```

4. Create a .babelrc configuration file in your project’s root directory
   and add the following content to tell Babel to use the installed presets:

```JSON
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

Now, you can write ES6 and JSX in your source files, and Babel will
transpile them into browser-compatible ES5 JavaScript code.

### DOM elements and React components

1. Transpiled JSX

```Javascript
_jsx("img", {
    src: "https://www.ranchosanpancho.com/images/”,
    alt: "Cabañas San Pancho"
})
```

2. Children

```Javascript
<div>
    <a href="https://ranchosanpancho.com">Click me!</a>
</div>
_jsx( "div", null, _jsx( "a", { href: "https://ranchosanpancho.com" }, "Click me!" ))
```

3. Attributes
   We must always keep in mind that JSX is not a standard language and that
   it gets transpiled into JavaScript. Because of this, some attributes cannot be
   used.
   For example, instead of class, we have to use className, and instead
   of for, we have to use htmlFor.

```Javascript
//Style
const styles = {
    backgroundColor: 'red'
}
<div style={styles} />
```

4. Root
   One important difference with HTML worth mentioning is that since JSX
   elements get translated into JavaScript functions, and you cannot return two
   functions in JavaScript.
   React now has a new feature called Fragment that also works as a
   special wrapper for elements. It can be specified with React.Fragment

```Javascript
import { Fragment } from 'react'
return (
 <Fragment>
 	<h1>An h1 heading</h1>
 Some text here.
 	<h2>An h2 heading</h2>
 	More text here.
 	Even more text here.
 </Fragment>
)
```

or

```Javascript
return (
 <>
 	<ComponentA />
    <ComponentB />
 	<ComponentC />
 </>
)
```

5. Spaces
   Using an empty string wrapped inside a JavaScript expression to force the compiler to apply a space.

```Javascript
<div>
<span>My</span>
 	{' '}
    name is
 	{' '}
 	<span>Carlos</span>
</div>
```

6. Spread Attributes

```Javascript
const attrs = {
	id: 'myId',
	className: 'myClass'
}
return <div {...attrs} />
```

7. Template literals

```Javascript
const name = 'Carlos';
const message = `Hello, my name is ${name};
console.log(message)
```

8. Conditionals

```Javascript
<div>
    {isLoggedIn && <LoginButton />}
</div>
```

```Javascript
<div>
    {isLoggedIn ? <LogoutButton /> : <LoginButton}
</div>
```

Using helper function:

```Javascript
const MyComponent = ({ dataIsReady, isAdmin, userHasPermission => {
    const canShowSecretData = () => {
        return dataIsReady && (isAdmin || userHasPermission)
    }

 	return (
        <div>
            {canShowSecretData() && <SecretData />}
        </div>
 	)
}
```

Going back to conditional statements, we can create a custom component
and call it RenderIf to render our components conditionally:

```Javascript
import React, { FC, ReactElement } from 'react';
interface Props {
    children: ReactElement | string
    isTrue?: Boolean
    isFalse?: Boolean
}

const RenderIf: FC<Props> = ({ children, isTrue, isFalse => {
        if (isTrue === true) {
            return <>{children}</>
        }
        if (isFalse === false) {
            return <>{children}</>
        }
        return null;
    }
});
export default RenderIf;

import RenderIf from './RenderIf'
const MyComponent = ({ dataIsReady, isAdmin, userHasPermission => {
        return (
        <div>
            <RenderIf isTrue={dataIsReady && (isAdmin || userHasPermission)}>
                <SecretData />
            </RenderIf>
        </div>
        )
    }
});
```

9. Loops

```Javascript
<ul>
    {users.map(user => <li>{user.name}</li>)}
</ul>
```

## Coding style

1. EditorConfig.
   EditorConfig helps developers to maintain consistent coding styles between different IDEs. You need to create a file called .editorconfig in your root directory.

```
root = true
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
[*.html]
indent_size = 4
[*.css]
indent_size = 4
[*.md]
trim_trailing_whitespace = false
```

2. Prettier.
   Prettier is an opinionated code formatter, supported by many languages, that can be integrated with most editors.

File .prettierrc

```JSON
{
    "arrowParens": "avoid",
    "bracketSpacing": true,
    "jsxSingleQuote": false,
    "printWidth": 100,
    "quoteProps": "as-needed",
    "semi": false,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "none",
    "useTabs": false
}
```

If you want to apply the configuration to "format on save" in a specific project, you have to create a .vscode folder inside your project and a settings.json file with the following
code:

```JSON
{
 "editor.defaultFormatter": "esbenp.prettier-vscode",
 "editor.formatOnSave": true
}
```

3. ESLint
   A linter not only helps us catch errors sooner, but it also enforces common coding style guides, which is particularly important in large teams where consistency is key.

```Bash
npm install --save-dev eslint eslint-config-airbnb
```

Configuration file example (.eslintrc):

```JSON
{
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint", "prettier"],
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "settings": {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "rules": {
        "semi": [2, "never"], // Adjust semicolon style as needed
        "@typescript-eslint/class-name-casing": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-module-boundary": "off",
        "no-restricted-syntax": "off", // Review documentation for this rule
        "no-use-before-define": "off", // Consider enabling for better clarity
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "max-len": [
            "error",
            {
                "code": 120,
                "tabWidth": 4
            }
        ], // Adjust line length and tab width if needed
        "no-param-reassign": "off", // Use with caution
        "no-underscore-dangle": "off", // Consider potential naming conflicts
        "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
        "import/no-unresolved": "off",
        "consistent-return": "off", // Consider enabling for better code clarity
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "react/jsx-props-no-spreading": "off", // Consider for better prop management
        "jsx-a11y/label-has-associated-control": "off",
        "react/jsx-one-expression-per-line": "off",
        "no-prototype-builtins": "off", // Use with caution
        "no-nested-ternary": "off",
        "prettier/prettier": [2, { "endOfLine": "auto" }] // Set prettier rule severity to error
    }
}
```

### Git hooks

To avoid having unlinted code in our repository, what we can do is add ESLint at one point of our process using Git Hooks. To do this one way is to use "husky" and configure a git hook on pre-commit.

## Functional Programming

### First-class functions

HoFs (High order Fucntions) are functions that take a function as a parameter, and optionally some other parameters, and return a function. The returned function is usually enhanced with some special behaviors.

```Javascript
const add = (x, y) => x + y
const log = fn => (...args) => {
    return fn(...args)
}
const logAdd = log(add)
```

### Purity

A function is pure when there are no side effects, which means that the function does not change anything that is not local to the function itself.

```Javascript
//Impure example, because it changes the global variable
let x = 0
const add = y => (x = x + y)
```

### Immutability

In FP, a function, instead of changing the value of a variable, creates a new variable with a new value and returns it.

```Javascript
const add3 = arr => arr.concat(3)
const myArr = [1, 2]
const result1 = add3(myArr) // [1, 2, 3]
const result2 = add3(myArr) // [1, 2, 3]
```

### Currying

Currying is the process of converting a function that takes multiple arguments into a function one argument at a time and returning another function. Let’s look at an example to clarify the concept.

```Javascript
const add = x => y => x + y

const add1 = add(1)
add1(2); // 3
add1(3); // 4
```

### Composition

Functions (and components) can be combined to produce new functions with more advanced features and properties.

```Javascript
const add = (x, y) => x + y
const square = x => x * x
const addAndSquare = (x, y) => square(add(x, y))
```

## Exploring Popular Composition Patterns

### Communicating components

Composing React components is straightforward; you just have to include them in the render:

```Javascript
const Profile = ({ user }) => (
    <>
        <Picture profileImageUrl={user.profileImage}/>
        <UserName name={user.name} screenName={user.screenName}/>
    </>
)
```

Whenever you compose components, as in the preceding example, you share data between them using props.

### Using the children prop

By passing the children prop, we are not limited to a simple single text property, but we can pass any element to Button, and it is rendered in place of the children property.

```Javascript
const Button = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
```

### Exploring the container and presentational patterns

The container knows everything about the logic of the component and is where the APIs are called. It also deals with data manipulation and event handling. The presentational component is where the UI is defined, and it receives data in the form of props from the container. Since the presentational component is usually logic-free, we can create it as a functional, stateless component.

GeolocationContainer.tsx

```Javascript
import { useState, useEffect } from 'react'

const GeolocationContainer = () => {
    const [latitude, setLatitude] = useState<number | null>|(null)
    const [longitude, setLongitude] = useState<number | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleSuccess = (position: GeolocationPosition) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setError(null); // Clear any previous error
    };

    const handleError = (error: GeolocationPositionError) => {
        setError(`Error getting geolocation: ${error.message}`); // Informative error message
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
        } else {
            setError('Geolocation is not supported by your browser.');
        }
        // Dependency array: Only run when navigator changes
    }, [navigator])

    return <Geolocation latitude={latitude} longitude={longitude} error={error}/>
}

export default GeolocationContainer
```

Geolocation.tsx

```Javascript
import { FC } from 'react'

type Props = {
    latitude: number | null
    longitude: number | null
    error: string | null
}

const Geolocation: FC<Props> = ({ latitude, longitude, error }) => {
    if (!latitude && !longitude && !error) {
        return <p>Loading geolocation data...</p>;
    } else if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Geolocation:</h1>
            <div>Latitude: {latitude}</div>
            <div>Longitude: {longitude}</div>
        </div>
    )
}
export default Geolocation
```

### Understanding HOCs

Suppose you need to attach the same className property to every component. You could manually add the className property to each render method, or you could write an HOC like this:

```Javascript
const withClassName = Component => props => (
    <Component {...props} className="my-class" />
)
```

A more usefull example:

```Javascript
import { useEffect, useState } from 'react'

const withInnerWidth = Component => props => {
    const [innerWidth, setInnerWidth] = useState(null)

    const handleResize = () => {
        setInnerWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize())
        return () => {
            window.removeEventListener('resize', handleResize())
        }
    }, [])

    return <Component {...props} innerWidth={innerWidth}/>
}
```

```Javascript
const MyComponent = ({title}) => {
    return (
        <>
            <p>{title}</p>
        </>
    )
}

const MyComponentWithInnerWidth = withInnerWidth(MyComponent);
```

### Understanding FunctionAsChild

The main concept is that instead of passing a child as a component, we define a function that can receive parameters from the parent.

```Javascript
const DataTable = ({ data, rowFormatter }) => {
  return (
    <table>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{rowFormatter(row)}</td> {/* Call the formatter function on each row */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function App() {
  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
  ];

  const formatRow = (row) => (
    <>
      {row.name} ({row.age})
    </>
  );

  return (
    <div>
      <DataTable data={data} rowFormatter={formatRow} />
    </div>
  );
}
```

```Javascript
const Name = ({ children }) => children('World')

<Name>
    {name => <div>Hello ${name}</div>}
</Name>
```

## Writing Code for the Browser

## Uncontrolled components

Uncontrolled components are like regular HTML form inputs for which you will not be able to manage the value yourself but instead, the DOM will take care of handling the value and you can get this value by using a React
ref.

```Javascript
import { FC, useState, ChangeEvent, MouseEvent } from "React"

const Uncontrolled: FC = () => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputEvent>) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonEvent>) => {
        e.preventDefault() // Overcome the default behavior of the browser
        console.log(value) // Here we are logging the
    }

    return (
        <form>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
export default Uncontrolled
```

If you want to controll more fields with just one handle we can improve this solution in the following way:

```Javascript
const Uncontrolled: FC = () => {
    const [values, setValues] = useState({ firstName: "", lastName: ""});

    const handleChange = ({ target: { name, value }}) => {
        setValues({
            ...values, // This line makes a copy of the existing properties in this new value
            [name]: value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="firstName"
            onChange={handleChange}
            />
            <input
            type="text"
            name="lastName"
            onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}
```

### Controlled components

A controlled component is a React component that controls the values of input elements in a form by using the component state.

```Javascript
const Controlled = () => {
    const [values, setValues] = useState({ firstName: "", lastName: ""});

    const handleChange = ({ target: { name, value }}) => {
        setValues({
            ...value,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`${values.firstName} ${values.lastName}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            />
            <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}
```

The first time the form is rendered, React uses the initial values from the state as the value of the input fields. When the user types something into the field, the handleChange function is called and the new value for the field is stored in the state.

When the state changes, React re-renders the component and uses it again to reflect the current values of the input fields. We now have full control over the values of the fields, and we call this pattern controlled
components.

### Handling events

```Javascript
const Button = () => {
    const handleClick = (syntheticEvent) => {
        console.log(syntheticEvent instanceof MouseEvent);
        console.log(syntheticEvent.nativeEvent); // Property that holds the native event from browser
    }

    return (
        <button onClick={handleClick}>Click me!</button>
    )
}
export default Button
```

Remember that we always aim to write less boilerplate and avoid duplicating code. For that reason, a common practice is to write a single event handler for each component, which can trigger different actions according to the event type.

```Javascript
const handleEvent = (event) => {
    switch (event.type) {
        case 'click':
            console.log('clicked')
            break

        case 'dblclick':
            console.log('double clicked')
            break

        default:
            console.log('unhandled', event.type)
    }
}

return (
    <button
    onClick={handleEvent}
    onDoubleClick={handleEvent}
    >
    Click me!
    </button>
)
```

Synthetic events are a single global handler and it becomes null right after the action, if you want to persist this event in a state to use later, React gives us a persist method on the synthetic events, which we can call to make the event persistent so that we can store it and retrieve it later.

React attaches a single event handler to the root element, which listens to all the events, thanks to event bubbling. When an event we are interested in is fired by the browser, React calls the handler on the specific components on its behalf. This technique is called event delegation and is used for memory and speed optimization.

### Explorgin refs

Suppose we want to create a simple form with an input element and a button, and we want it to behave in such a way that when the button is clicked, the input field gets focused. What we want to do is call the focus method on the input node, the actual DOM instance of the input, inside the browser’s window.

```Javascript
import { useRef } from 'react'
const Focus = () => {
    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <input
            type="text"
            ref={inputRef}
            />
            <button onClick={handleClick}>Set Focus</button>
        </>
    )
}
export default Focus
```

### Understanding forwardRef

React.forwardRef is a useful feature that allows you to pass a ref (short for “reference”) from a parent component down to a child component.

The reference must be created at the parent component and passed to its child, which shoud be created using React.forwardRef.

```Javascript
import React from 'react'
const TextInputWithRef = React.forwardRef((props, ref) => {
    return <input ref={ref} type="text" {...props} />
})
export default TextInputWithRef
//#############################################################################
import React, { useRef } from 'react'
import TextInputWithRef from './TextInputWithRef'

function App() {
    const inputRef = useRef()
    const handleClick = () => {
        inputRef.current.focus()
    }

    return (
        <div>
        <TextInputWithRef ref={inputRef} />
        <button onClick={handleClick}>Focus on input</button>
        </div>
    )
}
export default App
```

### Implementing animations

For a UI library such as React, it is crucial to provide an easy way for developers to create and manage animations. React comes with an add-on, called react-transition-group.

Install de add-on:

```Bash
npm install react-transition-group --save
```

```Javascript
import { TransitionGroup} from 'react-transition-group'

const Transition = () => (
    <TransitionGroup
    transitionName="fade"
    transitionAppear
    transitionAppearTimeout={500}
    >
        <h1>Hello React</h1>
    </TransitionGroup>
)
```

### Exploring SVG

```Javascript
const Circle = ({ x, y, radius, fill }) => (
    <svg>
        <circle cx={x} cy={y} r={radius} fill={fill}/>
    </svg>
)

//With default values
const Circle = ({ x, y, radius, fill = 'red' }) => (
    <svg>
        <circle cx={x} cy={y} r={radius} fill={fill}/>
    </svg>
)

//With fixed values
const RedCircle = ({ x, y, radius }) => (
 <Circle x={x} y={y} radius={radius} fill="red"/>
)
```

## Making Your Components Look Beautiful

### Understanding and implementing inline styles

The official React documentation suggests developers use inline styles to style their React components.

React tries to change the concept of separation of concerns by moving it from the separation of technologies to the separation of components. Separating markup, styling, and logic into different files when they are tightly coupled and where one cannot work without the other is just an illusion.

```Javascript
const style = {
 color: 'palevioletred',
 backgroundColor: 'papayawhip'
}

const Button = () => <button style={style}>Click Me!</button>
```

The only differences are that the hyphenated CSS rules must be camelCased to be JavaScript-compliant, and the values are strings, so they have to be wrapped in quote marks.

Other use cases are numbers – they can be written without quotes or units of measurement, and by default, they are treated as pixels.

```Javascript
import { useState, ChangeEvent } from 'react'
const FontSize = () => {
    const [value, setValue] = useState<number>(16)

    const handleChange = (e: ChangeEvent<HTMLInputEvent>) => {
        setValue(Number(e.target.value))
    }

    return (
        <input
        type="number"
        value={value}
        onChange={handleChange}
        style={{ fontSize: value }}
        />
    )
}
export default FontSize
```

Inline CSS has some limitations, mainly if you dealing with a big project that need a lot of styling. In this case, inline styles cause more problems than the problems they try to solve.

### Using CSS modules

If you feel that inline styles are not a suitable solution for your project and your team, but you still want to keep the styles as close as possible to your components, there is a solution for you, called CSS modules, but first, we need to configure webpack.

#### Webpack 5

In the React world, Webpack is especially popular because it offers many interesting and useful features, with the first one being the concept of loaders.

#### Setting up a project

The first thing to do is move to an empty folder and run the following command:

```Bash
npm init
```

This will create a package.json file with some defaults. Now, it is time to install the dependencies. which we will use to run the application locally and to create the bundle on the fly.

```Bash
npm install --save-dev webpack webpack-dev-server
```

it is time to install Babel and its loader. Since we are using Webpack to create the bundle, we will use the Babel loader to transpile our ES6 code within Webpack itself.

```Bash
npm install --save-dev @babel/core @babel/preset-env
```

Finally, we install style-loader and the CSS loader, which are the two loaders we need to enable the CSS modules.

```Bash
npm install --save-dev style-loader css-loader
```

We need to to install html-webpack-plugin, which is a plugin that can create an HTML page to host our JavaScript application on the fly. Also, we need to install the fork-ts-checker-webpack-plugin package to make TypeScript work with Webpack.

```Bash
npm install --save-dev html-webpack-plugin fork-ts-checker-webpack-plugin
```

First, you need to create a **.babelrc** file in your root path (This file allows you to define presets, plugins, and other options for Babel).

```Javascript
{
 "presets": ["@babel/preset-env"]
}
```

The first thing to do is add an npm script in **package.json** to run the webpack-dev-server, which will serve the application in development:

```Javascript
"scripts": {
 "dev": "webpack serve --mode development --port 8080"
}
```

Webpack needs a configuration file to know how to handle the different types of dependencies we are using in our application, and to do so, we must create a file called **webpack.config.ts**

```Javascript
import { Configuration as WebpackConfiguration } from 'webpack';

const config: WebpackConfiguration = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader?modules=true'
                ]
            }
        ]
    }
}

export default config;
```

That is a full file.

```Javascript
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import isProduction from 'webpack-is-production';

module.exports = {
  devtool: !isProduction ? 'source-map' : false, // Only for development
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  target: 'web',
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // Remove or adjust transpileOnly as needed
            // transpileOnly: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules=true'],
      },
      // Add rules for other file types (Babel loader, etc.) if needed
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Your project name',
      template: './src/index.xhtml',
      filename: './index.xhtml',
    }),
  ],
  optimization: { // This is to split our bundle
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
};
```

Then, to configure TypeScript, you need this tsconfig.json file:

```Javascript
{
    "compilerOptions": {
        "allowJs": true,
        "allowSyntheticDefaultImports": true,
        "baseUrl": "src",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "isolatedModules": true,
        "jsx": "react-jsx",
        "lib": ["dom", "dom.iterable", "esnext"],
        "module": "esnext",
        "moduleResolution": "node",
        "noEmit": true,
        "noFallthroughCasesInSwitch": true,
        "noImplicitAny": false,
        "resolveJsonModule": true,
        "skipLibCheck": true,
        "sourceMap": true,
        "strict": true,
        "target": "esnext"
    },
    "include": ["src/**/*.ts", "src/**/*.tsx"],
    "exclude": ["node_modules"]
}
```

In order to import CSS files using TypeScript, you need to create a declarations file at src/declarations.d.ts:

```Javascript
declare module '*.css' {
    const content: Record<string, string>
    export default content
}
```

### Locally scoped CSS

CSS modules are regular CSS, so we can use pseudo-classes, media queries, and animations.

```Javascript
import styles from './index.css'

const Button = () => (
 <button className={styles.button}>Click me!</button>
);
```

If we go back to the browser, we can now see that the styles we defined in index.css have been applied to the button.

```Javascript
<button class="_2wpxM3yizfwbWee6k0UlD4">Click me!</button>
```

If we look at the header section of the page, we can now see that the same class name has also been injected into the page.

As mentioned at the beginning of this chapter, CSS is global, and that makes it very hard to maintain in large applications. With CSS modules, class names are locally scoped, and they cannot clash with other class names in different parts of the application, enforcing a deterministic result.

As you may have noticed, those class names are great, but they make debugging pretty hard because we cannot easily tell which classes generated the hash. What we can do in development mode is add a special configuration parameter, with which we can choose the pattern that’s used to produce the scoped class names.

```Javascript
{
    test: /\.css/,
    use: [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: '[local]--[hash:base64:5]'
                }
            }
        }
    ]
}
```

In production, we may want to extract the CSS file instead of injecting it into the browser from the bundle so that we can have a lighter bundle and cache the CSS on a **Content Delivery Network (CDN)** for better performance.

To do that, you need to install another Webpack plugin, called **mini-css-extract-plugin**.

There are a couple of features of CSS modules that are worth mentioning. The first one is the **global** keyword. Prefixing any class with **:global**, in fact, means asking CSS modules not to scope the current selector locally.

```css
:global .button {
  ...;
}
```

The output will be as follows:

```css
.button {
  ...;
}
```

This is good if you want to apply styles that cannot be scoped locally, such as third-party widgets.

My favorite feature of CSS modules is composition. With composition, we can extract classes from the same file or external dependencies and get all the styles applied to the element.

```css
.background-red {
  background-color: #ff0000;
}

.button {
  composes: background-red;
  width: 320px;
  padding: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
}
```

All the composed class names are applied one after the other on the component in the DOM.

### Atomic CSS modules (Functional CSS)

Atomic CSS is a way to use CSS where every class has a single rule.

For example, we can create a class to set margin-bottom to 0.

```css
.mb0 {
  margin-bottom: 0;
}
```

Atomic CSS modules, in essence, is the approuch to create your base CSS classes (for example, mb0), and then, instead of applying the class names one by one in the markup, you compose them into placeholder classes using CSS modules.

```css
.title {
    composes: mb0 fw6;
}

<h2 className={styles.title}>Hello React</h2>
```

### Implementing styled-components

First, we have to install the library by running the following command:

```Bash
npm install styled-components
```

Once the library is installed, we have to import it inside our component’s file:

```Javascript
import styled from 'styled-components'
```

Let’s start by creating a simple button with a basic styling:

```Javascript
const Button = styled.button`
    backgroundColor: #ff0000;
    width: 320px;
    padding: 20px;
    borderRadius: 5px;
    border: none;
    outline: none;
`;
```

This kind-of-weird syntax returns a proper React component called Button, which renders a button element and applies to it all the styles defined in the template. The way the styles are applied is by creating a unique class name, adding it to the element, and then injecting the corresponding style in the head of the document.

The following is the component that gets rendered:

```Javascript
<button class="kYvFOg">Click me!</button>
```

The style that gets added to the page is as follows:

```css
.kYvFOg {
  background-color: #ff0000;
  width: 320px;
  padding: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
}
```

It supports pseudo-classes and media-queries.

You can easily override its styles and use it multiple times with different properties. Inside the templates, it is also possible to use the props that the component received and change the style accordingly.

Another great feature is theming. By wrapping your components in a ThemeProvider component, you can inject a theme property down to the three component’s children, which makes it extremely easy to create UIs where part of the style is shared between components and some other properties depend on the currently selected theme.

## Anti-Patterns to Be Avoided

### Initializing the state using properties

In this section, we will see how initializing the state using properties received from the parent is usually an anti-pattern. Once we have it clear in our mind what the problems with this approach are, we might still decide to use it.

```Javascript
import { FC, useState } from 'react'
type Props = {
    count: number
}
const Counter: FC<Props> = (props) => {
    const [state, setState] = useState<number>(props.count)

    const handleClick = () => {
        setState({ count: state.count + 1 })
    }

    return (
        <div>
            {state.count}
            <button onClick={handleClick}>+</button>
        </div>
    )
}
export default Counter
```

Rendering the component

```Javascript
<Counter count={1} />
```

There are two main errors, which are outlined as follows:

1 - We have a duplicated source of truth.
2 - If the count property passed to the component changes, the state does not get updated.

If we inspect the Counter element using the React DevTools, we notice that Props and State hold a similar value.

This makes it unclear which is the current and trustworthy value to use inside the component and to display to the user.
Even worse, clicking + once makes the values diverge. An example of this divergence is shown in the following code.

```Javascript
<Counter>
    Props
        count: 1
    State
        count: 2
```

In our Counter component, we read the value of the count property and we store it in the state. If the value of that property changes during the life cycle of the application (let’s say it becomes 10), the Counter component will never use the new value because it has already been initialized. This puts the component in an inconsistent state, which is not optimal and hard to debug.

In that case, it’s best practice to make it explicit and give the property a name that makes your intentions clear, such as initialCount. For example, let’s say we change the prop declaration of the Counter component in the following way:

```Javascript
type Props = {
    initialCount: number
}

const Counter: FC<Props> = (props) => {
    const [count, setState] = useState<Count>({ count: props.initialCount })
 ...
}

<Counter initialCount={1} />
```

This usage makes it clear that the parent can only initialize the counter, and any subsequent values of the initialCount property will be disregarded.

### Using indexes as a key

The key property uniquely identifies an element in the DOM and React uses it to check whether the element is new or whether it must be updated when the component properties or state change.

```Javascript
import { FC, useState } from 'react'
const List: FC = () => {
    const [items, setItems] = useState(['foo', 'bar'])

    const handleClick = () => {
        const newItems = items.slice()
        newItems.unshift('baz')
        setItems(newItems)
    }

    return (
    <div>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <input type="text" />
                </li>
            ))}
        </ul>
        <button onClick={handleClick}>+</button>
    </div>
    )

}
export default List
```

In fact, the index always starts from 0, even if we push a new item to the top of the list, so React thinks that we changed the values of the existing two and added a new element at index 2. The behavior is the same as it would have been without using the key property at all.

To solve this problem, we can, for example, use the value of the item if we expect it not to be repeated within the list, or create a unique identifier, for example:

```Javascript
{items.map((item, index) => (
    <li key={`${item}-${index}`}>
        {item}
        <input type="text" />
    </li>
 ))}
```

### Spreading properties on DOM elements

We usually spread the properties to the elements to avoid writing every single one manually, which is shown as follows:

```Javascript
<Component {...props} />
```

The problem is not related only to the Spread operator; passing non-standard properties one by one leads to the same issues and warnings. Since the Spread operator hides the single properties we are spreading, it is even harder to figure out what we are passing to the element.

```Javascript
const Spread = props => <div foo='bar' {...props} />;
```

One solution we can use to solve this problem is to create a property called domProps that we can spread safely to the component because we are explicitly saying that it contains valid DOM properties.

```Javascript
const Spread = props => <div {...props.domProp}></div>
```

We can then use it as follows:

```Javascript
<Spread foo="bar" domProps={{ className: 'baz'}}>
```

## React Hooks

### Using the State Hook

```Javascript
import { useState } from 'react'

type Operation = 'add' | 'substract'
const Counter = () => {
    const [counter, setCounter] = useState<number>()

    const handleCounter = (operation: Operation) {
        if (operation === 'add') {
            return setCounter(counter + 1)
        }
        setCounter(counter - 1)
    }

    return (
        <p>
            Counter: {counter} <br />
            <button onClick={() => handleCounter('add')>Add</button>
            <button onClick={() => handleCounter('substract')>Substract</button>
        </p>
    )
}
```

### Rules of Hooks

React provides a linter plugin to enforce those rules for you, which you can install by running the following command:

```Bash
npm install --save-dev eslint-plugin-react-hooks
```

#### Rule 1: Only call Hooks at the top level

To ensure the proper functioning of React Hooks, it is important to avoid calling them inside loops, conditions, or nested functions. Instead, it is recommended to always use Hooks at the top level of your React function.

#### Rule 2: Only call Hooks from React functions

To ensure that all stateful logic in a component is clearly visible from its source code, avoid calling Hooks from regular JavaScript functions

### Migrating a class component to React Hooks

The **FC** type is used to define a functional component in React. If you need to pass some props to the component, you can pass them like this:

```Javascript
import { FC, useState, useEffect } from 'react'

type Props = {
    propX: string
    propY: number
    propZ: boolean
}

const Issues: FC<Props> = () => {
    const [issues, setIssues] = useState<Issue[]>([])

    // When we use the useEffect hook with an empty
    // dependencies (second parameter)
    // this represents the componentDidMount method
    // component is mounted).
    useEffect(() => {
        axios
        .get('https://api.github.com/repos/ContentPi')
        .then((response: any) => {
            // Here we update directly our issue sta
            setIssues(response.data)
        })
    }, [])

    return (...)
}
```

### Understanding useEffect

The first parameter is the callback of the effect that you want to execute, and the second parameter is the dependencies array. If you pass an empty array ([]) to the dependencies, the state and props will have their original initial values.

However, it is important to mention that even though this is the closest equivalent to componentDidMount, it does not have the same behavior. Unlike componentDidMount and componentDidUpdate, the function that we pass to useEffect fires after layout and paint, during a deferred event. This normally works for many common side effects, such as setting up subscriptions and event handlers, because most types of work shouldn’t block the browser from updating the screen.

However, not all effects can be deferred. For example, you will get a blink if you need to mutate the Document Object Model (DOM). This is the reason why you must fire the event synchronously before the next paint. React provides one Hook called **useLayoutEffect**.

### Firing an effect conditionally

If you need to fire an effect conditionally, then you should add a dependency to the array of dependencies.

```Javascript
useEffect(() => {
// When you pass an array of dependencies the u
// run if one of the dependencies changes.
}, [dependencyA, dependencyB])
```

### Understanding useCallback, useMemo, and memo

Use the memo to memoize a component is a performance improvement to avoid rerender components the didn't had its props changed.

#### Memoizing a component with memo

The memo High-Order Component (HOC) is similar to PureComponent for a React class because it performs a shallow comparison of the props (meaning a superficial check), so if we try to render a component with the same props all the time, the component will render just once and will memoize. The only way to re-render the component is when a prop changes its value.

The first component we will fix is our List component, and you just need to affect import memo and wrap the component in export default:

```Javascript
import { FC, useEffect, memo } from 'react'
...
export default memo(List)
```

Then, you need to do the same with the Task component:

```Javascript
import { FC, useEffect, memo } from 'react'
...
export default memo(Task)
```

Now, we just get the first batch of renders the first time, and then, when we write Go, we just get two more renders of the App component, which is totally fine because the task state (input value) that we are changing is actually part of the App component.

It is not a good idea to add memo to all our components unless it is totally necessary; otherwise, the process of shallow comparisons and memorization will have inferior performance than if we don’t use it.

**Just don’t use it**. Normally, when we have small components or basic logic, we don’t need this unless you’re working with large data from some API, your component needs to perform a lot of renders (normally huge lists), or when you notice that your app is going slow. Only in that case would I recommend using memo.

### Memoizing a value with useMemo

The useMemo Hook will memoize the result (value) of a function and will have some dependencies to listen to. Let’s see how we can implement it:

```Javascript
import React, { useState, useMemo } from 'react';

function MyComponent() {
  const [todoList, setTodoList] = useState([
    { task: 'Buy groceries' },
    { task: 'Finish coding project' }
  ]);
  const [term, setTerm] = useState('');

  const filteredTodoList = useMemo(() => {
    console.log('Filtering...'); // This will only log when term or todoList changes
    return todoList.filter((todo) => todo.task.toLowerCase().includes(term.toLowerCase()));
  }, [term, todoList]);

  const handleSearchChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={term} onChange={handleSearchChange} placeholder="Search..." />
      <ul>
        {filteredTodoList.map((todo) => (
          <li key={todo.task}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
```

Here, we have to use the same rule that we used for memo; **just don’t use it** until absolutely necessary.

### Memoizing a function definition with useCallback

When you have to pass some function as a props to inner Components of your application, the function needs to be regenerated every time we have a new render.

The useCallback Hook is the hero in this case and is very similar to useMemo in the syntax, but the main difference is that instead of memorizing the result value of a function, as useMemo does, it is memorizing the function definition instead:

```Javascript
const handleDelete = useCallback((taskId: number) => {
    const newTodoList = todoList.filter((todo) => {todo.id != taskId})
    setTodoList(newTodoList)
}, [todoList])

<List todoList={filteredTodoList} handleDelete={handleDelete}/>
```

### Memoizing a function passed as an argument in effect

```Javascript

//If you add the totolist state to this function, you need to tell what dependencies you are using.
const printTodoList = useCallback(() => {
    console.log('Changing todoList', todoList)
}, [todoList])


useEffect(() => {
    printTodoList()
}, [todoList, printTodoList])

```

### Recap

- memo:
  - Memoizes a component
  - Re-memoizes when props change
  - Avoids re-renders
- useMemo:
  - Memoizes a calculated value
  - For computed properties
  - For heavy processes
- useCallback:
  - Memoizes a function definition to avoid redefining it on each render
  - Use it whenever a function is passed as an effect argument
  - Use it whenever a function is passed by props to a memoized component

And finally, do not forget the golden rule: Do not use them until absolutely necessary.

### Understanding the useReducer Hook

```Javascript
import React, { useState, useReducer } from 'react';

interface Note {
  id: string;
  content: string;
}

const initialState: Note[] = [];

const actionTypes = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE',
};

const reducer = (state: Note[], action: Action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [...state, { id: Math.random().toString(), content: action.payload }];
    case actionTypes.DELETE:
      return state.filter((note) => note.id !== action.payload.id);
    case actionTypes.UPDATE:
      const updatedNote = action.payload;
      return state.map((n: Note) => (n.id === updatedNote.id ? updatedNote : n));
    default:
      return state;
  }
};

const Notes = () => {
  const [notes, dispatch] = useReducer(reducer, initialState);
  const [note, setNote] = useState<string>('');

  const handleAddNote = () => {
    if (note) {
      dispatch({ type: actionTypes.ADD, payload: note });
      setNote(''); // Clear note input after adding
    }
  };

  const handleDeleteNote = (id: string) => {
    dispatch({ type: actionTypes.DELETE, payload: { id } });
  };

  const handleUpdateNote = (id: string) => {
    // Implement logic to get updated content, dispatch UPDATE action
  };

  return (
    <div>
      <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter a note" />
      <button onClick={handleAddNote}>Add Note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.content}
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            <button onClick={() => handleUpdateNote(note.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
```

## React Router
