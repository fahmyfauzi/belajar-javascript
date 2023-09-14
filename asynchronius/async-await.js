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

// promise
const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                console.log('ini promise');
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
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

// --asynch
const init = async() => {
    await createPost(newPost);
    getPost();
};
init();