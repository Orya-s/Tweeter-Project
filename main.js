// main is the Controler - it holds the Model (Tweeter) and the View (Renderer) modules, and the events functions

const tweeter = Tweeter()
const renderer = Renderer()

const rend = function() {    // reloads the data on the screen
    renderer.renderPosts(tweeter.getPosts())
}

rend();



// EVENTS


// add post

const post = function() {
    const p = $("#input").val();
    if(p.length == 0){
        alert("Can't post an empty tweet! Try again!")
        return;
    }
    tweeter.addPost(p);  
    rend();
    
    $("#input").val("");    // "cleaning" the input's placeholder
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



// like

$("#posts").on("click", ".heart-false", function() {
    const pId = $(this).closest(".post").attr("id");
    tweeter.likePost(pId);
    rend();
})

// unlike

$("#posts").on("click", ".heart-true", function() {
    const pId = $(this).closest(".post").attr("id");
    tweeter.likePost(pId);
    rend();
})
