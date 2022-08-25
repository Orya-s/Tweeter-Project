
const tweeter = Tweeter()
const renderer = Renderer()

const rend = function() {
    renderer.renderPosts(tweeter.getPosts())
}

rend();



// EVENTS


// add post

const post = function() {
    const p = $("#input").val();
    if(p.length == 0){
        alert("Can't post an empty tweet!")
        return;
    }
    tweeter.addPost(p);  
    rend();
    
    $("#input").val("");
}



// add comment

$("#posts").on("click", ".add-comment", function() {
    const pId = $(this).closest(".post").attr("id");
    const text = $(this).prev(".comment-input").val();
    if(text.length > 0) {
        tweeter.addComment(pId, text);
        rend()
    }
})



// remove post

$("#posts").on("click", ".delete", function() {
    const p = $(this).closest(".post")
    tweeter.removePost(p.attr("id"));
    rend();
})



// remove comment

$("#posts").on("click", ".delete-comment", function() {
    const cId = $(this).closest(".comments").attr("id");
    const pId = $(this).closest(".post").attr("id");
    tweeter.removeComment(pId, cId)
    rend()
})
