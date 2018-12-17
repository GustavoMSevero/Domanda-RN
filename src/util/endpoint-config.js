

//localhost
if(__DEV__){
    exports.backendUrl = 'http://localhost:8888/sistemas/Webapps/domanda_api/';
    //http://192.168.0.22:8000
}
//producao
else{
    exports.backendUrl = 'http://191.252.101.89:3001';
}