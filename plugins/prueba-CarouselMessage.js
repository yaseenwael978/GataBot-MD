let handler = async (m, { conn, usedPrefix, command, text }) => {

/*const messages = [
[
'Descripción 1', 
'Footer 1',
'https://telegra.ph/file/b31cd03f716d362b33716.jpg',
[['Botón 1', 'id1'], ['Botón 2', 'id2']],
'Texto para copiar 1',
[['Enlace 1', 'https://example.com/link1'], ['Enlace 2', 'https://example.com/link2']],
[[
            'Lista',
            'Sección ',
            'Titulo',
            'Tema',
            'Descripcion',
            'Id',
            
                
            
]]],
[
'Descripción 2',
'Footer 2',
'https://telegra.ph/file/b31cd03f716d362b33716.jpg',
[['Botón 1', 'id1'], ['Botón 2', 'id2']],
'Texto para copiar 2',
[['Enlace 1', 'https://example.com/link1'], ['Enlace 2', 'https://example.com/link2']],
[[
'Lista', 
'Sección ',  
'Titulo',  
'Tema',  
'Descripcion', 
'Id',
]]]]*/

const messages = [
    [
        'Descripción 1', // Descripción general del mensaje
        'Footer 1',      // Pie de página del mensaje
        'https://telegra.ph/file/b31cd03f716d362b33716.jpg', // URL de la imagen
        [['Botón 1', 'id1'], ['Botón 2', 'id2']], // Botones de acción
        'Texto para copiar 1', // Texto que se puede copiar
        [['Enlace 1', 'https://example.com/link1'], ['Enlace 2', 'https://example.com/link2']], // Enlaces
        [ // Lista de secciones y filas
            ['Sección 1', [ // Título de la sección y filas asociadas
                ['Header opción 1', 'Opción 1', 'Descripción opción 1', 'id_opcion_1'], // Fila 1
                ['Header opción 2', 'Opción 2', 'Descripción opción 2', 'id_opcion_2']  // Fila 2
            ]],
            ['Sección 2', [ // Título de la segunda sección y filas asociadas
                ['Header opción 3', 'Opción 3', 'Descripción opción 3', 'id_opcion_3'], // Fila 1
                ['Header opción 4', 'Opción 4', 'Descripción opción 4', 'id_opcion_4']  // Fila 2
            ]]
        ]
    ],
    // Otros mensajes pueden seguir aquí...
];


  
await conn.sendCarousel(m.chat, 'Texto', 'Linea', 'TEXTO', messages, m)
}

handler.command = /^(carousel)$/i
export default handler
