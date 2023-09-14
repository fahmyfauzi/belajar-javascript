// // asynchronius
// setTimeout(() => {
//     console.log('ini baris pertama');
// }, 3000);

// setTimeout(() => {
//     console.log('ini baris kedua');
// }, 1000);

// setTimeout(() => {
//     console.log('Ini adalah baris ketiga');
// }, 2000);

// contoh studi kasus
const posts = [{
        title: 'post one',
        body: 'body one',
    },
    {
        title: 'post two',
        body: 'body two',
    },
];

// buat post
const createPost = (post) => {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
};

// dapatkan post
const getPost = () => {
    setTimeout(() => {
        posts.forEach((post) => {
            console.log(post);
        });
    }, 1000);
};

const newPost = {
    title: 'post three',
    body: 'body three',
};

createPost(newPost);
getPost();