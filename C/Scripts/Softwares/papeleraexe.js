function PapeleraExe(){
    WindowExe('Papelera de reciclaje', 400, 200, 'emptyreciclebin', true, true, `
    <div class="papelera">
        <button>File</button>
        <button>Edit</button>
        <button>View</button>
        <button>Help</button>
        <div class="archivos-papelera">
            <div class="archivos-papelera-tipos">
                <p>Name</p>
                <p>Localización Original</p>
                <p>Date Deleted</p>
            </div>
            <div class="archivos-papelera-archivos">
            </div>
        </div>
        <div style="display:flex; width:100% ">
            <div class="papelerainfo">0 objeto(s)</div>
            <div class="papelerainfo">0 bytes</div>
        </div>
    </div>
        `);
}