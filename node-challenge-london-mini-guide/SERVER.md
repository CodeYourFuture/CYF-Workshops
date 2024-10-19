# Server

You should implement your server logic using `node` and `express`

## Server Level 100

Make a new express server and deploy it to `repl.it`.

On the route `/` respond with the routes you are planing to implement, example:

```js
{
    "/pharmacies": "returns an array of pharmacies in a specific area"
    ...
}
```

## Server Level 200

Make your server work for only one city, example: `Stratford`

In this level you should have 4 routes:

|    route    |                result                 |
| :---------: | :-----------------------------------: |
| /pharmacies | returns pharmacies list for stratford |
|  /colleges  |  returns colleges list for stratford  |
|  /doctors   |  returns doctors list for stratford   |
| /hospitals  | returns hospitals list for stratford  |

## Server Level 300

Now make your city dynamic. You should be able to return data based on any city that is passed to the server.

Routes will change:

|       route       |              result               |
| :---------------: | :-------------------------------: |
| /:city/pharmacies | returns pharmacies list for :city |
|  /:city/colleges  |  returns colleges list for :city  |
|  /:city/doctors   |  returns doctors list for :city   |
| /:city /hospitals | returns hospitals list for :city  |

## Server Level 500

Make all of that in one single route as:

|      route       |              result              |
| :--------------: | :------------------------------: |
| /:city/:category | returns :category list for :city |

## Server Level 999

You have the full control over this level

Some suggestions:

- Add new cities.
- Add routes to add entries to our data.
- Make sure that you are saving the entered values to the `json` file.
