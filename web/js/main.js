/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
'use strict';
/**
 * RequireJS config for OJET
 */
requirejs.config(
    {
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
  "ojdnd":"libs/dnd-polyfill/dnd-polyfill-1.0.0",
  "persist":"libs/persist/debug",
  "ojs":"libs/oj/v8.0.0/debug",
  "ojL10n":"libs/oj/v8.0.0/ojL10n",
  "ojtranslations":"libs/oj/v8.0.0/resources",
  "text":"libs/require/text",
  "signals":"libs/js-signals/signals",
  "touchr":"libs/touchr/touchr",
  "regenerator-runtime":"libs/@tp:regenerator-runtime@",
  "corejs":"libs/@tp:corejs:debug@",
  "customElements":"libs/webcomponents/custom-elements.min",
  "css":"libs/require-css/css",
  "css-builder":"libs/require-css/css-builder",
  "normalize":"libs/require-css/normalize"
}

// endinjector
    }
);
