window.onload =
    () => {
    const listDiv = document.getElementById('list');
    const ul = document.createElement('ul');
    ul.innerText = 'Item List:';
    listDiv.appendChild(ul);

    for(let i = 0; i < 10; i++) {
        let li = document.createElement('li');
        li.innerText = `List Item ${i + 1}`;
        ul.appendChild(li);
    }
};