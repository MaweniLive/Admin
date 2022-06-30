let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let  tasks= document.querySelector('.task');

//add btn disable 

input.addEventListener('keyup', ()=> {
    if(input.ariaValueMax.trim() != 0){
       addBtn.classList.add('active') 
    }
    else{
        addBtn.classList.remove('active')
    }
})

// add new item to list

addBtn.addEventListener('click', () => {
    if (input.ariaValueMax.trim() !==0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} <p>
        <div class="item-btn">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-xmark"></i>
        </div>
        `
    }
    else{
        alert(Please enter a task)
    }
})
//delete item from list 

task.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})
//add