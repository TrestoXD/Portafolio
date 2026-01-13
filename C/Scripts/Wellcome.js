let debug = true;

window.onload = function(){
    if(debug == true || !localStorage.getItem('visited')){
        console.log("first Time")
        
        localStorage.setItem('visited', true);
    }
}