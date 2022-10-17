# TypeScript Style Guide

Almost rules in this guide based on [TypeScript Homepage](http://www.typescriptlang.org/)

## Table of Contents

  1. [Coding Convention](#1-coding-convention)
  1. [General Types](#2-general-types)
  1. [Callback Types](#3-callback-types)
  1. [Function Overloads](#4-function-overloads)


<div id='convention'></div>

## 1. Coding Convention
<a name="convention--variable"></a><a name="1.1"></a>
  - [1.1](#convention--variable) **Variable and Function** 

Use *camelCase* for variable and function names

```typescript
/* BAD */
var FooVar;
function BarFunc() { }

/* GOOD */
var fooVar;
function barFunc() { }
```

<a name="convention--class"></a><a name="1.2"></a>
  - [1.2](#convention--class) **Class**

Use *PascalCase* for class names.

```typescript
/* BAD */
class foo { }

/* GOOD */
class Foo { }
```

Use *camelCase* of class members and methods
>Reason: Naturally follows from variable and function naming convention.

```typescript
/* BAD */
class Foo {
    Bar: number;
    Baz() { }
}

/* GOOD */
class Foo {
    bar: number;
    baz() { }
}
```

<a name="convention--interface"></a><a name="1.3"></a>
  - [1.3](#convention--interface) **Interface**

Use *PascalCase* for name.

>Reason: Similar to class

Use *camelCase* for members.
>Reason: Similar to class

Don't prefix with I
>Reason: Unconventional. *lib.d.ts* defines important interfaces without an I (e.g. Window, Document etc).

```typescript
/* BAD */
interface IFoo {
}

/* GOOD */
interface Foo {
}
```

<a name="convention--namespace"></a><a name="1.4"></a>
  - [1.4](#convention--namespace) **Namespace**

Use *PascalCase* for names
>Reason: Convention followed by the TypeScript team. 
Namespaces are effectively just a class with static members. Class names are *PascalCase* => Namespace names are *PascalCase*

```typescript
/* BAD */
namespace foo {
}

/* GOOD */
namespace Foo {
}
```

<a name="convention--enum"></a><a name="1.5"></a>
  - [1.5](#convention--enum) **Enum**


Use *PascalCase* for enum names

```typescript
/* BAD */
enum color {
}

/* GOOD */
enum Color {
}
```

Use *PascalCase* for enum member
>Reason: Convention followed by TypeScript team

```typescript
/* BAD */
enum Color {
    red
}

/* GOOD */
enum Color {
    Red
}
```

**[⬆ back to top](#table-of-contents)**

<div id='types'></div>

## 2. General Types
<a name="types--primitives"></a><a name="2.1"></a>
  - [2.1](#types--primitives) **Number, String, Boolean, Symbol and Object** 

  Don’t ever use the types `Number`, `String`, `Boolean`, `Symbol`, or `Object` These types refer to non-primitive boxed objects that are almost never used appropriately in JavaScript code.

  ```typescript
  /* WRONG */
  function reverse(s: String): String;
  ```

  Do use the types `number`, `string`, `boolean`, and `symbol`.

  ```typescript
  /* OK */
  function reverse(s: string): string;
  ```

  Instead of `Object`, use the non-primitive `object` type ([added in TypeScript 2.2](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type)).
  
<a name="types--generics"></a><a name="2.2"></a>
  - [2.2](#types--generics) **Generics**

  Don’t ever have a generic type which doesn’t use its type parameter.

  ```typescript
  /* BAD */
  interface Named<T> {
    name: string;
  }
  class MyNamed<T> implements Named<T> {
    name: 'mine';
  }
  function findByName<T>(x: Named<T>): T {
    // TODO: Implement
    return undefined;
  }

  var x: MyNamed<string>;
  var y = findByName(x); // expected y: string, got y: {}
  ```
  TypeScript uses a structural type system. This structural-ness also applies during generic type inference. When inferring the type of T in the function call, we try to find members of type T on the x argument to figure out what T should be. Because there are no members which use T, there is nothing to infer from, so we return {}.

  Note that if you use T, you get correct inference:

  ```typescript
  /* OK */
  interface Named<T> {
    name: string;
    value: T; // <-- added
  }
  class MyNamed<T> implements Named<T> {
    name: 'mine';
    value: T; // <-- added
  }
  function findByName<T>(x: Named<T>): T {
    // TODO: Implement
    return undefined;
  }

  var x: MyNamed<string>;
  var y = findByName(x); // got y: string;
  ```

<a name="types--null"></a><a name="2.3"></a>
  - [2.3](#types--null) **Null vs. Undefined**

Prefer not to use either for explicit unavailability
>Reason: these values are commonly used to keep a consistent structure between values. In TypeScript you use *types* to denote the structure

```typescript
/* BAD */
let foo = {x:123,y:undefined};

/* GOOD */
let foo:{x:number,y?:number} = {x:123};
```

Use `undefined` in general (do consider returning an object like `{valid:boolean,value?:Foo} instead)`

```typescript
/* BAD */
return null;

/* GOOD */
return undefined;
```

Use `null` where its a part of the API or conventional
>Reason: It is conventional in Node.js e.g. `error` is `null` for NodeBack style callbacks.

```typescript
/* BAD */
cb(undefined)

/* GOOD */
cb(null)
```

Use truthy check for *objects* being `null` or `undefined`

```typescript
/* BAD */
if (error === null)

/* GOOD */
if (error)
```

Use `== null` / `!= null` (not `===` / `!==`) to check for `null` / `undefined` on primitives as it works for both `null/undefined` but not other falsy values (like `''`,`0`,`false`)

```typescript
/* BAD */
if (error !== null) // does not rule out undefined

/* GOOD */
if (error != null) // rules out both null and undefined
```

<a name="types--array"></a><a name="2.4"></a>
  - [2.4](#types--array) **Array**

Annotate arrays as `foos:Foo[]` instead of `foos:Array<Foo>`.
>Reasons: Its easier to read. Its used by the TypeScript team. Makes easier to know something is an array as the mind is trained to detect `[]`.

<a name="types--interface"></a><a name="2.5"></a>
  - [2.5](#types--interface) **type vs. interface**

Use `type` when you might need a `union` or `intersection`:

```typescript
type Foo = number | { someProperty: number }
```

Use `interface` when you want `extends` or `implements`

```typescript
interface Foo {
  foo: string;
}
interface FooBar extends Foo {
  bar: string;
}
class X implements FooBar {
  foo: string;
  bar: string;
}
```

**[⬆ back to top](#table-of-contents)**

<div id='callback'></div>

## 3. Callback Types
<a name="callback--return"></a><a name="3.1"></a>
  - [3.1](#callback--return) **Return Types of Callbacks**

  Don’t use the return type `any` for callbacks whose value will be ignored:

  ```typescript
  /* WRONG */
  function fn(x: () => any) {
      x();
  }
  ```
Do use the return type `void` for callbacks whose value will be ignored:

```typescript
/* OK */
function fn(x: () => void) {
    x();
}
```
>Why: Using `void` is safer because it prevents you from accidentally using the return value of `x` in an unchecked way:

```typescript
function fn(x: () => void) {
    var k = x(); // oops! meant to do something else
    k.doSomething(); // error, but would be OK if the return type had been 'any'
}
```
<a name="callback--option"></a><a name="3.2"></a>
  - [3.2](#callback--option) **Optional Parameters in Callbacks**

Don’t use optional parameters in callbacks unless you really mean it:

```typescript
/* WRONG */
interface Fetcher {
    getObject(done: (data: any, elapsedTime?: number) => void): void;
}
```

This has a very specific meaning: the `done` callback might be invoked with 1 argument or might be invoked with 2 arguments. The author probably intended to say that the callback might not care about the `elapsedTime` parameter, but there’s no need to make the parameter optional to accomplish this – it’s always legal to provide a callback that accepts fewer arguments.

Do write callback parameters as non-optional:

```typescript
/* OK */
interface Fetcher {
    getObject(done: (data: any, elapsedTime: number) => void): void;
}
```

<a name="callback--overload"></a><a name="3.3"></a>
  - [3.3](#callback--overload) **Overloads and Callbacks**

Don’t write separate overloads that differ only on callback arity:

```typescript
/* WRONG */
declare function beforeAll(action: () => void, timeout?: number): void;
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;
```

Do write a single overload using the maximum arity:

```typescript
/* OK */
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;
```
>Why: It’s always legal for a callback to disregard a parameter, so there’s no need for the shorter overload. Providing a shorter callback first allows incorrectly-typed functions to be passed in because they match the first overload.

**[⬆ back to top](#table-of-contents)**

<div id='function'></div>

## 4. Function Overloads

<a name="function--overload"></a><a name="4.1"></a>
  - [4.1](#function--overload) **Ordering**

Don’t put more general overloads before more specific overloads:

```typescript
/* WRONG */
declare function fn(x: any): any;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: any, wat?
```
Do sort overloads by putting the more general signatures after more specific signatures:

```typescript
/* OK */
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: any): any;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: string, :)
```
>Why: TypeScript chooses the first matching overload when resolving function calls. When an earlier overload is “more general” than a later one, the later one is effectively hidden and cannot be called.

<a name="function--option"></a><a name="4.2"></a>
  - [4.2](#function--option) **Use Optional Parameters**

Don’t write several overloads that differ only in trailing parameters:

```typescript
/* WRONG */
interface Example {
    diff(one: string): number;
    diff(one: string, two: string): number;
    diff(one: string, two: string, three: boolean): number;
}
```
Do use optional parameters whenever possible:

```typescript
/* OK */
interface Example {
    diff(one: string, two?: string, three?: boolean): number;
}
```

Note that this collapsing should only occur when all overloads have the same return type.

>Why: This is important for two reasons.

TypeScript resolves signature compatibility by seeing if any signature of the target can be invoked with the arguments of the source, and extraneous arguments are allowed. This code, for example, exposes a bug only when the signature is correctly written using optional parameters:

```typescript
function fn(x: (a: string, b: number, c: number) => void) { }
var x: Example;
// When written with overloads, OK -- used first overload
// When written with optionals, correctly an error
fn(x.diff);
```

The second reason is when a consumer uses the “strict null checking” feature of TypeScript. Because unspecified parameters appear as `undefined` in JavaScript, it’s usually fine to pass an explicit `undefined` to a function with optional arguments. This code, for example, should be OK under strict nulls:

```typescript
var x: Example;
// When written with overloads, incorrectly an error because of passing 'undefined' to 'string'
// When written with optionals, correctly OK
x.diff("something", true ? undefined : "hour");
```

<a name="function--union"></a><a name="4.3"></a>
  - [4.3](#function--union) **Use Union Types**

Don’t write overloads that differ by type in only one argument position:

```typescript
/* WRONG */
interface Moment {
    utcOffset(): number;
    utcOffset(b: number): Moment;
    utcOffset(b: string): Moment;
}
```

Do use union types whenever possible:

```typescript
/* OK */
interface Moment {
    utcOffset(): number;
    utcOffset(b: number|string): Moment;
}
```

Note that we didn’t make `b` optional here because the return types of the signatures differ.

>Why: This is important for people who are “passing through” a value to your function:

```typescript
function fn(x: string): void;
function fn(x: number): void;
function fn(x: number|string) {
    // When written with separate overloads, incorrectly an error
    // When written with union types, correctly OK
    return moment().utcOffset(x);
}
```
**[⬆ back to top](#table-of-contents)**
