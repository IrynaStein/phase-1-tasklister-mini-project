
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
document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementById('new-task-description')
  let submit = input.nextElementSibling.nextElementSibling
  let uL = document.getElementById('tasks')

  submit.addEventListener('click', newTask)

  function newTask(event) {//creates new list item at the bottom 
    let li = document.createElement('li')
    li.innerHTML = input.value
    
    const priorityList = document.getElementById('priority-setting')
    priorityList.addEventListener('change', colorChange)

    function colorChange() {
      if (priorityList.value === "low")
        li.style.color = 'green';
      // console.log(li.style.color)
      if (priorityList.value === "medium")
        li.style.color = 'orange'
      if (priorityList.value === 'high')
        li.style.color = 'red'
    }
    uL.appendChild(li)
    event.preventDefault();//prevents list from defaulting to an empty space


    let button = document.createElement('button')
    button.innerHTML = " delete ";
    li.appendChild(button);
    button.setAttribute("id", input.value); //setting attribute to a button or list item. Not necessary now but might be helpful in the future

    button.onclick = function () { // remove list item 
      this.parentElement.remove()


    };

  };
});




