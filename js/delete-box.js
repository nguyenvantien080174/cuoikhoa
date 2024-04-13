

const count = () => {
  const countTodo = document.getElementById('count-childs-to-do');
  const countDoing = document.getElementById('count-childs-Doing');
  const countFinish = document.getElementById('count-childs-Finish');
  const countBlocked = document.getElementById('count-childs-blocked');

  const listToDo = document.getElementById('list-to-do').childElementCount;
  const listDoing = document.getElementById('list-doing').childElementCount;
  const listFinish = document.getElementById('list-finish').childElementCount;
  const listblocked = document.getElementById('list-blocked').childElementCount;

  countTodo.innerHTML = listToDo;
  countDoing.innerHTML = listDoing;
  countFinish.innerHTML = listFinish;
  countBlocked.innerHTML = listblocked;
}

const renderBox = () => {
  const addlist = document.getElementById("list-to-do");
  addlist.innerHTML = "";
  // Lấy dữ liệu từ Local Storage và chuyển đổi thành mảng các đối tượng
  const saveBoxs = JSON.parse(localStorage.getItem("key")) || [];
  // Duyệt qua từng đối tượng trong mảng và hiển thị thông tin của nó
  saveBoxs.forEach((task) => {
    //tao box
    addlist.insertAdjacentHTML(
      "beforeend",
      createBox(task.category, task.title, task.content, task.id, task.date)
    );
  });

  const addlist2 = document.getElementById("list-doing");
  addlist2.innerHTML = "";
  // Lấy dữ liệu từ Local Storage và chuyển đổi thành mảng các đối tượng
  const saveBoxs2 = JSON.parse(localStorage.getItem("doing")) || [];
  // Duyệt qua từng đối tượng trong mảng và hiển thị thông tin của nó
  saveBoxs2.forEach((task2) => {
    //tao box
    addlist2.insertAdjacentHTML(
      "beforeend",
      createBox(task2.category, task2.title, task2.content, task2.id, task2.date)
    );
  });

  const addlist3 = document.getElementById("list-finish");
  addlist3.innerHTML = "";
  // Lấy dữ liệu từ Local Storage và chuyển đổi thành mảng các đối tượng
  const saveBoxs3 = JSON.parse(localStorage.getItem("finish")) || [];
  // Duyệt qua từng đối tượng trong mảng và hiển thị thông tin của nó
  saveBoxs3.forEach((task3) => {
    //tao box
    addlist3.insertAdjacentHTML(
      "beforeend",
      createBox(task3.category, task3.title, task3.content, task3.id, task3.date)
    );
  });
  count();
};

const createDelete = () => {
    for (let i = 0; i <= 50; i++) {
      window["Delete" + i] = function (event) {
        var element = event.target; // Lấy phần tử được click
        var parent = element.parentNode.parentNode.parentNode.parentNode.parentNode; // Lấy phần tử cha của phần tử được click
        console.log(parent.id);
        if(parent.id == 'list-to-do'){
          let savedTasks = JSON.parse(localStorage.getItem("key")) || [];
  
        // Tìm vị trí của đối tượng cần xóa trong mảng
        const index = savedTasks.findIndex((task) => task.id == i);
  
        // Nếu tìm thấy đối tượng cần xóa, loại bỏ nó khỏi mảng
        if (index !== -1) {
          savedTasks.splice(index, 1);
          localStorage.setItem("key", JSON.stringify(savedTasks));
          console.log("Task deleted successfully!");
          renderBox();
        } else {
          console.log("Task not found!");
        }
        } else if(parent.id == 'list-doing'){
          let savedTasks1 = JSON.parse(localStorage.getItem("doing")) || [];
  
        // Tìm vị trí của đối tượng cần xóa trong mảng
        const index1 = savedTasks1.findIndex((task1) => task1.id == i);
  
        // Nếu tìm thấy đối tượng cần xóa, loại bỏ nó khỏi mảng
        if (index1 !== -1) {
          savedTasks1.splice(index1, 1);
          localStorage.setItem("doing", JSON.stringify(savedTasks1));
          console.log("Task deleted successfully!");
          renderBox();
        } else {
          console.log("Task not found!");
        }
        } else if(parent.id == 'list-finish'){
          let savedTasks2 = JSON.parse(localStorage.getItem("finish")) || [];
  
        // Tìm vị trí của đối tượng cần xóa trong mảng
        const index2 = savedTasks2.findIndex((task2) => task2.id == i);
  
        // Nếu tìm thấy đối tượng cần xóa, loại bỏ nó khỏi mảng
        if (index2 !== -1) {
          savedTasks2.splice(index2, 1);
          localStorage.setItem("finish", JSON.stringify(savedTasks2));
          console.log("Task deleted successfully!");
          renderBox();
        } else {
          console.log("Task not found!");
        }
        }
      };
    }
  };
  
  createDelete();

