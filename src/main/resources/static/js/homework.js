function handleFileSelection() {
    var selectionFiles = document.getElementById('fileInput').files;
    var fileContainer = document.getElementById('fileContainer');

    for (var i =0; i<selectionFiles.length; i++){
        var fileList = document.createElement('div');
        fileList.classList.add('file-box');
        fileList.dataset.index = i+1;

        var fileName = document.createElement('p');
        fileName.textContent=selectionFiles[i].name;
        fileName.classList.add('file-name');

        var deleteButton = document.createElement('span');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent='삭제';

        deleteButton.addEventListener('click', function () {
            fileList.remove();
        });

        fileList.appendChild(fileName);
        fileList.appendChild(deleteButton);
        fileContainer.appendChild(fileList);
    }

}