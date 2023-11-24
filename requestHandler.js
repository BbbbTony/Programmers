function main (response) {
    console.log('main');

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Main page'); //body
    response.end();
}

function login (response) {
    console.log('login');

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Login page'); //body
    response.end();
}




let handle = {}; // key:value 쌍으로 이루어진 상자긴 한데 사전같은 상자임
handle['/'] = main;  // / 를 찾아오면 main 이야
handle['/login'] = login; // 예를 든거야 [] 안에 있는게 키 고  login이 값(value)

exports.handle = handle;