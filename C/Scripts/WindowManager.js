console.log("Window Manager Running")

let Header = document.getElementById('WTop-Bar');

for (let i = 1; i < localStorage.getItem("totalsoft"); i++) {
    console.log("win"+i);

    let Windows = document.getElementById('win' + i);
    let startX = 0, startY = 0, newX = 0, newY = 0;

    Header.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);

    function mouseDown(e){
        if(e.target.id == 'WTop-Bar'){
            e.preventDefault();
        
            startX = e.clientX - Windows.getBoundingClientRect().left;
            startY = e.clientY - Windows.getBoundingClientRect().top;

            console.log("StartX", startX);
            console.log("StartY", startY);

            document.addEventListener('mousemove', mouseMove);
        }
        currentWindow(e);
    }

    function mouseMove(e){
        e.preventDefault();

        newX = e.clientX - startX;
        newY = e.clientY - startY;

        Windows.style.top = (newY) + 'px';
        Windows.style.left = (newX) + 'px';
    }

    function mouseUp(e){
        console.log("MouseUp")
        document.removeEventListener('mousemove', mouseMove);
    }

    function currentWindow(e){
        console.log(e.target.id);   
    }

    function closeWindow(ides){
        console.log(`cerrando... ` + ides)
        document.getElementById('win'+ ides).outerHTML = ' ';
        document.getElementById('btt'+ides).outerHTML = ' ';
    }
}
