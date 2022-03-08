<!DOCTYPE html>
<html lang="en">
<head>
<title>GeniusHour|Main</title>
  <link rel="icon" type="image/x-icon" href="https://genuishour-paras.w3spaces.com/images/Picture1.png">
</head>
<body>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}
/* Style the body */
body {
  font-family: Comic Sans MS , Comic Sans MS , Comic Sans MS ;
  margin: 0;
}
/* Header/logo Title */
.header {
  padding: 80px;
  text-align: center;
  background: #1abc9c;
  color: white;
}
/* Increase the font size of the heading */
.header h1 {
  font-size: 40px;
}
/* Style the top navigation bar */
.navbar {
  overflow: hidden;
  background-color: #333;
}
/* Style the navigation bar links */
.navbar a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}
/* Right-aligned link */
.navbar a.right {
  float: right;
}
/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}
/* Column container */
.row {  
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
}
/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
  -ms-flex: 30%; /* IE10 */
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}
/* Main column */
.main {   
  -ms-flex: 70%; /* IE10 */
  flex: 70%;
  background-color: white;
  padding: 20px;
}
/* Fake image, just for this example */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}
/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
}
/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {
  .row {   
    flex-direction: column;
  }
}
/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
@media screen and (max-width: 400px) {
  .navbar a {
    float: none;
    width: 100%;
  }
}
</style>
</head>
<body>
<div class="header">
  <h1>Genuis Hour</h1>
  <p>By Paras</p>
</div>
<div class="navbar">
  <a href="#">CountDown</a>
  <a href="#">slide show </a>
  <a href="#">newsletter</a>
  <a href="#" class="right">MeberLogin</a>
</div>
<div class="row">
  <div class="side">
    <h2>About Me</h2>
    <h5>Photo of me:</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>12 year old game dev</p>
    <h3>More Text</h3>
    <p>Lorem ipsum dolor sit ame.</p>
    <div class="fakeimg" style="height:60px;">Image</div><br>
    <div class="fakeimg" style="height:60px;">Image</div><br>
    <div class="fakeimg" style="height:60px;">Image</div>
  </div>
  <div class="main">
    <h2>TITLE HEADING</h2>
    <h5>Frist Day Of SCHOOL, set 9, 2021</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    <br>
    <h2>TITLE HEADING</h2>
    <h5>Title description, Sep 2, 2017</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
<div class="footer">
  <h2>Time</h2>
  <h2><!DOCTYPE html>
<html>
   <head>
   <script type="text/javascript">
   function startTime()
   {
   var today=new Date();
   var h=today.getHours();
   var m=today.getMinutes();
   var s=today.getSeconds();
   // add a zero in front of numbers<10
   m=checkTime(m);
   s=checkTime(s);
   document.getElementById('txt').innerHTML=h+":"+m+":"+s;
   t=setTimeout('startTime()',500);
   }
   function checkTime(i)
   {
   if (i<10)
   {
   i="0" + i;
   }
   return i;
   }
   </script>
   </head>
   <body onload="startTime()">
   <div id="txt"></div>
   </body>
   </html></h2>
</div>
 
</body>
</html>
</div>

</body>
</html>

