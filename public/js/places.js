

document.getElementById('upload').addEventListener('click',()=>{
    const uploadImg = document.getElementById('uploadImg');
    if(uploadImg.style.display === "none"){
      uploadImg.style.display = "block";
    }else{
      uploadImg.style.display = "none";
    }
})