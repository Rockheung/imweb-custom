/// <reference types="webpack/module" />
console.log(import.meta.webpack); // without reference declared above, TypeScript will throw an error

import * as _ from "lodash";
import { mul } from "./lib";

console.log("hello", window.location.pathname, window.location.search);
const a = (v: any) => new Promise((res) => setTimeout(() => res(v), 3000));

async function main() {
  const sub = _.filter([5, 6, 7, 2, 5, 8, 9], (i) => i > 3);
  a(sub.reduce(mul)).then(console.log);
}

main().catch(console.error);
