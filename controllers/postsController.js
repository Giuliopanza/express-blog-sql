const arrayPosts = require('../data/posts.js');

function index(req, res) {
    
    let filteredPosts = arrayPosts;

    if (req.query.title) {
        filteredPosts = arrayPosts.filter(
            post => post.title.includes(req.query.title)
        );
    }

    res.json(filteredPosts);
}

function show(req, res) {
    
    const id = parseInt(req.params.id)

    const post = arrayPosts.find(post => post.id === id);

    if (!post) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    res.json(post);
}

function store(req, res) {

    const newId = arrayPosts[arrayPosts.length - 1].id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    arrayPosts.push(newPost);

    console.log(arrayPosts);

    res.status(201);

    res.json(newPost);
}

function update(req, res) {
        
        const id = parseInt(req.params.id)

        const post = arrayPosts.find(post => post.id === id);
    
        if (!post) {
            res.status(404);
    
            return res.json({
                error: "Not Found",
                message: "Post non trovato"
            })
        }
    
        for( let key in req.body){
            post[key] = req.body[key];
        }

        console.log(arrayPosts)

        res.json(post);
}

function patch(req, res) {
            
    const id = parseInt(req.params.id)

    const post = arrayPosts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    for( let key in req.body){
        post[key] = req.body[key];
    }

    console.log(arrayPosts)

    res.json(post);
}

function destroy(req, res) {

    const id = parseInt(req.params.id)

    const post = arrayPosts.find(post => post.id === id);

    if (!post) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    arrayPosts.splice(arrayPosts.indexOf(post), 1);

    res.sendStatus(204)
}

module.exports = { index, show, store, update, patch, destroy }