window.onload = function() {
    var existingTexts = JSON.parse(localStorage.getItem('texts')) || [];

    existingTexts.forEach(function(text) {
        updateList(text);
    });
};

function updateList(text) {
    var ul = document.getElementById('listContainer');
    var li = document.createElement('li');
    var img = document.createElement('img');
    img.src = "./assets/img/Group 56.jpg";
    img.alt = "delete";
    li.appendChild(document.createTextNode(text));
    li.appendChild(img);
    ul.appendChild(li);

    img.addEventListener('click', function() {
        deleteListItem(this);
    });
}

function deleteListItem(element) {
    var item = element.parentNode;
    var ul = document.getElementById('listContainer');


    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            ul.removeChild(item); 

                   
                    var text = item.firstChild.textContent;
                    removeFromLocalStorage(text);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    
    
}

function addToLocalStorage(text) {
    var existingTexts = JSON.parse(localStorage.getItem('texts')) || [];
    existingTexts.push(text);
    localStorage.setItem('texts', JSON.stringify(existingTexts));
}

function removeFromLocalStorage(text) {
    var existingTexts = JSON.parse(localStorage.getItem('texts')) || [];
    var index = existingTexts.indexOf(text);
    if (index !== -1) {
        existingTexts.splice(index, 1);
        localStorage.setItem('texts', JSON.stringify(existingTexts));
    }
}

function submitText() {
    var inputText = document.getElementById('textInput').value;

    if (inputText !== '') {
        addTextToList(inputText);
        addToLocalStorage(inputText); 
        document.getElementById('textInput').value = '';
     
    }else {
        alert("Please enter a text");
       
    }
}

function addTextToList(text) {
    updateList(text);
}



let ascendingOrder = true;

document.getElementById('sortIcon').addEventListener('click', function() {
    sortList();
});

function sortList() {
    var ul = document.getElementById('listContainer');
    var items = Array.from(ul.getElementsByTagName('li'));

    if (ascendingOrder) {
        items.sort((a, b) => a.firstChild.textContent.localeCompare(b.firstChild.textContent));
    } else {
        items.sort((a, b) => b.firstChild.textContent.localeCompare(a.firstChild.textContent));
    }

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

    items.forEach(item => ul.appendChild(item));

    ascendingOrder = !ascendingOrder;
}



function addTextToList(text) {
    var ul = document.getElementById('listContainer');
    var li = document.createElement('li');
    var img = document.createElement('img');
    img.src = "./assets/img/Group 38.png"; // Silme iconunun yolunu belirtin
    img.alt = "delete";
    li.appendChild(document.createTextNode(text));
    li.appendChild(img);
    ul.appendChild(li);

    img.addEventListener('click', function() {
        deleteListItem(this);
    });
}

