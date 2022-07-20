const {pool} = require("../../../config/database");
const postDao = require("./postDao");

// 게시물 조회
exports.retrieveUserPosts = async function(userIdx) {
    const connection = await pool.getConnection(async (conn) => conn );
    const userPostResult = await postDao.selectUserPosts(connection, userIdx);

    connection.release();

    return userPostResult;
}


// 게시물 리스트 조회
exports.retrievePostList = async function(userIdx){
    const connection = await pool.getConnection(async (conn) => conn );
    const postListResult = await postDao.selectPosts(connection, userIdx);

    // for 로 postIdx 값을 하나 씩 받아서 postIdx에 따른 img를 받음. 
    for (post of postListResult){
        const postIdx = post.postIdx;
        const postImgResult = await postDao.selectpostImgs(connection, postIdx);
        post.imgs = postImgResult;
        // 객체의 속성을 추가 (img)
    }

    connection.release();
    
    return postListResult;
    
}

