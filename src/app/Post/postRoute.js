module.exports = function(app) {
    const post = require('./postController');

    // 3.1 게시물 리스트 조회 API

    // posts, 게시물 리스트 조회 API는 쿼리스트링을 사용
    app.get('/posts', post.getPosts);

    // 라우팅 경로가 정확해야 postman에서 API를 실행한다.
    //Postman의 에러 사진이 있으니, 그걸 참고하면서 내가 경험한 에러 정리!!!!!!!!!!! - 에러 해결하는데 5시간? 정도 걸린듯...
}