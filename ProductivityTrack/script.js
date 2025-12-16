let allElems = document.querySelectorAll(".elem");
let FullElemsPage = document.querySelectorAll(".fullElem")
let allElemsBackBtn = document.querySelectorAll('.fullElem .back')

allElems.forEach((elem) => {
  elem.addEventListener("click", function () {
    const id = elem.id;
    FullElemsPage[id].style.display = "block"
  });
});


allElemsBackBtn.forEach((btn)=>{
    btn.addEventListener("click", function(){
        const id = btn.id;
        FullElemsPage[id].style.display = "none"
    })
})

