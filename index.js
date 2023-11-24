let server = require('./server'); // ./ 는 같은 폴더에 있는 이라는 뜻    이게 모듈화 과정이야 아까 server.js 에는 http라는 모듈을 불러오듯이 이번엔 내가 만든 거 가져오는거
//index.js 에서 server.js 를 호출해서 사용
let router = require('./router');

let requestHandler = require('./requestHandler');

server.start(router.route, requestHandler.handle);