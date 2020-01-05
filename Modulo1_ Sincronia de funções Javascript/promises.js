/*
  0 - Obter um usuario
  1 - Obter o numero de telefone de um usuario a partir de seu id
  2 - Obter o endereco do usuario pelo id
*/

// importamos um modulo interno do node.js
const util = require('util');
const obterEnderecoAsync = util.promisify(ObterEndereco); // Converte uma funcao callback para promise


function ObterUsuario() {
  // Quando der algum problema -> reject
  // Quando der sucesso -> resolve
  return new Promise(function resolvePromise(resolve, reject){

      setTimeout(function(){
          // return reject(new Error('Deu ruim de verade'));

          return resolve({
            id : 1,
            nome : 'Aladin',
            dataNascimento : new Date()
          })
    
      }, 1000);
    

  });
} 
  

function ObterTelefone(idUsuario) {

  return new Promise(function resolvePromise(resolve, reject){
      setTimeout(() => {
        return resolve({
          telefone : '22386987',
          ddd : 11
        });
      }, 1500);

  });

}

function ObterEndereco(idUsuario, callback) {

  setTimeout(() => {
    return callback(null,{
      rua : 'dos bobos',
      numero : 0
    });
  }, 1500);

}

const UsuarioPromise = ObterUsuario()
// Para manipular o sucesso usamos a função .then
// para manipular os errosm usamos catch
// usuario -> telefone -> telefone
UsuarioPromise
  .then( function(usuario){
    return ObterTelefone(usuario.id)
              .then(function resolveTelefone(resultado){
                  return {
                    usuario : {
                      nome : usuario.nome,
                      id : usuario.id
                    },
                    telefone : resultado
                  }
              });
  })
  .then( (resultado) => {
      const endereco = obterEnderecoAsync(resultado.usuario.id);

      return endereco
              .then( function resolverEndereco(dados){
                  return {
                    usuario : resultado.usuario,
                    telefone : resultado.telefone,
                    endereco : dados
                  }
              })
     
  })
  .then(function(resultado){
    console.log(`
      Nome: ${resultado.usuario.nome}
      Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
      Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}    
    `);
  })
  .catch((erro) => {
    console.error("Deu ruim: ", erro);
  });
