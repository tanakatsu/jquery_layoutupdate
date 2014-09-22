/*
 * jQuery layoutUpdate 0.1.0
 *
 * Copyright 2014, Tsuyoshi Tanaka
 * Licensed under the MIT.
 */

(function($) {
  $.fn.extend({
    //plugin name
    layoutUpdate: function(callback, options) {

      var watchObjects = [];

      //Settings list and the default values
      var defaults = {pollingInterval: 100, attrs:["width", "height", "left", "top"]};

      if (options instanceof Array) {
        options = {attrs: options};
      }

      var options = $.extend(defaults, options);

      function tick() {
        self.each(function(index, elm) {
          var changeAttrs = [];

          var o = options;

          //Assign current element to variable
          var obj = $(this);

          if (obj.hasClass("ui-layoutupdate-active")) {
            var width = obj.width();
            var height = obj.height();
            var left = obj.offset().left;
            var top = obj.offset().top;
            var attr = watchObjects[index];

            if (attr.width !== width && o.attrs.indexOf("width") >= 0) {
              attr.width = width;
              changeAttrs.push("width");
            }
            if (attr.height !== height && o.attrs.indexOf("height") >= 0) {
              attr.height = height;
              changeAttrs.push("height");
            }
            if (attr.left !== left && o.attrs.indexOf("left") >= 0) {
              attr.left = left;
              changeAttrs.push("left");
            }
            if (attr.top !== top && o.attrs.indexOf("top") >= 0) {
              attr.top = top;
              changeAttrs.push("top");
            }

            if (changeAttrs.length > 0) {
              callback(obj, changeAttrs);
            }
          }

        });

        if (self.filter(".ui-layoutupdate-active").length > 0) {
          setTimeout(function(){
            tick();
          }, options.pollingInterval);
        }
      };

      var self = this;

      self.each(function() {
        var obj = $(this);
        if (obj.hasClass("ui-layoutupdate-active") === false) {
          obj.addClass("ui-layoutupdate-active");
        }
        var attr = {width: obj.width(), height: obj.height(), left: obj.offset().left, top: obj.offset().top};
        watchObjects.push(attr);
      });

      tick();
    }
  });

})(jQuery);
