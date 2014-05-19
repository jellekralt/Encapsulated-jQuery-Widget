Encapsulated jQuery (Zepto) Widget
===================

## What does it do?
This encapsulated widget pattern provides basic jQuery functionality through Zepto without conflicting with other jQuery versions.

## Why would you need this?
While this might not be the most beautiful solution in the world, you might run into a situation where you need to add widget (toolbar, window, etc) on a page/site on which you can't control/change the jQuery version. This could result in multiple versions of jQuery which is never a good idea

## How does this pattern solve this?
It solves this problem by adding Zepto (which provides most of jQuery's functions) which can be loaded safely without messing with the global $.

## Can't I just use jQuery.noConflict();
You could, but i've run into situations in which I couldn't be sure where the plugin would be loaded (before or after another jQuery version). This pattern enables you to include it anywhere in the page. Zepto is loaded dynamically.


