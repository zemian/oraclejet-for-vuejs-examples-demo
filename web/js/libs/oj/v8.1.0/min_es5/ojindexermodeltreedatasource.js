/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojindexer","ojs/ojdatasource-common"],function(t,e){"use strict";t.IndexerModelTreeDataSource=function(t,e,n,r){this.data=t,this.idAttr=e,this.listener=n,this.options=r,this.Init()},t.Object.createSubclass(t.IndexerModelTreeDataSource,t.TreeDataSource,"oj.IndexerModelTreeDataSource"),t.IndexerModelTreeDataSource.prototype.Init=function(){t.IndexerModelTreeDataSource.superclass.Init.call(this);var e=this.options.sections;if(null==e){var n=t.Translations.getTranslatedString("oj-ojIndexer.indexerCharacters");e=n.split("|")}e.push(t.IndexerModel.SECTION_OTHERS);var r=this.options.groupingStrategy;if(null==r){var i=this.options.groupingAttribute;r=function(n){var r=(n[i]?n[i]:n).toString().toUpperCase()[0];return e.indexOf(r)>-1?r:t.IndexerModel.SECTION_OTHERS}}var o,s=this.options.sortComparatorFunction;this.data=this.data.sort(function(t,n){var i=r(t),o=r(n),a=e.indexOf(i)-e.indexOf(o);return 0===a&&s?s(t,n):a});for(var a=0;a<this.data.length;a++){var u=r(this.data[a]);o!==u&&(o=u,this._set(u,a))}this.sections=e},t.IndexerModelTreeDataSource.prototype._set=function(t,e){null==this.pos&&(this.pos=[]),this.pos.push({key:t,value:e})},t.IndexerModelTreeDataSource.prototype._get=function(t){for(var e=0;e<this.pos.length;e++)if(this.pos[e].key===t)return this.pos[e].value;return null},t.IndexerModelTreeDataSource.prototype.getIndexableSections=function(){return this.sections.slice(0,this.sections.length-1)},t.IndexerModelTreeDataSource.prototype.getMissingSections=function(){if(null==this.missing){for(var t=[],e=0;e<this.sections.length-1;e++){var n=this.sections[e];null==this._get(n)&&t.push(n)}this.missing=t}return this.missing},t.IndexerModelTreeDataSource.prototype.setSection=function(t){return this.listener.call(this,t)},t.IndexerModelTreeDataSource.prototype.getChildCount=function(e){if(null==e){var n=this.sections.length-this.getMissingSections().length;return null!=this._get(t.IndexerModel.SECTION_OTHERS)?n:n-1}var r=this._get(e);if(null!=r){var i=this.sections.indexOf(e);if(i===this.sections.length-1)return this.data.length-r;i+=1;for(var o=this.sections[i],s=this._get(o);null==s&&i<this.sections.length;)i+=1,o=this.sections[i],s=this._get(o);return(isNaN(s)||null==s)&&(s=this.data.length),s-r}return 0},t.IndexerModelTreeDataSource.prototype.fetchChildren=function(t,e,n,r){var i,o=this;if(null==t){var s=this.sections.filter(function(t){return null!=o._get(t)});i={getParent:function(){return t},getStart:function(){return 0},getCount:function(){return s.length},getData:function(t){return s[t]},getMetadata:function(t){return{key:s[t],leaf:!1,depth:0}}}}else i={getParent:function(){return t},getStart:function(){return 0},getCount:function(){return o.getChildCount(t)},getData:function(e){return o.data[o._get(t)+e]},getMetadata:function(e){var n=o.data[o._get(t)+e];return{key:null!=o.idAttr?n[o.idAttr]:n,leaf:!0,depth:1}}};null!=n&&null!=n.success&&n.success.call(null,i)},t.IndexerModelTreeDataSource.prototype.getSortCriteria=function(){return{key:null,direction:"none"}}});