class Adder {
  static parent = document.querySelector(".todos-wrapper")

  static adder = document.querySelector("#adding");
  static addBtn = document.querySelector("#add-task-btn")

  static taskInput = document.querySelector("#name-task")
  static descriptionInput = document.querySelector("#description-task")

  static indexTask

  constructor(nameTask, descriptionTask = null) {
    this.nameTask = nameTask
    this.descriptionTask = descriptionTask
    this.completed = false
  }

  static showAdder(index = false) {
    this.indexTask = index
    document.querySelector("#adding").style.display = "block"
    if (index || index === 0) {
      Task.taskInput.value = tasksArr[index].nameTask
      Task.descriptionInput.value = tasksArr[index].descriptionTask
      Task.addBtn.innerHTML = `
              <button onclick="Adder.edit()">Save</button>
              `
    } else {
      Task.addBtn.innerHTML = `
              <button onclick="Adder.add()">Add</button>
              `
    }
  }
  static add() {
    Task.addTask()
    this.abolition()
  }
  static edit() {
    Task.editTask(this.indexTask)
    this.abolition()
  }
  static abolition() {
    Task.adder.style.display = "none";
    Task.addBtn.innerHTML = "Add";
    document.querySelector("#formAdd").reset()
  }
}
