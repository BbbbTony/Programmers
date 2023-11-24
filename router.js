function route(pathname, handle, response) {  // route 경로 인데 여기에 r 만 붙이면 router 가 된다 길찾아주는 애
    console.log('pathname :' + pathname);

    if(typeof handle[pathname] == 'function'){
        handle[pathname](response);
    }else{
        response.writeHead(404, {'Content-Type' : 'text/html'});
        response.write('Not Found'); //body
        response.end();
    }
}
exports.route = route;