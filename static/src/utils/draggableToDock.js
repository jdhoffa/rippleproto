const draggableToDock = view => ({
  draggable: true,
  onDragStart: ev => {
    const MainView = document.getElementById("MainView");
    const draggable = ev.target;
    setTimeout(() => {
      MainView.classList.add("drag");
      draggable.classList.add("drag");
    }, 1);
    ev.dataTransfer.setData("text", view);
  },
  onDragEnd: ev => {
    const MainView = document.getElementById("MainView");
    const draggable = ev.target;
    setTimeout(() => {
      MainView.classList.remove("drag");
      draggable.classList.remove("drag");
    }, 1);
  }
});

export default draggableToDock;
