
function mainmenuExe(){
    console.log("opening menu...")
    MainmenuExe('0px','40px', true,false,`
        <div style="display:flex">
            <div style="height:300px; background-color:gray; display:flex; align-items: flex-end;">
                <img src="./Styles/icons/sidebar95.png" id="minmenus" style="height:200px; ">
            </div>
            <div style="display:flex; flex-direction:column; width:100%;">
                <button onmouseenter="MainmenusecExe('200px','166px',true,true, '${Programs_Menu}')"> <img src=./Styles/appicons/directoryprogramgroup.ico> <p>Programas</p> <img class=arrow src=./Styles/icons/Arrow.ico> </button>
                <button onmouseenter="MainmenusecExe('200px','272px',true,true, '${Documentos_Menu}')"> <img src=./Styles/appicons/documentsnormal.ico> <p>Documentos</p> <img class=arrow src=./Styles/icons/Arrow.ico> </button>
                <button onmouseenter="MainmenusecExe('200px','206px',true,true, '${Settings_Menu}')"> <img src=./Styles/appicons/settingsgear.ico style=scale:1.5;> <p>Configuración</p> <img class=arrow src=./Styles/icons/Arrow.ico> </button>
                <button onmouseenter="MainmenusecExe('200px','166px',true,true, '${Find_Menu}')"> <img src=./Styles/appicons/searchfile.ico> <p>Buscar</p> <img class="arrow" src=./Styles/icons/Arrow.ico> </button>
                <button onmouseenter="Delete_MainmenusecExe()"> <img src=./Styles/appicons/helpbookbig.ico> <p>Ayuda</p></button>
                <button onmouseenter="Delete_MainmenusecExe()"> <img src=./Styles/appicons/applicationhourglass.ico> <p>Ejecuta</p></button>
                <hr>
                <button onmouseenter="Delete_MainmenusecExe()" style=bottom:0;> <img src=./Styles/appicons/shutdownnormal.ico style='height: 45px; margin:-6px'> <p>Apagar...</p></button>
            </div>
        </div>
        `);
}

let Programs_Menu = `<div> <button> <img src=./Styles/icons/MiniIcons/Programgroup.ico> Accessories</button> <button> <img src=./Styles/icons/MiniIcons/Programgroup.ico> Online Services</button> <button> <img src=./Styles/icons/MiniIcons/Programgroup.ico> StartUp</button> <button><img src=./Styles/icons/MiniIcons/msie1-3.png><p>Internet Explorer</p></button> <button onclick=CmdEXE()> <img src=./Styles/appicons/msdos1.png> CMD</button> <button>Mail</button> <button><img src=./Styles/icons/MiniIcons/WindowsExplorer.ico>Windows Explorer</button> </div>`
let Documentos_Menu = `<div> <button onclick=ReadmeEXE()> <img src=./Styles/icons/MiniIcons/Txt1-3.ico> Readme.txt</button> </div>`
let Settings_Menu = `<div> <button>Control Panel</button> <button>Taskbar & Start Menu...</button> </div>`
let Find_Menu = `<div> <button>Files or Folders...</button> <button>On The XD Network...</button> </div>`