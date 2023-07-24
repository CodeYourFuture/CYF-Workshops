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

We were getting an empty object back instead of the album object.
request.params.id is coming from the URL which is a string. album.id is an integer and you cannot have a strict comparison with 2 different data types. Therefore request.params has to be parsed into an integer by using parseInt(request.params.id).

Now try fixing the bug! 💪
