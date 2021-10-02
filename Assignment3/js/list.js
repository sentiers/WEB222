// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function() {
    var myFruitsContainer = document.querySelector("#fruitContainer");
    var fruitsList = "<p><ol>";
    for (var i = 0; i < fruits.length; i++) {
        fruitsList += "<li>" + fruits[i] + "</li>";
    }
    fruitsList += "</ol></p>";
    myFruitsContainer.innerHTML += fruitsList;

    
    var myDirectoryContainer = document.querySelector("#directoryContainer");
    var dList = "<p><ul>";
    for(var i=0; i<directory.length; i++){
        dList += "<li>" + directory[i].name
        if(directory[i].type=="file"){
            dList += "</li>";
        }else {
            dList += "<ul>"
            for (var j = 0; j < directory[i].files.length; j++) {
                dList += "<li>" + directory[i].files[j].name + "</li>";
        }
        dList += "</ul></li>";}
    }
    dList += "</ul></p>";
    myDirectoryContainer.innerHTML += dList;
};