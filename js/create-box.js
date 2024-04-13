// kiem tra xem chon section nao
var chooseSection= ()=>{
  const  radioBtn1 = document.getElementById("ToDo");
  const  radioBtn2 = document.getElementById("Doing");
  const  radioBtn3 = document.getElementById("Finished");
  if(radioBtn1.checked == true){
    return 1;
  } else if(radioBtn2.checked == true){
    return 2;
  } else if(radioBtn3.checked == true){
    return 3;
  }
  return 0;
}

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

//SET NGAY THANG
const date = () => {
  // Lấy phần tử HTML có id là "currentDate"
  const currentDateElement = document.querySelectorAll(".hour1");
  // Tạo một đối tượng Date hiện tại
  const currentDate = new Date();

  // Lấy thông tin ngày, tháng và năm hiện tại
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0
  const year = currentDate.getFullYear();

  // Tạo một chuỗi để hiển thị ngày tháng năm
  const dateString = ` ${day}/${month}/${year}`;

  // Gán nội dung của phần tử HTML bằng chuỗi đã tạo
  currentDateElement.innerHTML = dateString;
  return dateString;
};

//LAT DU LIEU VA LUU TRU VAO LOCALSTORAGE
var id = 0;
const getValueNewTask = () => {
  const category = document.getElementById("category1").value;
  const title = document.getElementById("title1").value;
  const content = document.getElementById("content1").value;
  // Tạo một đối tượng mới
  const newTask = {
    category: category,
    title: title,
    content: content,
    id: id,
    date: date(),
  };

  // Lấy dữ liệu từ localStorage và chuyển đổi thành mảng
  let key = JSON.parse(localStorage.getItem("key")) || [];
  if (!Array.isArray(key)) {
    key = [];
  }

  // Thêm đối tượng mới vào mảng
  key.push(newTask);
  const task = JSON.stringify(key);
  // Chuyển đổi mảng thành chuỗi JSON và lưu vào localStorage
  localStorage.setItem("key", task);
};

//KIEM TRA HOP LE VA TAO BOX MOI
const checkCreateBox = () => {
  const addlist = document.getElementById("list-to-do");
  const category = document.getElementById("category1").value;
  const title = document.getElementById("title1").value;
  const content = document.getElementById("content1").value;
  const modal = document.getElementById("myModal");
  const date1 = date();
  if (category !== "" && title !== "" && content !== "") {
    addlist.insertAdjacentHTML(
      "beforeend",
      createBox(category, title, content, id, date1)
    );
    modal.style.display = "none";
    getValueNewTask();
    id = id + 1;
    // getValueNewTask();
    date();
    count();
  }
};
// tao box
const createBox = (category, title, content, id, date) => {
  return `<div class="box" draggable = "true">
                <div class="box1" >
                    <div class="col-1">
                        <div class="col-80">
    
                            <div class="category"> ${category}</div>
                            <h2 class="title" style="margin: 5px 0px 15px 0px !important;">${title}</h2>
    
                        </div>
                        <div class="choose" ><img onclick="edit${id}(event)" src="../img/Edit.png" alt=""> <img class="BTNDelete"
                                onclick="Delete${id}(event)" src="../img/Delete.png" alt="" value ="${id}" ></div>
                    </div>
                    <div class="content">
                        <div class="line" style="background-color: antiquewhite; margin-top: 10px;">
    
                        </div>
                        <div class="content1" >${content}</div>
    
                        <div class="hour">
                            <img src="/img/Frame.png" alt="" >
                            <span class="hour1" id="hour" style="padding-bottom: 12px;">${date}</span>
                        </div>
                    </div>
    
                </div> `;
};

//RENDER RA BOX KHI LOAD LAI TRANG HOAC AN SUBMIT
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

