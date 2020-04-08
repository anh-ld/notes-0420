/* 
  DESIGN PATTERN

  WHAT: 
    - reusable solution that can be applied to commonly recurring problems in
    software design

  WHY:
    - proven solution
    - easily reused
    - avoid repetition in code
    - developer (mostly) knows
      
  TYPES: CREATIONAL, STRUCTURAL, BEHAVIORAL
*/

/* CREATIONAL - SINGLETON */
class A {
  constructor(value) {
    if (typeof A.instance === "object") return A.instance;

    this.value = value;
    A.instance = this;

    return this;
  }
}

const A_Instance_100 = new A(100);
const A_Instance_200 = new A(200);

/* CREATIONAL - PROTOTYPE */
class B {
  constructor(value) {
    this.value = value;
  }

  clone() {
    return new B(this.value);
  }
}

const B_Instance_100 = new B(100);
const B_Instance_100_2 = B_Instance_100.clone();

/* CREATIONAL - FACTORY */
class C {
  static create(type, value) {
    if (type === 1) return new C1(value);
    else return new C2(value);
  }
}

class C1 {
  constructor(value) {
    this.value = value;
  }
}

class C2 {
  constructor(value) {
    this.value = value;
  }
}

const C_Instance = C.create(1, "Toyota");

/* CREATIONAL - BUILDER */
class D {
  constructor(value) {
    this.value = value;
  }
}

class D_Builder {
  constructor() {
    this.d = new D();
  }

  setVal(v) {
    this.d.value = v;
  }
}

const D_Instance = new D_Builder();
D_Instance.setVal(100);

/* STRUCTURAL - ADAPTER */
class E {
  constructor(value) {
    this.value = value;
  }

  increase(i) {
    return (this.value += i);
  }
}

class E_Adapter {
  constructor(e) {
    this.e = e;
  }

  increase(i) {
    return this.e.increase(i);
  }
}

const E_Instance_100 = new E(100);
const E_Adapter_Instance = new E_Adapter(E_Instance_100);

/* BEHAVIORAL - OBSERVER */
class F {
  constructor() {
    this.value = 0;
    this.actions = [];
  }

  setVal(value) {
    this.value = value;
    this.notify(value);
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter(el => !(el instanceof observer));
  }

  notify(value) {
    this.actions.forEach(el => el.update(value));
  }
}

class F_Observer {
  update(value) {
    console.log("Value updated: ", value);
  }
}

const F_Instance = new F();

const F_Observer_Instance_1 = new F_Observer();
const F_Observer_Instance_2 = new F_Observer();
const F_Observer_Instance_3 = new F_Observer();

F_Instance.register(F_Observer_Instance_1);
F_Instance.register(F_Observer_Instance_2);
F_Instance.register(F_Observer_Instance_3);

F_Instance.setVal(10);
