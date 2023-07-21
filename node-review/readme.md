

# Node workshop

In this workshop, we'll build up a NodeJS app from the ground up and check our understanding as we go along.

Remember to preview the `README` first.


## Level 700

Welcome to Node Workshop Level 700.

Another developer has decided to implement a parametric endpoint -> `GET` `/albums/:id`


### Required behaviour

This endpoint should serve back a single album as specified by the id in the url path.

For example, a GET request to `localhost:9090/albums/1` should respond with the album object 

```js
{
    album: {
        title : "Afrique Victime",
        artist: "Mdou Moctar",
        yearOfRelease: 2021,
        id: 1
}
}
```
and similarly a GET request to `localhost:9090/albums/2` should respond with the album object

```js
{album: {
    title: 'Africa Brasil',
    artist: 'Jorge Ben Jor',
    yearOfRelease: 1976,
    id: 2,
}}
```

and so on...

### Actual behaviour

However, at the moment there's a 🐛.


Start the server with `npm start` and make some requests to the endpoint. e.g. `curl localhost:9090/albums/1` or Postman to see the problem.

Describe the buggy behaviour you're seeing at the moment:

{WHAT'S_THE_BUG?}

Now try fixing the bug! 💪