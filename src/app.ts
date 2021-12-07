/// <reference types="webpack/module" />
console.log(import.meta.webpack); // without reference declared above, TypeScript will throw an error

import * as _ from "lodash";
import { isDev } from "./lib";

async function main() {
  const { pathname, searchParams } = new URL(window.location.href);
  switch (pathname) {
    case "/": {
      console.log(pathname);
      break;
    }
    default: {
      isDev && console.warn("Current path - ", pathname, "has no handled.");
    }
  }
}

main()
  .catch(console.error)
  .finally(() =>
    isDev ? console.log("Now Development") : console.log("Now Production")
  );
