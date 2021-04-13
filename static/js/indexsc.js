console.log("it's working and running")

function timeshower(){
    var span = document.getElementById('timeshower');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    span.innerHTML = time;
}

setInterval(timeshower, 1000);

function createFolder(){

    var name = prompt('Enter the Folder Name', "New Folder");

    let area = document.getElementById('area');

    let folder = document.createElement("div");
    let folderimg = document.createElement("span");
    let folderimage = document.createElement("img");
    let foldername = document.createElement("span");

    folder.className = "folder";
    folder.setAttribute('onclick', 'openFolder()');
    folderimg.className = "folder-img";
    foldername.className = "folder-name";
    foldername.innerHTML = name;
    folderimage.src = "static/css/folder-button.svg";

    area.appendChild(folder);
    folder.appendChild(folderimg);
    folderimg.appendChild(folderimage);
    folder.appendChild(foldername);

    console.log("Folder Created Successfully...")
}

function openFolder(id){
    let url = 'folders/' + id;
    let params = 'width=500, height=300';
    var folderWindow = window.open(url, 'test', params);
}