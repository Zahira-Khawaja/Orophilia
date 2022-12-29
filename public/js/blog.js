document.getElementById('writeBlog').addEventListener('click',()=>{
    const writeBlogSection = document.getElementById('writeBlogSection');
    if(writeBlogSection.style.display === "none"){
      writeBlogSection.style.display = "block";
    }else{
      writeBlogSection.style.display = "none";
    }
})