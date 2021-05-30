const tempLoad =()=> {
    let temp=document.getElementById('meme');
    temp.innerHTML=`<img src="akshay2.png" alt="akshay" width="300px" height="300px" />`
    setTimeout(()=>{
      temp.innerHTML=`<img src="bhahu.jpg" alt="bhahu" width="300px" height="300px"/>`;
    },3000);
    setTimeout(()=>{
        temp.innerHTML=`<img src="dog.jpg" alt="dog" width="300px" height="300px"/>`;
    },6000);
    setTimeout(()=>{
        temp.innerHTML=`<img src="mememaa.jpg" alt="meme" width="300px" height="300px"/>`;
    },9000);
    setTimeout(()=>{
        temp.innerHTML=`<img src="miracle.jpg" alt="miracle" width="300px" height="300px"/>`;
    },12000);
    setTimeout(()=>{
        temp.innerHTML=`<img src="rajpal.jpg" alt="rajpal" width="300px" height="300px"/>`;
    },15000);
}   
tempLoad();
setInterval(tempLoad,18000);