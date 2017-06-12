var nums=6;
var colors=generateColors(nums);

var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");

colorDisplay.textContent=pickedColor;
var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");
for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
    //add click listerners
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {
            messageDisplay.textContent="Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
            resetButton.textContent="Play Again!";
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again!";
        }
    });
}

resetButton.addEventListener("click",function(){
    colors=generateColors(nums);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
    this.textContent="New Colors";
});

easyBtn.addEventListener("click",function(){

    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    nums=3;
    colors=generateColors(nums);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";  
        }
    }

});
hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    nums=6;
    colors=generateColors(nums);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
         squares[i].style.backgroundColor=colors[i];
        
            squares[i].style.display="block"; 
    }
});

function changeColors(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function pickColor()
{
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    var color="rgb("+r+", "+g+", "+b+")";
    return color;
}


