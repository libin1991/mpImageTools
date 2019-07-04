// 支持 node 与 DOM 操作
console.log( document.body.appendChild( $('<button>').text( '点击' ).addClass( 'btn btn-info' ).click( () => alert( '点击' ) ).get( 0 ) ) );