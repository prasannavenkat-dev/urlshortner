

let linkBox = document.getElementById('linkBox')
linkBox.innerHTML='<div class="loader d-flex align-items-center" style="margin-top:20vh" ></div>'

async function getDetail(){
let linkList = await fetch("http://localhost:3000/getInfo")
 

linkList = await linkList.json();
linkBox.innerHTML=''
for(i=0;i<linkList.length;i++){

  linkBox.innerHTML+=`
  <div class="col-lg-3 m-4" >
      <div class="card bg-light  text-center " style="width:100%;" >
      <div class="card-header"><a style="text-decoration:none" href="http://localhost:3000/`+linkList[i].shortUrl+`"target="_blank"><h6 class="card-title mb-0 p-2">http://localhost:3000/${linkList[i].shortUrl}</h6></a></div>
          <div class="card-body align-items-center" >

            <p class="card-text">${linkList[i].longUrl}</p>

          </div>
        <div class="p-1" style="background-color:#fddb3a;color:#41444b">
        
        
        <div class="row justify-content-between align-items-center">
        <div class="col pl-3">
        Total Clicks : ${linkList[i].totalClick}  
  
        </div>
        <div class="col pr-0">
        <a href="http://localhost:3000/delete/${linkList[i].shortUrl}" class="btn btn-danger deleteLink"  >Delete</a>
  
        </div>
      </div>
        
        </div>
         
        </div>

  </div>
`
}






};






getDetail();