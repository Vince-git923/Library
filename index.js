

let add = document.querySelector(".addBtn")

function Book(title,author,page,read){
this.title = title,
this.author = author,
this.page = page,
this.read = read
    
}

let one = new Book(`How to Sleep`,"3 Hours",69,"Read")
let two = new Book("Become Rich in 1 Second","PoorMan",1,"Not Yet Read")
let three = new Book("The Family Recipe vol.4","Ai Kent Cook",1400,"Read")

let myLibrary = [one,two,three]

let mainCont = document.querySelector(".booksCont")

function display(){

 
    Array.from(myLibrary).forEach(book=>{
        let xCont = document.createElement("div")
        let x = document.createElement("div")
        
        
        let bookDiv = document.createElement("div")
        let nameDiv = document.createElement("div")
        let authorDiv = document.createElement("div")
        let pageDiv = document.createElement("div")
        let readDiv = document.createElement("div")
       let sliderDiv = document.createElement("div")
       let slider = document.createElement('div')
       

        
        xCont.classList.add("x-cont")
        xCont.appendChild(x)
        x.textContent = "X"
        x.classList.add("x-btn")
        sliderDiv.classList.add("slideCont")
        slider.classList.add("slider")
        sliderDiv.appendChild(slider)
        

        bookDiv.appendChild(xCont)
        bookDiv.appendChild(nameDiv)
        bookDiv.appendChild(authorDiv)
        bookDiv.appendChild(pageDiv)
        bookDiv.appendChild(readDiv)
        bookDiv.appendChild(sliderDiv)
       

        if(book.read === "Read"){
            slider.classList.remove("anim")
            
           
        }else if(book.read === "Not Yet Read"){
           slider.classList.add("anim")
           bookDiv.classList.add("des")
        } 

      slider.addEventListener("click",()=>{
       
        if(book.read === "Read"){
            slider.classList.add("anim")
            bookDiv.classList.add("des")
            book.read = "Not Yet Read"
            readDiv.textContent = `Read Status: ${book.read}`
        }else if(book.read === "Not Yet Read"){
           slider.classList.remove("anim")
           bookDiv.classList.remove("des")
            book.read = "Read"
            readDiv.textContent = `Read Status: ${book.read}`
        }
      })  

    bookDiv.classList.add("bookCont")
    mainCont.appendChild(bookDiv)

    
    
     nameDiv.innerHTML = `Book Title: <span class= "i-des"> ${book.title}</span>` 
     authorDiv.textContent = `Author: ${book.author}`
     pageDiv.textContent = `Number of Pages: ${book.page}`
     readDiv.textContent = `Read Status: ${book.read}`

     

    })  
   
}

display()

let form = document.querySelector(".form-cont")
let booksDiv = document.getElementsByClassName("bookCont")



function removeBook(){
   
    let allX = document.getElementsByClassName("x-btn")

   Array.from(allX).forEach(x=>{

    x.addEventListener("click",()=>{
        
    myLibrary.splice(Array.from(allX).indexOf(x),1)
       x.parentNode.parentNode.remove()
       
       })
   })


}
removeBook()

let submitBtn = document.querySelector(".submit-btn")

let formCont = document.querySelector(".form-cont")

add.addEventListener("click",()=>{
   
    let titleU = document.querySelector(".title")
    let authorU = document.querySelector(".author")
    let pageU = document.querySelector(".page-num")
    let readU = document.querySelector(".checkbox")


    titleU.value = ""
    authorU.value = ""
    pageU.value = ""
    readU.checked = false
    form.style.visibility = "visible"
    form.classList.add("formanim")
    
    
  
})




// submitBtn.addEventListener("submit",(e)=>{
//     e.preventDefault()
// })

let formC = document.querySelector(".popUpForm")


formC.addEventListener("submit",(e)=>{
    let titleU = document.querySelector(".title")
    let authorU = document.querySelector(".author")
    let pageU = document.querySelector(".page-num")
    let readU = document.querySelector(".checkbox")

    if(readU.checked){
        readU =  "Read"
    }else{
        readU = "Not Yet Read"
    }
   
  

    let newB = new Book(titleU.value,authorU.value,pageU.value,readU)
    myLibrary.unshift(newB)
    
    
    
    Array.from(booksDiv).forEach(div=>{
        div.remove()

    })
  form.style.visibility = "hidden"
    
    display()
    removeBook()
    e.preventDefault()
})

let formX = document.querySelector(".formX")

formX.addEventListener("click",()=>{
    form.style.visibility = "hidden"
    form.classList.remove("formanim")
})

    
