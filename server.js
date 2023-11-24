let http = require('http'); // ()안에 있는 모듈 가져오는 require(필요하다)함수
let url = require('url');
//const { route } = require('../router');


function start(route, handle) {
    function onRequest(request, response) { // request요구 response응답
        let pathname = url.parse(request.url).pathname; // pathname은 8888뒤에 오는 경로를 나타낸다.
        //parse 는 문자열 캣치
        route(pathname, handle, response); //루트한테 패쓰네임 전달        
    }
    
    http.createServer(onRequest).listen(8888); //localhost:8888   8888은 포트번호
}

exports.start = start;  // 함수 만들면 안에 코드 들은 함수 안에서만 작동하는데 이 코드 써주면 다른 페이지에서도 사용 가능

//라우터  어디로갈지 경로를 정해주는 애