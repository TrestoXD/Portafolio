
function mainmenuExe(){
    console.log("opening menu...")
    MainmenuExe('0px','40px', true,false,`
        <div style="display:flex">
            <div style="height:300px; background-color:gray; display:flex; align-items: flex-end;">
                <img src="./Styles/icons/sidebar95.png" id="minmenus" style="height:200px; ">
            </div>
            <div style="display:flex; flex-direction:column; width:100%;">
                <button onmouseenter="MainmenusecExe('200px','166px',true,true, '${Programs_Menu}')"> <img src="./Styles/icons/directory_program_group.ico"> <p>Programas</p> <img class="arrow" src="./Styles/icons/Arrow.ico"> </button>
                <button onmouseenter="MainmenusecExe('200px','166px',true,true, '${Documentos_Menu}')"> <img src="./Styles/icons/documents_normal.ico"> <p>Documentos</p> <img class="arrow" src="./Styles/icons/Arrow.ico"> </button>
                <button> <img src="./Styles/icons/settings_gear.ico" style="scale:1.5;"> <p>Configuración</p> <img class="arrow" src="./Styles/icons/Arrow.ico"> </button>
                <button> <img src="./Styles/icons/search_file.ico"> <p>Encuentrame</p> <img class="arrow" src="./Styles/icons/Arrow.ico"> </button>
                <button> <img src="./Styles/icons/help_book_big.ico"> <p>Ayuda</p></button>
                <button> <img src="./Styles/icons/application_hourglass.ico"> <p>Ejecuta</p></button>
                <hr>
                <button style="bottom:0; "> <img src="./Styles/icons/shut_down_normal.ico" style="height: 50px;"> <p>Apagar...</p></button>
            </div>
        </div>
        `);
}

let Programs_Menu = `<div> <button>Accessories</button> <button>Online Services</button> <button>StartUp</button> <button>Internet Explorer</button> <button>CMD</button> <button>Mail</button> <button>Windows Explorer</button> </div>`
let Documentos_Menu = `<div> <button>Readme.txt</button> </div>`
let Settings_Menu = `<div> <button>Control Panel</button> <button>Taskbar & Start Menu...</button> </div>`
let Find_Menu = `<div> <button>Files or Folders...</button> <button>On The XD Network...</button> </div>`