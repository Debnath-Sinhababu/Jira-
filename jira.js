let plus = document.querySelector(".fa-plus");
let modal = document.querySelector(".modal-cont");
let main = document.querySelector(".main-cont");
let ticket;

plus.addEventListener("click", function () {
  modal.classList.toggle("modal");
});
let container = document.querySelector(".priority-color-cont");
let colorarr = ["lightpink", "blue", "green", "black"];
let textarea = document.querySelector(".textarea-cont");
let prioritycolor = document.querySelectorAll(".priority-color");
// textarea.addEventListener('click',function(event){
//    console.log(event.target.value);

// })
let arrobj=[];
let idx=1;
for (let i = 0; i < prioritycolor.length; i++) {
  prioritycolor[i].addEventListener("click", function () {
    let color = prioritycolor[i].classList[0];
    createticket(textarea.value, color,idx);
    idx++;
  });
}
 function getidx(id){
   
   for(let i=0;i<arrobj.length;i++){
     if(arrobj[i].id==id){
        return i;
     }
   }
  
 }
let trash = document.querySelector(".fa-trash");
trash.addEventListener("click", function () {
  trash.classList.toggle("red");
});
let color=document.querySelectorAll('.color'); //filter these
for(let i=0;i<color.length;i++){
  color[i].addEventListener('click',function(){
     for(let j=0;j<ticket.length;j++){
      
       ticket[j].remove();
     }
   
   for(let j=0;j<arrobj.length;j++){
     
     if(arrobj[j].color==color[i].classList[1]){
     createticket(arrobj[j].value,arrobj[j].color,0);
     }
   }
  })
}
  for(let i=0;i<color.length;i++){
    color[i].addEventListener('dblclick',function(){
      for(let j=0;j<ticket.length;j++){
       
        ticket[j].remove();
      }
      for(let j=0;j<arrobj.length;j++){

        createticket(arrobj[j].value,arrobj[j].color,0);
      }
    })
  }
function createticket(value, color,k) {
  let div1 = document.createElement("div");
  div1.setAttribute("class", 'new');
  div1.classList.add(color);
  
  div1.innerHTML = `<div class='subdiv ${color}'>
        </div>
        <div class='para'>
        ${value}
        </div>
        <i class="fa-solid fa-lock"></i>`;
  main.appendChild(div1);
  let para=div1.querySelector('.para');
  ticket=main.querySelectorAll(".new");
  //console.log(arrobj);
 if(k!=0){
  let obj={
    "color":color,
    "value":value,
      'id':k
  }
  arrobj.push(obj);

 }
 textarea.value='';
 if(k!=0)
  modal.classList.toggle("modal");


let lockAll = document.querySelectorAll('.fa-solid');
lockAll[lockAll.length-1].addEventListener('click',(event)=>{
    let a=event.target.classList[1];
         if(a=='fa-lock'){
            event.target.classList.remove(a);
        event.target.classList.add('fa-lock-open');
        div1.setAttribute('contenteditable',true);
        
        
  
     }
     else{
        event.target.classList.remove(a);
        event.target.classList.add('fa-lock');
        div1.setAttribute('contenteditable',false);
        }
        let idx=getidx(k);
        arrobj[idx].value=para.textContent;
    })


  

  
    div1.addEventListener("click", function () {
      console.log(1);
      if (trash.classList.contains("red")) {
        div1.remove();
        let idx=getidx(k);
        arrobj.splice(idx,1);
      }
    });

    let subdiv = div1.querySelector(".subdiv");
    
     // console.log(subdiv);
    subdiv.addEventListener("click", function () {
      let x = 0;
      for (let i = 0; i < colorarr.length; i++) {
        if (subdiv.classList[1] == colorarr[i]) {
          x = i;
          break;
        }
      }
      div1.classList.remove(div1.classList[1]);
      subdiv.classList.remove(subdiv.classList[1]);
      let idx=getidx(k);
      if (x == colorarr.length - 1) {
        div1.classList.add(colorarr[0]);
        subdiv.classList.add(colorarr[0]);
        arrobj[idx].color=colorarr[0];
        
      } else {
        div1.classList.add(colorarr[x + 1]);
        subdiv.classList.add(colorarr[x+1]);
        arrobj[idx].color=colorarr[x+1];
      }
    });
  
}
