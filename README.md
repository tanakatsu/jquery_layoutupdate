jQuery layoutUpdate Plugin
================

## What's this

This is a jQuery plugin that detect changes of properties such as width, height, left and top.
This plugin is based on polling, and it's not a smart way but it works.

## Requirements

jQuery 1.1.4 +

## How to use

    $(".target").layoutUpdate(function(obj, attrs) {
        $.each(attrs, function(i) {
           switch (attrs[i]) {
           case "width":
               console.log("width has changed: " + obj.width());
               break;
           case "height":
               console.log("height has changed: " + obj.height());
               break;
           case "left":
               console.log("left has changed: " + obj.offset().left);
               break;
           case "top":
               console.log("top has changed: " + obj.offset().top);
               break;
           }
        });
    });


## Advanced

specify properties to watch

    // watching only width and height

    $(".target").layoutUpdate(function(obj, attrs) {
        }, {attrs:["width", "height"]}
    );

customize polling interval

    // set pollingInteval to 100 (msec). Default is 50 msec.

    $(".target").layoutUpdate(function(obj, attrs) {
        }, {pollingInterval: 100}
    );

stop polling

    // Removing class kills polling

    $(".target").removeClass("ui-layoutupdate-active");


## Demo

[http://momonoki.blob.core.windows.net/app/jquery_layoutupdate/demo.html]()
