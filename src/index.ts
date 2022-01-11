import { AliasClass } from '@alias/index';

export class A {
  private readonly aliasClass: AliasClass = new AliasClass();

  do(): AliasClass {
    console.log("do from A")
    this.aliasClass.do();
    return this.aliasClass;
  }
}

