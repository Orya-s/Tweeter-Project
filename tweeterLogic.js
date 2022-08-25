// tweeterLogic is the Tweeter module, which contains the data and it's functions -
// (add post, delete post, add comment, delete comment, like post)  

const Tweeter = function() {
    const _posts = [
        {
            text: "Welcome to Tweeter! This is the first post!",
            id: "p1",
            comments: [
                { id: "c1", text: "Write your own posts and comments!" },
                { id: "c2", text: "You can even delete posts from the feed by clicking the X button in the right top corner" },
                { id: "c3", text: "And you can also delete comments by clicking the X button on the left!" }
            ],
            like: false
        },

        {
            text: "To like this post click the heart button on the bottom right corner!",
            id: "p2",
            comments: [
                { id: "c4", text: "That's it! Your'e a Tweeter pro now!" },
                { id: "c5", text: "Have fun!" },
            ],
            like: false
        }
    ]


    // a private function - used for creating and removing comments, and liking posts 
    let _getPostById = function(Pid) {
        for(const post in _posts){
            if(_posts[post]["id"] == Pid) {
                return _posts[post];
            }
        }
    }

    // posts counter - holds the number of the last post that was created, in order to give each post a uniqe ID 
    let _maxPId = 2;

    // comments counter - holds the number of the last comment that was created, in order to give each comment a uniqe ID 
    let _maxCId = 5;

    const getPosts = function() {
        return _posts;
    }

    const addPost = function(t) {
        _maxPId += 1;
        _posts.push({text: t, id: "p" + _maxPId, comments:[], like:false});
    }

    const removePost = function(Pid) {
        // fix delete in loop
        
        for(const post in _posts){
            if(_posts[post]["id"] == Pid) {
                _posts.splice(post, 1);
                break;
            }
        }
    }

    const addComment = function(Pid, t) {
        if (!_getPostById(Pid)) {throw 'Post doesn\'t exist!'}
        _maxCId += 1;
        _getPostById(Pid)["comments"].push({id: "c" + _maxCId, text: t});
    }

    const removeComment = function(Pid, Cid) {
        // fix delete in loop  // filter ?

        const com = _getPostById(Pid)["comments"]
        for(const i in com) {
            if(com[i]["id"] == Cid) {
                com.splice(i,1);
                break;
            }
        }
    }

    const likePost = function(Pid) {
        const liked = _getPostById(Pid).like;
        if(liked) {
            _getPostById(Pid).like = false;
        }
        else {
            _getPostById(Pid).like = true;
        }
    }


    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment,
        likePost
    }
}
