 class dropDownObject {
    constructor(element) {
        this.id = element.id
        this.html = element
        Object.assign(this, domHandle)
        this.giveItDeviceClass(element)

    }
        mobile() {return false} //to do check if true or false
     giveItDeviceClass(element) {
         const className = this.mobile()? 'mobile' : 'desktop'
         element.classList.add(className)
     }
 }


class dropDownMenu extends dropDownObject {
    constructor(element) {
        super(element);
        this.kids =this.makeBabies(this)

        // this.kids.push(this.doSomethingWithKids(element,  this.makeKid))
    }

}
 class dropDownItem extends dropDownObject {
      constructor(element,father) {
         super(element);
         this.father = father
         this.giveItContentClass(this.html)
         this.doSomethingWithKids(element,this.hideElement)
         this.doSomethingWithKids(element,this.giveItSubcontentClass.bind(this))
           const target = this
          element.addEventListener('click', this.showSelection.bind(this, element))
      }
      giveItContentClass(element) {
          this.giveItDeviceClass(element)
          element.classList.add('content')
      }
      giveItSubcontentClass(element) {
          this.giveItDeviceClass(element)
          element.classList.add('sub-content')
      }
      showSelection(element){
          this.hideAllSiblings()
          const box = this.createInvisibleBox(element)
          box.addEventListener('click', this.undoClick.bind(this, box))
          element.classList.add('clicked')
          this.doSomethingWithKids(element,this.showElement)
      }
    undoClick(box) {
        this.hideAllSiblings()
        box.remove()

    }
     hideAllSiblings() {
         for (const  child of this.father.kids) {
             child.html.classList.remove('clicked')
             this.doSomethingWithKids(child.html, this.hideElement)
         }

     }
     createInvisibleBox(element){
          const div = document.createElement('div')
         div.classList.add('graybox')
         this.father.html.appendChild(div)
         // element.appendChild(div)
         return div
     }}



 const domHandle = {
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
         element.classList.remove('showing')
     },
     showElement: (element) => {
         element.classList.add('showing')
         element.classList.remove('hidden')
     },
     makeBabies: (target) => {
          const   father =document.getElementById(target.id)
         const obt = []
         for (const o of  father.children) {
              const item = new dropDownItem(o, target)
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
        element.classList.remove('showing')
    }
    return{getById,
        getByClass,
        doSomethingWithKids,
        hideElement}
    })();



 const navbar = document.getElementById('navbar')
  const dropDown= new dropDownMenu(navbar)
