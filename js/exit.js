 function changeText {
   document.getElementById("change").innerHTML = "hello";
   document.getElementById("change").value = "hello";
 }

 //THIS IS COPIED CODE BUT I WILL CHECK THIS AND UNDERSTAND IT THEN EDIT IT MYSELF! - Olivia
 window.onload = function () {
 var ImageMap = function (map, img) {
 var n,
     areas = map.getElementsByTagName('area'),
     len = areas.length,
     coords = [],
     previousWidth = 1280;
 for (n = 0; n < len; n++) {
     coords[n] = areas[n].coords.split(',');
 }
 this.resize = function () {
     var n, m, clen,
         x = img.offsetWidth / previousWidth;
     for (n = 0; n < len; n++) {
         clen = coords[n].length;
         for (m = 0; m < clen; m++) {
             coords[n][m] *= x;
         }
         areas[n].coords = coords[n].join(',');
     }
     previousWidth = document.body.clientWidth;
     return true;
 };
 window.onresize = this.resize;
},
imageMap = new ImageMap(document.getElementById('map_ID'), document.getElementById('img_ID'));
imageMap.resize();
return;

function changeText(){
 document.getElementsById('change').color='red';
}


}