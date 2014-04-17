/* 
Daily Habit Tracker Calendar 
Pradeep Gowda <pradeep@btbytes.com>

Notes: 
- for letter size paper
- change variable `year` to change calendar year

Changelog:
- v0.1: 2014.04.15: First release

*/

var doc = new jsPDF("l", "in", "letter");
//XXX: set year
var year = 2014;
doc.setFont("helvetica");
doc.setLineWidth(0.005);

// outer box
doc.line(0.5,0.5, 10.5,0.5);
doc.line(10.5,0.5, 10.5,8.0);
doc.line(10.5,8.0, 0.5, 8.0);
doc.line(0.5, 8.0,0.5,0.5);
// page header

doc.text(1.1, 1, year.toString());
doc.text(4, 1, 'Daily habit tracker');
doc.line(6,1.01,10.30,1);
// weekday header
doc.setFontSize(10);
var wdays = ['S', 'M', 'T', 'W', 'Th', 'F', 'Sa']
doc.setDrawColor(160,160,160);    
for (var i=0; i<7*5+2; i++){
    doc.setFillColor(200,200,200);
    doc.rect(1.1+i*0.25,1.25, 0.25, 0.25,'FD');
    doc.text(1.15+i*0.25,1.44,wdays[i%7]);
}

//calendar
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
for (var j=0; j<12; j++){
    doc.text(0.75, 1.72+j*0.50, months[j]);
    var num_days = new Date(year, j+1, 0).getDate();
    var wd = new Date(year,j, 1).getDay();
    for (var i=0; i<7*5+2; i++){
        if (i%7==0 || i%7==6){
            doc.setFillColor(165,165,185);
        }else {
            doc.setFillColor(255,255,255);
        }
    
        doc.rect(1.1+i*0.25,1.50+j*0.50, 0.25, 0.55,'FD');    
        if (i>=wd && i<wd+num_days){
            var dt = i-wd+1;
            doc.text(1.15+i*0.25,1.69+j*0.50, dt.toString());
        }
    }
}
// footer
doc.text(8.40, 7.85, 'made by @btbytes. 2014.04.15');