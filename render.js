// Renderer pulls the data from the tweeterLogic file and adds it to the html, creating the representation of Tweeter 

const Renderer = function() {

    const renderPosts = function(posts) {
        $("#posts").empty();

        for (const post of posts) {        
        
            let postComments = "";
            for (const comment of post.comments) {      // iterating over the comments of each post to add them to the post section
                postComments += `<div class="comments" id="${comment.id}">
                                    <button class="delete-comment">X</button>
                                    ${comment.text}
                                </div>`
            }
            $("#posts").append(     
                `<div id="${post.id}" class="post">
                    <div class="post-text">${post.text}</div>
                     ${postComments}
                     <input class="comment-input" type="text" placeholder="Write a comment...">
                     <button class="add-comment"><img class="pic" src="https://cdn-icons-png.flaticon.com/512/2525/2525779.png"></button> 
                     <span class="heart-${post.like}"> &#9825</span>
                    <div class="delete">X</div>
                </div>`
            );      // creating each post and it's components (comments, remove button, like button)
        }
    }

    return {
        renderPosts
    }
}
