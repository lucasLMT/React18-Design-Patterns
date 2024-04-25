## React's Virtual DOM and Efficient UI Updates

React employs a clever technique called the Virtual DOM. This in-memory representation mirrors the actual DOM structure but resides in memory. React compares the current and updated Virtual DOM trees to identify the minimal changes required in the real DOM. This process, known as reconciliation, optimizes performance by minimizing unnecessary DOM manipulations. Both React DOM (web) and React Native (mobile) leverage reconciliation to construct efficient UIs.

**Search Terms:**

* Transpiler plugin: Transforms modern JavaScript syntax (e.g., arrow functions, classes) into code compatible with older browsers.
* Polyfill: Provides browser fallback functionality for features not natively supported.

## Creating Modern React Projects

While `create-react-app` was a popular starting point, the recommendation has shifted towards more robust frameworks like:

* **Next.js:** Ideal for server-side rendering (SSR) and static site generation (SSG) for SEO and speed.
* **Remix:** Offers a full-stack web framework with data fetching, routing, and code-splitting for enhanced performance.
* **Gatsby:** Specialized in creating blazing-fast static websites using React and GraphQL.

For simpler projects, consider Vite:

* **Lightweight:** Vite boasts a streamlined development server for a quicker experience.
* **Preconfigured:** Vite comes pre-configured with essential setup, eliminating manual configuration steps.

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
    "semi": [2, "never"]
  }
}
```
