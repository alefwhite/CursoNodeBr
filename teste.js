function retornaJson() {
    let Obj = [
        {
            'Id'   : '1',
            'Nome' : 'Usuario',
            'Data' : new Date()  
        },
        {
            'nomes' : [{'A' : 'Alef'},{'B' : 'Bruna'},{'C' : 'Carol'}]
        },
        {  'Mytest' : 
            [
                {'Teste' : 1},
                {'Teste2' : 2}
            ]        
        }    

    ]
    
    return JSON.stringify(Obj); 
}



function buscaUsuario(callback) {
    setTimeout(function(){
        return callback(retornaJson())

    }, 1000);
}


var pegaUsuario = (retorno) => {    
    console.log('Retorno Json ' + retorno)
    console.log(JSON.parse(retorno));
   } 




class Teste{
    metodoGet(){
        buscaUsuario(pegaUsuario);
    }
}

requisita = new Teste()
requisita.metodoGet()


let Objeto = [
    {
        'Id'   : '1',
        'Nome' : 'Usuario',
        'Data' : new Date()  
    },

    {
        'nomes' : [{'A' : 'Alef'},{'B' : 'Bruna'},{'C' : 'Carol'}]
    },

    {  'Mytest' : 
        [
            {'Teste' : 1},
            {'Teste2' : 2}
        ]        
    }    


];

alert(Objeto[2].Mytest[1].Teste2)


let Objeto2 = [
    {
        'nome'  : 'A', 
        'idade' : 10
    },
    {
        'nome'  : 'B', 
        'idade' : 20
    },
    {
        'nome'  : 'C', 
        'idade' : 30
    }
    
];




let varrer = new Array();

Objeto2.forEach( (parm) => {
    let Auxobj = new Object();
    Auxobj.nome = parm.nome;
    Auxobj.idade = parm.idade;
    
    varrer.push(Auxobj);

});

console.table(varrer)


let retornoJs = [
    {
        "CompanyId": "62",
        "CompanyLogo": "PublicTempStorage/image/gx_upl_bbb1775062840130d43512313d236401.jpg",
        "CompanyName": ""
    },
    {
        "CompanyId": "67",
        "CompanyLogo": "",
        "CompanyName": ""
    },
    {
        "CompanyId": "65",
        "CompanyLogo": "",
        "CompanyName": "123"
    },
    {
        "CompanyId": "59",
        "CompanyLogo": "",
        "CompanyName": "3472062541"
    },
    {
        "CompanyId": "66",
        "CompanyLogo": "PublicTempStorage/image/gx_upl_09215960b23a013072c512313d236401.jpg",
        "CompanyName": "??"
    },
    {
        "CompanyId": "55",
        "CompanyLogo": "",
        "CompanyName": "A"
    },
    {
        "CompanyId": "8",
        "CompanyLogo": "PublicTempStorage/image/emp_cb4c09404f8e012fc4a812313d14bee8.png",
        "CompanyName": "Lumesse"
    },
    {
        "CompanyId": "53",
        "CompanyLogo": "PublicTempStorage/image/gx_upl_5633c76017250130f80412313d236401.tmp",
        "CompanyName": "Marcelo"
    },
    {
        "CompanyId": "58",
        "CompanyLogo": "",
        "CompanyName": "maryta"
    },
    {
        "CompanyId": "60",
        "CompanyLogo": "",
        "CompanyName": "maryta"
    },
    {
        "CompanyId": "61",
        "CompanyLogo": "",
        "CompanyName": "maryta"
    },
    {
        "CompanyId": "10",
        "CompanyLogo": "PublicTempStorage/image/emp_cb4c70a04f8e012fc4a812313d14bee8.jpg",
        "CompanyName": "My Tab"
    },
    {
        "CompanyId": "51",
        "CompanyLogo": "PublicTempStorage/image/gx_upl_e44bea8010110130ece812313d236401.tmp",
        "CompanyName": "MyCompany"
    },
    {
        "CompanyId": "52",
        "CompanyLogo": "PublicTempStorage/image/gx_upl_ee0fc4e010110130ece912313d236401.tmp",
        "CompanyName": "MyCompany"
    },
    {
        "CompanyId": "43",
        "CompanyLogo": "PublicTempStorage/image/gx_upl_d35f4320f618012fc57912313d236401.tmp",
        "CompanyName": "Pepe"
    },
    {
        "CompanyId": "45",
        "CompanyLogo": "PublicTempStorage/image/gx_upl_906d0920f6a9012fc62912313d236401.tmp",
        "CompanyName": "Pepe STL"
    }
]

                                                
let novoArray = new Array(); 


retornoJs.forEach( (parm) => {
    let Auxobj = new Object();
    Auxobj.CompanyId   = parm.CompanyId.length > 1 ? parm.CompanyId : "Sem ID";
    Auxobj.CompanyLogo = parm.CompanyLogo.length > 1 ? parm.CompanyLogo : "Sem Logo";
    Auxobj.CompanyName = parm.CompanyName.length > 1 ? parm.CompanyName : "Sem Nome";    
    
    novoArray.push(Auxobj);

});

novoArray.sort( function(a,b) { 
    return a.CompanyId - b.CompanyId
});

console.table(novoArray);

console.log(novoArray);

let mapTeste = novoArray.map( (parm) => {

    return parseInt(parm.CompanyId) > 0 ? parseInt(parm.CompanyId) * 2 : 0;

});

console.log(mapTeste);