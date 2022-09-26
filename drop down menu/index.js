 class dropDownMenu {
    constructor(id) {
         this.kids =[]
        this.navbar = htmlGetter.getById(id)
        Peter.molestKids(this.navbar,  this.makeKid)

         // makeKid(child, target=this) {
         //     console.log(child.innerText)
         //    const kid = new content(child)
         //      target.kids.push(kid)
         // }
         }

     makeKid(child, target=this) {
          console.log( this)
         // console.log(super)
         const kid = new content(child)
         target.kids.push(kid)
     }
     //this.content.foreach(object => object.addeventlistener('hover', (object) => showchildren(object))

    }
  class content {
      constructor(element) {
        this.id = element.id
        Peter.molestKids(element,Peter.hideElement)
      }
  }
 class Peter {
     static molestKids(element,fn) {
          const children = document.querySelectorAll(`#${element.id} > div`)
         for (const child of children) {
             fn(child)
         }
     }
      static hideElement(element) {
         element.classList.add('hidden')
     }
      static molestTheGrandkids(element,fn) {
         for (const child of element.children) {
             for (const grandchild of child.children) {
                 fn(grandchild)
             }
         }
     }



 }

  class htmlGetter {
     static getById(id) {
         return document.getElementById(id)
     }

     static getByClass(identifier) {
         return document.querySelectorAll(identifier)
     }
 }

 new dropDownMenu('navbar')

 function f() {
     
 }