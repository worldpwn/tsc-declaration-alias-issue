# Generate declaration file with paths/aliases


If you will use typescript compiler to generate declaration with paths/aliases you will get a d.ts file like this:

``` TypeScript
import { AliasClass } from "@alias";
export declare class A {
    private readonly aliasClass;
    do(): AliasClass;
}

```

Out-of-the-box typescript compiler doesn't support transformations. So this line in tsconfig.json do nothing:

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
