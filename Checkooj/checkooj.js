 var str = "Hello"
 console.log(typeof(str))

 var srt = new String('Fedi')
 console.log(typeof(srt))

Encapsulation

 console.log(str.length)
 console.log(srt.length)

class Person{
  constructor(name,year){
    this._name = name
    this._year = year
  }

  getName=()=> this._name
  getYear=()=> this._year
   getOld=()=> 2024 - this.year
  setName=(a)=> this._name = a
  setYears=(b)=> this._year = b


}

 var empl = new Person("Fedi",2000)
 console.log(empl.getName())
 console.log(empl.getYear())
 console.log(empl.getOld())
 console.log({ name: empl.getName(), year : empl.getYear(), old : empl.getOld()})
 console.log(empl.getName())
 empl.setName("Fathi")
 empl.setYears(2010)
 console.log(empl.getYear())
 console.log(empl.getName())
 var nvem = new Person('Belhssane',1994)
 console.log(nvem.getName())

 console.log(empl._name)
 empl._name = 'Ala'
 console.log(empl._name)

function Person(name,age){
  let personName = name
  let personAge = age

  this.getName=()=> personName
  this.getAge=()=> personAge
  this.adulte=()=> personAge>18 ? "Adult" : "Mineur"
}

var empl = new Person("Mahmoud",6)

console.log(empl.getName())
console.log(empl.adulte())

HÃ©ritage

class vehicule{
  constructor(marque,model){
    this.marque = marque
    this.model = model
  }
  sayMyName=()=> console.log(this.marque)
}

class camion extends vehicule{
  constructor(marque,model,carosserie){
    super(marque,model)
    this.carosserie = carosserie
  }
  sayPipip=()=> console.log('Pipipip')
  getCarosserie=()=> console.log(this.carosserie)
}
var kam = new camion('Mercedes',2024,"Oui")
kam.sayMyName()
kam.sayPipip()
kam.getCarosserie()


Polymprphism

class Animal{
  constructor(race,age){
    this.race = race
    this.age = age
  }

  manger=()=> console.log('Nouriture')
}

class Dog extends Animal{
  manger=()=> console.log('Viande')
}

class Chat extends Animal{

}

class oiseau extends Animal{
  manger=()=> console.log('Ziwen')
}

var dd = new Dog("Labradore",10)
var cc = new Chat("Amelie",22)
var oo = new oiseau('Ferid',33)
dd.manger()
cc.manger()
oo.manger()


Prototype

class User{
  constructor(name,age){
    this.name = name
    this.age = age
  }
   sayHello = () => `Hello ${this.name}`
}

User.prototype.sayHello= function(){
  return `Hello ${this.name}`
}
User.prototype.getAge= function(){
  return this.age
}


var uu = new User('Hassen',66)
console.log(uu.sayHello())
console.log(uu.getAge())
var pp = new User('Oussema',44)
console.log(pp.sayHello())
