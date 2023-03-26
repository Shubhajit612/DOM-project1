
const myForm = document.getElementById('myForm');

const expense = document.getElementById('exp');
const description = document.getElementById('desc');
const category = document.getElementById('cate');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
 e.preventDefault();

 const desc = description.value;
 const exp =  expense.value;
 const cate = category.value;

 const myObj = {
    desc,
    exp,
    cate
 };

 localStorage.setItem(myObj.exp,JSON.stringify(myObj));

 

 showUser(myObj);
}


function showUser(myObj){
    const parentEle = document.getElementById('users');
    const childEle = document.createElement('li');
    const deleteChild = document.createElement('input');

    deleteChild.type = 'button';
    deleteChild.value = 'delete';

    //edit button
    const editChild = document.createElement('input');
    editChild.type = 'button';
    editChild.value = 'edit';

    editChild.onclick = () =>{
        localStorage.removeItem(myObj.exp);
        parentEle.removeChild(childEle);

        document.getElementById('desc').value = myObj.desc;
        document.getElementById('exp').value = myObj.exp;
        document.getElementById('cate').value = myObj.cate;

    }

    deleteChild.onclick =() =>{
        localStorage.removeItem(myObj.exp);
        parentEle.removeChild(childEle);
    }
    childEle.textContent = myObj.exp + " - "+myObj.desc+" - "+myObj.cate;
    // console.log(myObj.exp);

    childEle.appendChild(deleteChild);
    childEle.appendChild(editChild);
    parentEle.appendChild(childEle);
}