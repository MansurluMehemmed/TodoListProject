const input = document.querySelector('input')
const addBtn = document.querySelector('.addbutton')
const sortBtn = document.querySelector('.sortDiv')

const dimg1 = document.querySelector('.dimgSort1')
const img1 = document.querySelector('.imgSort1')

const dimg2 = document.querySelector('.dimgSort2')
const img2 = document.querySelector('.imgSort2')




const btnPlus = document.querySelector('.buttonplus')
const listContainer = document.querySelector('.listContainer')
const listUl = document.getElementById('ul');
const divListMedium = document.getElementById('list');
let newList;
let flag = true;

const removeBtn = document.querySelector('.divRemove')
const confirm = document.querySelector('.confirm')
let num = true;

console.log(listUl.innerHTML.trim().length)

input.addEventListener('keyup',(e)=>{
    e.preventDefault()
    if(input.value.trim() != 0){
        addBtn.classList.add('btnactive')
    }
    else{
        addBtn.classList.remove()
    }
})
addBtn.addEventListener('click',(e)=>{
    e.preventDefault()

    // e.target.style.display = 'none'
    // // e.target.style.display = 'none'
    if(input.value.trim() != 0){
     newList = document.createElement('li')
    newList.classList.add('divListMedium');
    newList.innerHTML = `
        <p id= "p" class = "listP">${input.value}</p>
        <div class="divRemove">
            <img class="imgDeactive" src="./img/Group 77xwhite.png" alt="">
            <img class="imgHover" src="./img/Group 70x.png" alt="">
        </div>
    `
    listUl.append(newList)
    if(listUl.innerHTML.trim().length){
        dimg1.style.display='none'
        img1.style.display='block'
    }
    input.value = '';


    }
    else if(listUl.style.display === 'block'){
        listUl.classList.toggle('listContainer')

    }
    const ulWrapper = document.getElementById("ul");
    new Sortable(ulWrapper,{
      animation: 360,
      chosenClass: "boxShadow",
      dragClass: "drag",
    });


    
    input.style.display = 'block'
})
btnPlus.addEventListener('click',(e)=>{
    e.preventDefault();
    if(listContainer.style.display === 'none'){
        listContainer.classList.add('divListActive');
   
    }else{
        listContainer.classList.toggle('listContainer')

    }
     input.style.display = 'none'
})

listUl.addEventListener('click',(e)=>{
    // console.log(e.target.classList.contains('imgHover'))
    if(e.target.classList.contains('imgHover')){
        e.target.parentElement.parentElement.remove()
        if(listUl.innerHTML.trim().length===0){
            dimg1.style.display='block'
            img1.style.display='none'
        }
    }
})



sortBtn.addEventListener('click',(e)=>{
    if(listUl.innerHTML.trim().length!==0){
        e.target.getAttribute('src')==='./img/Group 73sortactive.png'?e.target.setAttribute('src','./img/Group 91sortdownactive.png'):e.target.setAttribute('src','./img/Group 73sortactive.png') ;
    }
    e.preventDefault()
    const list = Array.from(listUl.getElementsByTagName('li'))
    console.log(list)
    list.sort((a,b)=>{
       let textA = a.textContent.trim().toLocaleLowerCase()
       let textB = b.textContent.trim().toLocaleLowerCase()
       return flag? textA.localeCompare(textB):textB.localeCompare(textA);
    })
    list.forEach(item=>{
        listUl.appendChild(item)
    })
    flag = !flag
})







