const API = "https://jsonplaceholder.typicode.com/posts";

fetch(API).then((response) =>
  response.json().then((data) => {
    const filterData = data.filter((obj) => obj.title.split(" ").length >= 4);
    console.log(filterData);
  })
);

