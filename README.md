# Setup
Start a terminal and move to folder for code

Clone this repo and go into that folder

Install project dependencies

```shell
cd ~/work
git clone git@github.com:christnil/javascript-test.git
cd javascript-test
yarn install
```

To run tests

```shell
yarn test
```

To run code, runs code from src/index.js

```shell
yarn start
```

# Tests
Command `yarn test` runs tests from all files under a test directory that has `.spec.`in the name.

to skip tests put `x` infront of `describe` or `ìt` in test file. Will be marked as pending in output. 

# js modules (import/export)
If import referrs to file it imports from that file, if it refers to a directory it imports from index.js in that directory.

Named and default exports can be used at the same time.

## Default

src/a.js
```javascript
function logHello() {
  console.log('hello');
}
export default logHello;
```

src/b.js
```javascript
import logHello from './a';

logHello(); // hello
```

src/c.js
```javascript
import logFoo from './a'; // also works name not important when default

logFoo(); // hello
```

## Named

src/a.js
```javascript
export const PI = 3.14;
export const E = 2.7;
```

src/b.js
```javascript
import { PI } from './a'; // name has to be same as export
console.log(PI) // 3.14
```

src/c.js
```javascript
import { PI, E } from './a'; // multiple as once
console.log(PI) // 3.14
console.log(E) // 2.7
```

src/c.js
```javascript
import * as asd from './a'; // import all and put in object
console.log(asd.PI) // 3.14
console.log(asd.E) // 2.7
```