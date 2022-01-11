# Generate declaration file with paths/aliases


If you will use typescript compiler to generate declaration with paths/aliases you will get a d.ts file like this:

``` TypeScript
import { AliasClass } from "@alias";
export declare class A {
    private readonly aliasClass;
    do(): AliasClass;
}

```

It seems like TypeScript compiler doesn't use this transformation:

``` JSON
"plugins": [
      {
        "transform": "typescript-transform-paths",
        "afterDeclarations": true
      }
    ]
```

Do apply those transformations you need to install [ts-patch](https://github.com/nonara/ts-patch) and it works!

``` TypeScript
import { AliasClass } from "./alias-folder/index";
export declare class A {
    private readonly aliasClass;
    do(): AliasClass;
}
```

If this doesn't work you try to add ts-transform-paths as a getCustomTransformers for the Webpack.

``` JavaScript
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const pathsTransformer = require("ts-transform-paths").default;

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            getCustomTransformers: (program) => pathsTransformer()
          }
        }
      }
    ],
  },
// ...
};

```
