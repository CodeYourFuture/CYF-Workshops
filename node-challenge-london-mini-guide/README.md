# Node Challenge - London Mini-Guide

In this challenge you are going to build a full stack application (server & client) that shows the number of hospitals, doctors, pharmacies and colleges in some of London's boroughs.

This exercise is designed to develop your pair programming skills and to get you thinking about how to design a full stack application. You're not expected to get everything completed.

## Server

[The Server Challenge](./SERVER.md)

## Client

[The Client Challenge](./CLIENT.md)

## Time to Complete

This challenge has three levels. Budget one hour to complete the first level. If you have more time, do more levels.

## Instructions

Split into groups of two or three people.

One person will start as the driver (typing the code) and the others will begin as the navigators.

You must complete the first level before moving on to the second level. Do not jump around.

Begin with the server challenge.

## Live Version:

https://london-mini-guide-challenge.netlify.app/

![project screenshot](https://i.imgur.com/Or1tNpV.png)

## Data Source

The data is provided to you in a folder `./data` which contains 3 files: `Harrow.json`, `Heathrow.json` and `Stratford.json`.

Each file in this format:

```js
{
    "pharmacies" : [
        {
            "name" :
            "address":
            "website":
            "phone" :
        }
    ],

    "colleges" : [
        {
            "name" :
            "address":
            "website":
            "phone" :
        }
    ],

    "doctors" : [
        {
            "name" :
            "address":
            "website":
            "phone" :
        }
    ],

    "hospitals" : [
        {
            "name" :
            "address":
            "website":
            "phone" :
        }
    ]
}
```

Data source: https://www.yell.com/

Data has been collected using a technique called `web scraping`.

If you are curious about this check [this repository](https://github.com/ahmad-ali14/web-scraping---get-all-businesses-data-in-any-city) or [this Youtube video](https://github.com/ahmad-ali14/web-scraping---get-all-businesses-data-in-any-city). This is completely optional.
