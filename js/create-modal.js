
//MODAL CUA NEW BOX
// Lấy tham chiếu đến nút mở modal và modal
var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("myModal");

// Lấy tham chiếu đến phần tử đóng modal
var closeBtn = document.getElementsByClassName("close")[0];

// Khi người dùng nhấn vào nút, hiển thị modal
openModalBtn.onclick = function () {
  modal.style.display = "block";
  modal.style.display = "flex";
};

// Khi người dùng nhấn vào nút đóng, ẩn modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Khi người dùng nhấp chuột ra ngoài modal, ẩn modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//MODAL CUA EDIT BOX


