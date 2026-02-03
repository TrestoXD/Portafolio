let height = 400

function ReadmeEXE(){
    WindowExe('ReadMe.txt', 400, height, null, true, true, `
        <div class="notepad">
            <button>File</button>
            <button>Edit</button>
            <button>Search</button>
            <button>Help</button>
            <div style="height:calc(${height}px - 49px)">
                <pre>  
    ------------------------------------------------------------------------------------------
            Portfolio 95 Leeme para la información General         

                            Febrero 2026
    ------------------------------------------------------------------------------------------
    
    This document provides complementary information to supplement the Portfolio

    --------------------------
    How to Use this document
    --------------------------

    TEXTO
    TEXTO
    TEXTO
    TEXTO
    TEXTO
    TEXTO
    TEXTO
    TEXTO
    TEXTO

    TEXTOTEXTO
    TEXTOTEXTO
    TEXTO
    TEXTO
    TEXTO

    TEXTO
    TEXTO
    </pre>
            </div>
        </div>
        `);
}