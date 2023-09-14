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
// supaya getPost dipanggil kembali maka kita menggunakan callback
const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        console.log('Ini adalaha create', post);
        callback();
    }, 2000);
};

// dapatkan post
const getPost = () => {
    setTimeout(() => {
        posts.forEach((post) => {
            console.log('ini adalah get post : ', post);
        });
    }, 1000);
};

const newPost = {
    title: 'post three',
    body: 'body three',
};

//--- callback
createPost(newPost, getPost);
getPost();