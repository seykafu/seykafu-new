if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("MTouchChannelManager",["Bootloader","MChannelManager","Run","gkx","onAfterDisplay"],(function(a,b,c,d,e,f,g){var h=!1;function a(a){a===void 0&&(a=!1);if(h)return;h=!0;c("MChannelManager").addListener(c("MChannelManager").CHANNEL_MESSAGE,function(a){return c("Bootloader").loadModules(["MTouchChannelPayloadRouter"],function(b){return b.route(a)},"MTouchChannelManager")});!a&&c("gkx")("676783")?c("gkx")("842146")?d("Run").onAfterLoad(c("MChannelManager").startChannel):c("onAfterDisplay")(c("MChannelManager").startChannel):c("MChannelManager").startChannel()}g.initialize=a}),98);
__d("MPresenceIcon",["DOM","MLegacyDataStore","MRequest","MURI","Stratcom","Visibility","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){var g=1,h=2,i=6e4,j=null;function k(){var a=b("DOM").scry(document.body,"i","presence-icon"),c=[];for(var d=0,e=a.length;d<e;++d){var f=b("MLegacyDataStore").get(a[d]);f.userid&&!c[f.userid]&&(c[f.userid]=1)}if(c.length==0||b("Visibility").isHidden()){window.clearTimeout(j);j=b("setTimeoutAcrossTransitions")(k,i);return}f=new(b("MURI"))("/chat/presence_icon.php").toString();d=new(b("MRequest"))(f).setData({ids:Object.keys(c)}).setIgnoreErrors(!0);d.listen("done",function(e){for(var c=0,d=a.length;c<d;++c){var f=b("MLegacyDataStore").get(a[c]);f&&f.userid&&b("Stratcom").hasSigil(a[c],"online-icon")&&e[f.userid]==g||b("Stratcom").hasSigil(a[c],"mobile-icon")&&e[f.userid]==h?b("DOM").show(a[c]):b("DOM").hide(a[c])}});d.listen("finally",function(a){window.clearTimeout(j),j=b("setTimeoutAcrossTransitions")(k,i)});d.send()}k()}),null);
__d("MGroupSubscribeButton",["cx","CSS","MRequest","MURI","Stratcom","destroyOnUnload"],(function(a,b,c,d,e,f,g,h){var i="mtouch_unfollow_group",j="mtouch_follow_group";function a(a,b,d,e,f,g,h){var k=e,l=f,m=g,n=h;function o(a){c("CSS").removeClass(a,"_55p3")}function p(a){c("CSS").addClass(a,"_55p3")}d?(o(b),p(a)):(o(a),p(b));function q(d){d=new(c("MURI"))(k);d=new(c("MRequest"))(d);d.setData(m);d.send();o(a);p(b)}function r(d){d=new(c("MURI"))(l);d=new(c("MRequest"))(d);d.setData(n);d.send();o(b);p(a)}var s=[c("Stratcom").listen("click",i,q),c("Stratcom").listen("click",j,r)];c("destroyOnUnload")(function(){while(s.length)s.pop().remove()})}g.init=a}),98);
__d("WebGroupFeedTrackingFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1887339");c=b("FalcoLoggerInternal").create("web_group_feed_tracking",a);e.exports=c}),null);
__d("MGroupMallViewportTracking",["DOM","FBJSON","MViewport","MViewportTracking","StratcomManager","Vector","WebGroupFeedTrackingFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";var h=51;a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$MGroupMallViewportTracking1=null,b)||babelHelpers.assertThisInitialized(c)}b.init=function(a){d("StratcomManager").enableDispatch(document,"scroll"),new b().init(a)};var e=b.prototype;e.getDataFromConfig=function(a){this.isLoose=!0,this.rootElementId=a.root_element_id||"m_group_stories_container"};e.__getStreamRoot=function(){this.$MGroupMallViewportTracking1||(this.$MGroupMallViewportTracking1=document.getElementById(this.rootElementId));return this.$MGroupMallViewportTracking1};e.getFBFeedLocation=function(){return 2};e.getAllStories=function(){var a=this.__getStreamRoot();return a!=null?d("DOM").scry(a,"article","story-div"):[]};e.getTimeout=function(){return 300};e.getDataToLog=function(a){var b=d("FBJSON").parse(a.getAttribute("data-ft"),f.id);b=Object.assign(b,{evt:h});var e,g;"getBoundingClientRect"in a?(e=a.getBoundingClientRect(),g=e.height,e=e.top+d("MViewport").getScrollTop()):(g=c("Vector").getDim(a).y,e=c("Vector").getPos(a).y);b.evt_value=g;b.offset=e;b.story_height=g;b.impression_type=d("MViewport").isLandscape()?"landscape":"portrait";return b};e.getStoryID=function(a){a=d("FBJSON").parse(a.getAttribute("data-ft"),f.id);return a.mf_story_key};e.sendDataToLog=function(a){c("WebGroupFeedTrackingFalcoEvent").log(function(){return{json_data:JSON.stringify(a)}})};return b}(c("MViewportTracking"));g["default"]=a}),98);
__d("MMessagesThreadRowID",[],(function(a,b,c,d,e,f){"use strict";var g="other_user_fbid_",h="thread_fbid_";function a(a,b,c){return a+(b?g+b:h+String(c))}f.getThreadRowID=a}),66);
__d("MQuickSearch",["$","DOM","HTML","MRequest","MRequestTypes","MViewport","Stratcom","Vector","destroyOnUnload","eventsMixinDeprecated","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f){var g=[];a=function(){"use strict";function a(a,c){this._uri=a.uri;this._args=a.args||{};var d=b("$")(a.nodeID);this._input=b("DOM").find(d,"input","quicksearch-input");this._button=b("DOM").scry(d,"*","quicksearch-button")[0];this._container=b("$")(a.containerID);this._resultsBoxID=a.resultsBoxID;this._resultsBox=b("$")(this._resultsBoxID);this._shouldScroll=a.shouldScroll;a.throbber&&(this._throbber=new(b("HTML"))(a.throbber));this._request=null;this._searchLogger=c||null;this._listeners=[b("DOM").listen(this._input,"focus",null,this._focus.bind(this)),b("DOM").listen(this._input,"blur",null,this._cleanup.bind(this)),b("DOM").listen(this._input,"keydown",null,this._handleKeyDown.bind(this)),b("DOM").listen(this._input,"keyup",null,this._handleKeyUp.bind(this))];this._button&&this._listeners.push(b("DOM").listen(this._button,"click",null,this._click.bind(this)));this._args.bootstrap&&this.search(this._input.value);g.push(this);b("destroyOnUnload")(function(){b("Stratcom").removeCurrentListener(),g.forEach(function(a){return a._destroy()}),g=[]})}var c=a.prototype;c._handleKeyDown=function(a){this._scrollToContainer(),this._previousText=this._input.value};c._handleKeyUp=function(a){if(a.getSpecialKey()==="delete"&&(this._args.bootstrap||this._args.showInitialResultsOnClear)){a=this._input.value;a.trim()===""&&a!==this._previousText&&this.reset()}};c._scrollToContainer=function(){if(this._shouldScroll){var a=b("Vector").getPos(this._container);b("MViewport").scrollTo(a.x,a.y)}};c._update=function(){var a=this._input.value;if(this._previousText==a)return;this._previousText=a;if(/^\s*$/.test(a)&&!this._args.bootstrap){this._resetContent();this._abortRequest();return}this._saveInitialNodes();this.search(a)};c.search=function(a){var c=this;if(this.invoke("search",a).getPrevented())return;this._throbber&&b("DOM").setContent(this._resultsBox,this._throbber);this.addQueryParameters({q:a||""});this._abortRequest();this._searchLogger&&this._searchLogger.onSearch(this._args);this._request=new(b("MRequest"))(this._uri);this._request.setType(b("MRequestTypes").DEPENDENT);this._request.listen("done",function(a){c._resultsBox=b("$")(c._resultsBoxID),c._searchLogger&&c._searchLogger.onResults(c._request,c._resultsBox),c._needsDefaultNodes&&(c._saveInitialNodes(),c._needsDefaultNodes=!1),c._request=null});this._request.setMethod("GET");this._request.setData(this._args).send()};c._abortRequest=function(){this._request&&this._request.abort()&&(this._request=null)};c._resetContent=function(){this._resultsBox=b("$")(this._resultsBoxID),b("DOM").setContent(this._resultsBox,this._initialNodes)};c.resetToThrobber=function(){this._resultsBox=b("$")(this._resultsBoxID),this._throbber&&this._resultsBox&&b("DOM").setContent(this._resultsBox,this._throbber)};c.addQueryParameters=function(a){Object.assign(this._args,a)};c.maybeAddQueryParameters=function(a){for(var b in a)b in this._args||(this._args[b]=a[b])};c.clear=function(){this._input.value="",this._initialNodes=null};c._focus=function(a){this._focused=!0,this._button&&(this._button.setAttribute("type","button"),this._button.disabled=!1),this._scrollToContainer(),this._previousText=this._input.value,clearInterval(this._interval),this._interval=b("setIntervalAcrossTransitions")(this._update.bind(this),300)};c._click=function(a){a.prevent(),this.reset()};c._cleanup=function(){this._searchLogger&&this._searchLogger.onCleanup(),this._focused=!1,!this._input.value&&this._button&&(this._button.setAttribute("type","submit"),this._button.disabled=!0),clearInterval(this._interval)};c.reset=function(){this._abortRequest(),this._cleanup(),this._saveInitialNodes(),this._resetContent(),this._input.value="",this._input.blur(),this._button&&(this._button.setAttribute("type","submit"),this._button.disabled=!0),this._args.showInitialResultsOnClear&&this.search(""),this._scrollToContainer()};c._saveInitialNodes=function(){this._initialNodes||(this._initialNodes=Array.from(this._resultsBox.childNodes))};c._destroy=function(){this._listeners.forEach(function(a){return a&&a.remove()}),this._listeners.length=0};c.setNeedsDefaultNodes=function(){this._needsDefaultNodes=!0};a.getInstances=function(){return g};return a}();b("eventsMixinDeprecated")(a,["search"]);Object.assign(a.prototype,{_uri:null,_args:null,_input:null,_button:null,_container:null,_resultsBox:null,_shouldScroll:!0,_throbber:null,_focused:!1,_initialNodes:null,_previousText:null,_interval:null,_needsDefaultNodes:!1,_searchLogger:null});e.exports=a}),null);
__d("MQuickSearchOG",["MQuickSearch","Stratcom"],(function(a,b,c,d,e,f){a=function(a){"use strict";var c=new(b("MQuickSearch"))(a);b("Stratcom").listen("m:quicksearch:actionSelected",null,function(a){var b={};b.atID=a.getData().at_id;b.placeID=a.getData().place_id;b.sid=a.getData().sid;c.setNeedsDefaultNodes();c.addQueryParameters(b);c.search()});b("Stratcom").listen("m:quicksearch:clear",null,function(){c.clear(),c.resetToThrobber()})};e.exports=a}),null);
__d("XPrivacyTimelineSavedCustomAudienceSelectorDialogControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/privacy/timeline/saved_custom_audience_selector_dialog/",Object.freeze({has_tags:!1,use_small_icon:!1,should_show_default_privacy_nux:!1,nux_use_case:0}),void 0);b=a;g["default"]=b}),98);