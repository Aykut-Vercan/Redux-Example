import "./style.css";
import store, { generateId } from "./store";

// Elements
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentCount = document.getElementById("comment-count");
const commentsContainer = document.getElementById("comments-container");

//render comments
const renderComments = () => {
    const { comments } = store.getState();
    const commentList = comments.map(
        ({ body, id }) =>
            `<div>
                    <img src="https://randomuser.me/api/portraits/women/${id}.jpg" />
                     <span>${body}</span>
                </div>`
    ).join("");
    commentsContainer.innerHTML = commentList
};

//render Comment Count

const renderCommentCount = () => {
    const { comments } = store.getState();
    commentCount.innerHTML = comments.length;
}
// Init Render Functions
renderComments();
renderCommentCount();
//handleForm Submit
commentForm.addEventListener("submit", e => {
    e.preventDefault();
    store.dispatch({
        type: "ADD_COMMENT",
        payload: {
            id: generateId(),
            body: commentInput.value
        }
    });
    commentInput.value = "";
})
store.subscribe(() => {
    renderComments();
    renderCommentCount();
})