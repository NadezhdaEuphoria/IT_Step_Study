let push = document.querySelector("#push"),
  input = document.querySelector("#newtask input"),
  tasks = document.querySelector("#tasks");

push.onclick = function () {
  if (input.length == 0) {
    alert("need a task!");
  } else {
    tasks.innerHTML += `
<div class="task">
    <span id="taskname">
        ${document.querySelector("#newtask input").value}
    </span>
    <button class="delete">
        <span>❌</span>
    </button>
</div>
`;
    let currentTasks = document.querySelectorAll(".delete");
    for (let i = 0; i < currentTasks.length; i++) {
      currentTasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
  let tasksDone = document.querySelectorAll(".task");
  for (let i = 0; i < tasksDone.length; i++) {
    tasksDone[i].onclick = function () {
      this.classList.toggle("completed");
    };
  }
  input.value = "";
};
