Statements

  a = b * 2 | (a, b: variables, *: operator, 2: literal value)
  
  - Statements end with ";" (optional)
  - Programs are just collections of many such statements, which together describe
  all the steps that it takes to perform your program's purpose.

Executing Program
  - A special utility on the computer (either an interpreter or a compiler) is used 
  to translate the code you write into commands a computer can understand.
  - The JavaScript engine actually compiles the program on the fly and then 
  immediately runs the compiled code.

Values and Types
  - Built-in types: string, number, boolean, null | undefined, object, symbol

Strict Mode
  - "use strict"
  - restrictions are seen as keeping the code to a safer and more appropriate set 
  of guidelines

Compiler Theory
  - the JavaScript engine performs many of the same steps of any traditional 
  language-compiler
    + tokenizing:  breaking up a string of characters into meaningful chunks,
    called tokens
    + parsing: taking a stream of tokens and turning it into a tree of nested 
    elements, "AST" (Abstract Syntax Tree).
    + code-generation: take an AST and turning it into executable code
  - the JavaScript engine is vastly more complex than just those three steps,
  with steps of optimizing the performance of the execution

eval
  - The eval() function takes a string as an argument, and treats the contents
  of the string as if it had actually been authored code at that point in the 
  program.
    + i.e: eval("var b = 3;")

Function Scope

Block Scope

Hoisting
  - any variable declared within a scope is attached to that scope
  - the Engine actually will compile your JavaScript code. Part of the compilation 
  phase was to find and associate all declarations with their appropriate scopes.
    + i.e: var a = 2;
    + engine thinks of it as 2 statements: var a; and a = 2;
    + the 1st one is processed in the compilation phase, the other one is in the
    execution phase
  - var a; will be moved to the top of scope
  - function declarations are hoisted but function expressions are not
  - subsequent function declarations do override previous ones
    + i.e: 
      foo(); // 2
      function foo() {console.log(1);}
      function foo() {console.log(2);}