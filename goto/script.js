console.log("Script loaded");
var url = window.location.href;
var urlSplit = url.split("/goto");
var url = urlSplit[1];
// console.log(url.split("/")[1]);
console.log("You are redirected to: " + url.split("/")[1]);
