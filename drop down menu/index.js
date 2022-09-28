 class dropDownObject {
    constructor(element) {
        this.id = element.id
        Object.assign(this, domHandle)
        }
    }

class dropDownMenu extends dropDownObject {
    constructor(element) {
        super(element);
        this.kids =this.makeBabies(this.id)

        // this.kids.push(this.doSomethingWithKids(element,  this.makeKid))
    }

}
 class dropDownItem extends dropDownObject {
      constructor(element) {
         super(element);
         this.doSomethingWithKids(element,this.hideElement)
           const target = this
          element.addEventListener('click', this.showSelection.bind(this, element))

      }
      showSelection(element){
          this.hideAllSiblings(element)
          this.doSomethingWithKids(element,this.showElement)

      }

     hideAllSiblings(element) {

         const getAllSiblings =  this.makeBabies(element.parentElement.id)
         for (const object of getAllSiblings) {

             this.doSomethingWithKids( object , this.hideElement)

         }
     } }



 const domHandle = {

     // var _privateProperty ="hi";
      getById:  (id) => {
         return document.getElementById(id) },
     getByClass: (identifier) => {
         return document.getElementsByClassName(identifier)
     },
     doSomethingWithKids: (element, fn) => {                                                                                                                                                 {
         const children = document.querySelectorAll(`#${element.id} > div`)
         const object = []
         for (const child of children) {
              object.push(fn(child))
         }
         return object
     }},
     hideElement: (element) => {
         element.classList.add('hidden')
     },
     showElement: (element) => {
         element.classList.add('hidden')
     },

     hideAll: (element) => {
         element.classList.add('hidden')
     },
     makeBabies: (id) => {
          const  target =document.getElementById(id)
         const obt = []
         for (const o of target.children) {
              const item = new dropDownItem(o)
             obt.push(item)
         } return obt
     }

 };



 const domHandler =(function () {
    'use strict';
    // var _privateProperty ="hi";
    function getById(id) {
        return document.getElementById(id)
        }
    function getByClass(identifier) {
        return document.getElementsByClassName(identifier)
        }
     const doSomethingWithKids = (element, fn) => {                                                                                                                                                 {
         const children = document.querySelectorAll(`#${element.id} > div`)
         for (const child of children) {
             fn(child)
            }
        }}
    function hideElement(element) {
         element.classList.add('hidden')
     }
    return{getById,
        getByClass,
        doSomethingWithKids,
        hideElement}
    })();



 const navbar = document.getElementById('navbar')
  const dropDown= new dropDownMenu(navbar)
