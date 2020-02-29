/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
'use strict';
/**
 * RequireJS config for OJET
 */
(function () {
    function _ojIsIE11() {
        var nAgt = navigator.userAgent;
        return nAgt.indexOf('MSIE') !== -1 || !!nAgt.match(/Trident.*rv:11./);
    };
    var _ojNeedsES5 = _ojIsIE11();
    requirejs.config({
        baseUrl: 'js',

        // Path mappings for the logical module names
        // Update the main-release-paths.json for release mode when updating the mappings
        paths:
// injector:mainReleasePaths

{
  "knockout":"libs/knockout/knockout-3.5.0.debug",
  "jquery":"libs/jquery/jquery-3.4.1",
  "jqueryui-amd":"libs/jquery/jqueryui-amd-1.12.1",
  "promise":"libs/es6-promise/es6-promise",
  "hammerjs":"libs/hammer/hammer-2.0.8",
  "ojdnd":"libs/dnd-polyfill/dnd-polyfill-1.0.1",
  "ojs":"libs/oj/v8.0.0/debug" + (_ojNeedsES5 ? "_es5" : ""),
  "ojL10n":"libs/oj/v8.0.0/ojL10n",
  "ojtranslations":"libs/oj/v8.0.0/resources",
  "persist":"libs/persist/debug",
  "text":"libs/require/text",
  "signals":"libs/js-signals/signals",
  "touchr":"libs/touchr/touchr",
  "regenerator-runtime":"libs/regenerator-runtime/runtime",
  "corejs":"libs/corejs/shim",
  "customElements":"libs/webcomponents/custom-elements.min",
  "proj4":"libs/proj4js/dist/proj4-src",
  "css":"libs/require-css/css",
  "css-builder":"libs/require-css/css-builder",
  "normalize":"libs/require-css/normalize"
}

// endinjector
    });
}());
