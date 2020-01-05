/*
  0 - Obter um usuario
  1 - Obter o numero de telefone de um usuario a partir de seu id
  2 - Obter o endereco do usuario pelo id
*/

function ObterUsuario(callback) {
  // Utilizamos o setTimeout para simular um dado que venha do banco após 1500ms
  setTimeout(function(){

      return callback(null, {
        id : 1,
        nome : 'Aladin',
        dataNascimento : new Date()
      })

  }, 1500);
}

function ObterTelefone(idUsuario, callback) {

  setTimeout(() => {
    return callback(null,{
      telefone : '22386987',
      ddd : 11
    });
  }, 2000);

}

function ObterEndereco(idUsuario, callback) {

  setTimeout(() => {
    return callback(null,{
      rua : 'dos bobos',
      numero : 0
    });
  }, 2000);

}

/** 
 * 
  // Função callback externa
  function resolverUsuario(erro, usuario) {
    console.log('Usuario: ', usuario);
  }

  // passando a função externa como callback
  ObterUsuario(resolverUsuario);

 * 
 
*/

ObterUsuario(function resolverUsuario(erro, usuario) {
    // null || "" || 0 === false
    if(erro) {
      console.error('Deu ruim em usuario: ', erro);
      return;
    }

    ObterTelefone(usuario.id, function resolverTelefone(erro1, telefone){
      if(erro1) {
        console.error('Deu ruim em Telefone: ', erro1);
        return;
      }

      ObterEndereco(usuario.id, function resolverEndereco(erro2, endereco){
        if(erro2) {
          console.error('Deu ruim em Endereco: ', erro2);
          return;
        }

        console.log(`
          Nome: ${usuario.nome}
          Endereco: ${endereco.rua}, ${endereco.numero}
          Telefone: (${telefone.ddd})${telefone.telefone}
        `);

      });

    });

});


