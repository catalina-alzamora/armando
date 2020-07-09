const draggableElements = document.querySelectorAll('.draggable');
const droppableElements = document.querySelectorAll('.droppable');

draggableElements.forEach(e => {
    e.addEventListener('dragstart', dragStart);
    // e.addEventListener('drag', drag);
    //e.addEventListener('dragend', dragEnd);
});

droppableElements.forEach(e => {
    e.addEventListener('dragenter', dragEnter);
    e.addEventListener('dragover', dragOver);
    e.addEventListener('dragleave', dragLeave);
    e.addEventListener('drop', drop);
});

// Drag and Drop Functions

function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
}
function dragEnter(e) {
    e.target.classList.add('droppable-hover');
}
function dragOver(e) {
    e.preventDefault(); // this is to avoid default property which is being not draggable
}
function dragLeave(e) {
    e.target.classList.remove('droppable-hover');
}
function drop(e) {
    e.preventDefault(); // this is to avoid default event which is to open the image in another tab
    e.target.classList.remove('droppable-hover');
    const draggableElementData = e.dataTransfer.getData('text'); 
    const droppableElementData = e.target.getAttribute('data-draggable-id');
    console.log(droppableElementData)
    if(draggableElementData === droppableElementData) {
        e.target.classList.add('dropped');
        const draggableElement = document.getElementById(draggableElementData);
        draggableElement.classList.add('dragged');
        draggableElement.setAttribute('draggable', 'false');
    }
}

