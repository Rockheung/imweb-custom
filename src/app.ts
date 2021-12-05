/// <reference types="webpack/module" />
console.log(import.meta.webpack); // without reference declared above, TypeScript will throw an error

import * as _ from "lodash";

console.log("hello", window.location.pathname, window.location.search);
const a = new Promise((res) => setTimeout(res, 3000));

async function main() {
  throw _.filter([5, 6, 7, 2, 5, 8, 9], (i) => i > 3);
}

main().catch(console.error);
