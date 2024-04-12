document.getElementById('quest').onclick = function() {
    var quest = document.getElementById('quest');
    if (quest.style.left === '-300px') {
        quest.style.left = '0';
    } else {
        quest.style.left = '-300px';
    }
};

document.getElementById('closeButton').onclick = function() {
    var quest = document.getElementById('quest');
    quest.style.left = '-300px';
};