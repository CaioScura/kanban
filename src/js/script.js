//seleciona todos que tiverem a classe
document.querySelectorAll('.kanban-card').forEach(card =>{
    //dragstart = quando começa a arrastar deixa fazer uma acao
    card.addEventListener('dragstart', e =>{
        e.currentTarget.classList.add('dragging');
    })

    //depois que solta
    card.addEventListener('dragend', e =>{
        e.currentTarget.classList.remove('dragging');
    })
})


//receber o card que esta sendo movido
document.querySelectorAll('.kanban-cards').forEach(column =>{
    column.addEventListener('dragover', e =>{
        //permite que o card seja solto
        e.preventDefault();
        e.currentTarget.classList.add('cards-hover');
    })


    column.addEventListener('dragleave', e =>{
        e.currentTarget.classList.remove('cards-hover');
    })

    column.addEventListener('drop', e=>{
        e.currentTarget.classList.remove('cards-hover');

        const dragCard = document.querySelector('.kanban-card.dragging');
        e.currentTarget.appendChild(dragCard);
    })
})