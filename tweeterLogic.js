
const Tweeter = function() {
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },

        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]


    let _getPostById = function(Pid) {
        for(const post in _posts){
            if(_posts[post]["id"] == Pid) {
                return _posts[post];
            }
        }
    }

    let _maxPId = 2;

    let _maxCId = 6;

    const getPosts = function() {
        return _posts;
    }

    const addPost = function(t) {
        _maxPId += 1;
        _posts.push({text: t, id: "p" + _maxPId, comments:[]});
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


    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment,

    }
}







// myTweeter tests

// const myTweeter = Tweeter()
// console.log(myTweeter.getPosts());

// myTweeter.addPost("Hello")
// console.log(myTweeter.getPosts());

// myTweeter.removePost("p2")
// console.log(myTweeter.getPosts());

// myTweeter.addComment("p3", "world!")
// console.log(myTweeter.getPosts());

// myTweeter.removeComment("p1", "c3")
// console.log(myTweeter.getPosts());

 

// group tests

const myTweeter = Tweeter();

myTweeter.addPost("This is myTweeter own post!");
myTweeter.addPost("2");
myTweeter.addPost("3");
myTweeter.addPost("4");
myTweeter.addPost("5");
console.log(myTweeter.getPosts());

myTweeter.removePost("p2");
myTweeter.removePost("p3");
console.log(myTweeter.getPosts());

myTweeter.addComment("p1", "aiiiii");
myTweeter.addComment("p1", "biiiii");
// myTweeter.addComment("p2", "ciiiii");  // already removed - throwing error / try&catch?
myTweeter.addComment("p4", "diiiii");
myTweeter.addComment("p5", "eiiiii");
console.log(myTweeter.getPosts());

myTweeter.removeComment("p1", "c2");
myTweeter.removeComment("p4", "c3");
console.log(myTweeter.getPosts());

