

let linkBox = document.getElementById('linkBox')
linkBox.innerHTML='<div class="loader d-flex align-items-center" style="margin-top:20vh" ></div>'

async function getDetail(){
let linkList = await fetch("https://theurlshortner.herokuapp.com/getInfo")
 

linkList = await linkList.json();
linkBox.innerHTML=''
for(i=0;i<linkList.length;i++){

  linkBox.innerHTML+=`
  <div class="col-lg-3 m-4 pl-4 pr-4 pt-1 pb-1" >
      <div class="card bg-light  text-center" style="width:100%;" >
      <div class="card-header"><a style="text-decoration:none" href="https://theurlshortner.herokuapp.com/`+linkList[i].shortUrl+`"target="_blank"><h6 class="card-title mb-0 p-2">https://theurlshortner.herokuapp.com/${linkList[i].shortUrl}</h6></a></div>
          <div class="card-body align-items-center" >

            <p class="card-text">${linkList[i].longUrl}</p>

          </div>
        <div class="p-1" style="background-color:#fddb3a;color:#41444b">
        
        
        <div class="row justify-content-between align-items-center">
        <div class="col pl-3">
        Total Clicks : ${linkList[i].totalClick}  
  
        </div>
        <div class="col pr-0">
        <a href="https://theurlshortner.herokuapp.com/delete/${linkList[i].shortUrl}" class="btn btn-danger deleteLink"  >Delete</a>
  
        </div>
      </div>
        
        </div>
         
        </div>

  </div>
`
}






};






getDetail();
