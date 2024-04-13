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