// Gọi hàm để hiển thị dữ liệu đã lưu khi tải lại trang
renderBox();
var a=0;
//MODAL CUA Edit box
 const createEdit = () => {
  for (let i = 0; i <= 50; i++) {
      window["edit" + i] = function (event) {
        
        a = i;
    // Lấy tham chiếu đến nút mở modal và modal
    // checkRDO();
    var element = event.target; // Lấy phần tử được click
    var parent = element.parentNode.parentNode.parentNode.parentNode.parentNode; // Lấy phần tử cha của phần tử được click
    if (parent.id == "list-to-do"){
      const  radioBtn1 = document.getElementById("ToDo");
      radioBtn1.checked = true;
      let savedTasks = JSON.parse(localStorage.getItem("key")) || [];
      savedTasks.forEach((task) =>{
      if(task.id == i){
        const category = document.getElementById("category2");
        const title = document.getElementById("title2");
        const content = document.getElementById("content2"); 
        category.value= task.category;
        title.value = task.title;
        content.value = task.content;  
      }
    })
    } else if (parent.id == "list-doing"){
      const  radioBtn2 = document.getElementById("Doing");
      radioBtn2.checked = true;
      let savedTasks1 = JSON.parse(localStorage.getItem("doing")) || [];
      savedTasks1.forEach((task) =>{
      if(task.id == i){
        const category = document.getElementById("category2");
        const title = document.getElementById("title2");
        const content = document.getElementById("content2"); 
        category.value= task.category;
        title.value = task.title;
        content.value = task.content;  
      }
    })
    } else if (parent.id == "list-finish"){
      const  radioBtn3 = document.getElementById("Finished");
      radioBtn3.checked = true;
      let savedTasks2 = JSON.parse(localStorage.getItem("finish")) || [];
      savedTasks2.forEach((task) =>{
      if(task.id == i){
        const category = document.getElementById("category2");
        const title = document.getElementById("title2");
        const content = document.getElementById("content2"); 
        category.value= task.category;
        title.value = task.title;
        content.value = task.content;  
      }
    })
    }

    
    const modal = document.getElementById("Modal");
    // Khi người dùng nhấn vào nút, hiển thị modal
    modal.style.display = "block";
    modal.style.display = "flex";
    // Khi người dùng nhấp chuột ra ngoài modal, ẩn modal
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
    }
  };
  console.log(chooseSection())
        before1= chooseSection();
        console.log(before1 + " ==");
};
  }
};

createEdit();

var before1 = -1;

const EditBox = () => {
  console.log(a);
  const id = a;
  const category = document.getElementById("category2").value;
  const title = document.getElementById("title2").value;
  const content = document.getElementById("content2").value;
  const date1 = date();
   if (category !== "" && title !== "" && content !== "") {
      let data = JSON.parse(localStorage.getItem("key"));
      let doing = JSON.parse(localStorage.getItem("doing"));
      let finish = JSON.parse(localStorage.getItem("finish"));
      if(before1 == 1){
        data = data.filter((obj) => obj.id !== id);
      } else if( before1 == 2){
        doing = doing.filter((obj) => obj.id !== id);
      } else if (before1 = 3){
        finish = finish.filter((obj) => obj.id !== id);
      }
    const newObj = {
         category: category,
           title: title,
           content: content,
           id: id,
          date: date1,
        }
      if(chooseSection() == 1){
       
       data.push(newObj);
        localStorage.removeItem('key');
        localStorage.setItem('key',JSON.stringify(data));

        localStorage.removeItem('doing');
        localStorage.setItem('doing', JSON.stringify(doing));

        localStorage.removeItem('finish');
        localStorage.setItem('finish', JSON.stringify(finish));

        console.log('key');
        renderBox();
      } else if (chooseSection() == 2){
       
        doing.push(newObj);
        localStorage.removeItem('doing');
        localStorage.setItem('doing', JSON.stringify(doing));

        localStorage.removeItem('key');
        localStorage.setItem('key',JSON.stringify(data));

        localStorage.removeItem('finish');
        localStorage.setItem('finish', JSON.stringify(finish));
        console.log('doing');
        renderBox();
      } else if(chooseSection() == 3){
        
        
        finish.push(newObj);
        localStorage.removeItem('finish');
        localStorage.setItem('finish', JSON.stringify(finish));

        localStorage.removeItem('key');
        localStorage.setItem('key',JSON.stringify(data));

        localStorage.removeItem('doing');
        localStorage.setItem('doing', JSON.stringify(doing));

        console.log('finish');
        renderBox();
      }
  
  renderBox();
  close.onclick();

   }
};




var close = document.getElementById("close");
// Khi người dùng nhấn vào nút đóng, ẩn modal
close.onclick = function () {
  const modal = document.getElementById("Modal");
  modal.style.display = "none";
};



var checkRDO = ()=>{
  const element = document.getElementsByClassName('checkBTN');
  for(let i=0 ; i< element.length; i++){
   
    if (element[i].id == "list-to-do"){

      const  radioBtn1 = document.getElementById("ToDo");
      radioBtn1.checked = true;
      break;
      
    } else if (element[i].id == "list-doing"){
      const  radioBtn2 = document.getElementById("Doing");
      radioBtn2.checked = true;
      break;
    } else if (element[i].id == "list-finish"){
      const  radioBtn3 = document.getElementById("Finished");
      radioBtn3.checked = true;
      break;
  }
}
};




