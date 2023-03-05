const postId = document.getElementById("post-id").value;
const editFormHandler = async function (event) {
  event.preventDefault();

  const title = document.getElementById("post-title").value;
  const body = document.getElementById("post-body").value;

  await fetch(`/api/post/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content: body,
    }),
    headers: { "Content-Type": "application/json" },
  });
  document.location.replace("/dashboard");
};

document
  .querySelector("#post-form")
  .addEventListener("submit", editFormHandler);

const deletePostHandler = async function () {
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });
  document.location.replace("/dashboard");
};

document
  .querySelector("#post-form")
  .addEventListener("submit", editFormHandler);

document
  .querySelector("#delete-btn")
  .addEventListener("click", deletePostHandler);
