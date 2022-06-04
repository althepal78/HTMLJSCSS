const tarea = document.querySelector('#tarea');

tarea.addEventListener('keyup', (e)=>{
    e.preventDefault()    
    if(e.code == "Comma" || e.code == "Enter"){
      const thevalue = tarea.value;
      console.log(thevalue)
    }
})
