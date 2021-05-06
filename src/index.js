
  // let form = document.forms[0]
  // form.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   let inputVal = document.getElementById('new-task-description').value
    // let list = document.createElement('li')
    // let ulList = document.getElementById('tasks')
    // list.innerHTML = inputVal
    // ulList.append(list)
    // stop form submission
  //   let tasklist = document.createElement('li').append('ul#tasks')
  //   tasklist.innerHTML = inpuVal;
  //   let button = createElement('button');
  //   button
  // });
  // your code here
// });
document.addEventListener("DOMContentLoaded", () =>{
  let input = document.getElementById('new-task-description')
  let submit = input.nextElementSibling
  let uL = document.getElementById('tasks')
  
  submit.addEventListener('click', newTask)
  
  function newTask (event){//creates new list item at the bottom 
    let li = document.createElement('li')
    li.innerHTML = input.value
    uL.appendChild(li)
    event.preventDefault();//prevents list from defaulting to an empty space
  
  // submit.onclick = function(event){
  //   let li = document.createElement('li')
  //     li.innerHTML = input.value
  //     uL.appendChild(li)
  //     event.preventDefault()
  // };
  
  let button = document.createElement('button')
  button.innerHTML = " delete ";
  li.appendChild(button);
  button.setAttribute("id", input.value); //setting attribute to a button or list item. Not necessary now but might be helpful in the future

  button.onclick = function() { // remove list item 
    this.parentElement.remove()
  };

// button.addEventListener('onclick', removeListItem)

//   function removeListItem(){
//     this.parentElement.remove()
//   };
  };
});




//create new task to grab the entered text and place into a list 

// const submit = document.querySelectorAll('form :nth-of-type(2)') //submit button


// form.addEventListener('submit', () => {
//   event.preventDefault();
// })








// fetch("https://dog.ceo/api/breeds/image/random")
// .then(response => response.json())
// .then(dogData => console.log(dogData))
