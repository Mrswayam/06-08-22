// typeof
// Array instance of
var a = ["Swayam", "Pateliya"]; 
document.write(a instanceof Array);

document.write("<br/>");

// Class instance of
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}
var R=new Rectangle(60,50);
document.write(R instanceof Rectangle);

document.write("<br/>");


document.write(R.height+R.width);