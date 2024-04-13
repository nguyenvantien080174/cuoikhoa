var lists = document.querySelectorAll('.checkBTN')
var target = document.querySelector('#box');

lists.forEach(box => {
    box.addEventListener('gragover', function(e){
        e.preventDefault();
        this.appendChild(target);
    })
    box.addEventListener('drop', function(e){
        this.appendChild(target);
    })
})

