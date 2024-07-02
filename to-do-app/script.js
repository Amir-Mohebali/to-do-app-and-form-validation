// Store list of items
let list = [];
// Store text input value
let itemTitle = '';


let addBtn = document.getElementById('addBtn');
let textInput = document.querySelector('.input-title');
let showBox = document.getElementById('showBox');


textInput.addEventListener('input', (e) => {
    itemTitle = e.target.value;
    // console.log(itemTitle)
})

const showItems = (title) => {
    // create div element with class 'todo-item'
    let newItem = document.createElement('div');
    newItem.classList.add('todo-item');

    // create text input with class 'item-title' and append it to div
    let taskTitle = document.createElement('input')
    taskTitle.classList.add('item-title');
    taskTitle.setAttribute('type', 'text');
    taskTitle.value = title;
    taskTitle.setAttribute('readonly', 'readonly');
    newItem.append(taskTitle);

    // create div element with class 'item-control'
    let control = document.createElement('div')
    control.classList.add('item-control');

    // create children of 'item-control'
    // first icon: check
    let controlBox1 = document.createElement('div')
    controlBox1.classList.add('control-box');
    controlBox1.setAttribute('id', 'checkBtn');
    let icon1 = document.createElement('i');
    icon1.classList.add('fa-solid');
    icon1.classList.add('fa-check');
    // second icon: update
    let controlBox2 = document.createElement('div')
    controlBox2.classList.add('control-box');
    controlBox2.setAttribute('id', 'updateBtn');
    let icon2_1 = document.createElement('i');
    icon2_1.classList.add('fa-regular');
    icon2_1.classList.add('fa-pen-to-square');
    let icon2_2 = document.createElement('i');
    icon2_2.classList.add('fa-regular');
    icon2_2.classList.add('fa-floppy-disk');
    // third icon: delete
    let controlBox3 = document.createElement('div')
    controlBox3.classList.add('control-box');
    controlBox3.setAttribute('id', 'deleteBtn');
    controlBox3.addEventListener('click', deleteItem);
    let icon3 = document.createElement('i');
    icon3.classList.add('fa-regular');
    icon3.classList.add('fa-trash-can');

    // append all children to their parents
    controlBox1.append(icon1);
    controlBox2.append(icon2_1);
    controlBox3.append(icon3);
    control.append(controlBox1, controlBox2, controlBox3);
    newItem.append(control);

    showBox.append(newItem);

    textInput.value = '';
    itemTitle = '';

    controlBox2.addEventListener('click', () => {
        // console.log(controlBox2.children[0])
        if(controlBox2.children[0].className.includes('fa-pen-to-square')) {
            console.log('good')
            controlBox2.removeChild(icon2_1);
            controlBox2.append(icon2_2);
            taskTitle.removeAttribute('readonly');
            taskTitle.focus();
        }
        else {
            controlBox2.removeChild(icon2_2);
            controlBox2.append(icon2_1);
            taskTitle.setAttribute('readonly', 'readonly');
        }
    })
    
    taskTitle.addEventListener('click', (e) => {
        controlBox1.classList.toggle('checked');
    })

    controlBox3.addEventListener('click', (e) => {
        showBox.removeChild(newItem);
    })
}

const addItem = () => {
    if(itemTitle == '') {
        alert('لطفا عنوان یادداشت را وارد کنید')
    } else {
        showItems(itemTitle);
    }
}

addBtn.addEventListener('click', addItem);


// let updateBtn = document.getElementById('updateBtn');
// let deleteBtn = document.getElementById('deleteBtn');
// let checkBtn = document.getElementById('checkBtn');

// deleteBtn.addEventListener('click', ()=> alert("click"))

// console.log(addBtn)
// console.log(updateBtn)
// console.log(updateBtn)

const deleteItem = (e) => {
    e.stopPropagation();
    console.log(e.target.parentElement)
    e.target.parentElement.style.padding = '25px'
    // element.style.display = 'none';
}

// deleteBtn.addEventListener('click', deleteItem)