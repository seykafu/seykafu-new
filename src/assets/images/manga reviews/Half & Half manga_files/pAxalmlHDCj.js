if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("SecurePostMessage",["invariant"],(function(a,b,c,d,e,f,g){"use strict";var h="*";a={sendMessageToSpecificOrigin:function(a,b,c,d){c!==h||g(0,21157),a.postMessage(b,c,d)},sendMessageForCurrentOrigin:function(a,b){a.postMessage(b)},sendMessageAllowAnyOrigin_UNSAFE:function(a,b,c){a.postMessage(b,h,c)}};e.exports=a}),null);
__d("XBrowserPushXOutController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/client/push/xout/",{})}),null);
__d("XPushRegisterServiceWorkerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/push/register/service_worker/",{})}),null);
__d("MNotificationsPushInstall",["BanzaiLogger","DOM","KaiOSController","MPushPermissionUtil","MRequest","MobileAppDetect","Promise","PushRegistration","SecurePostMessage","Stratcom","URI","XBrowserPushXOutController","XPushRegisterServiceWorkerController"],(function(a,b,c,d,e,f){var g;function h(a,c,d){a={event:a,appid:c,surface:d};b("BanzaiLogger").log("BrowserPushLoggerConfig",a)}function i(a){b("Stratcom").invoke(a),window.parent&&b("SecurePostMessage").sendMessageAllowAnyOrigin_UNSAFE(window.parent,a)}function j(a){if(!a)return!1;a=new(g||(g=b("URI")))(a).getDomain();return!a||a===window.location.hostname?!1:!0}a={installHandler:function(a,c,d){d===void 0&&(d=!1);h("turn_on",a.appID,c);var e;b("MobileAppDetect").is_kaios?e=a.registerPushOnKaiOS(b("XPushRegisterServiceWorkerController"),b("MRequest"),b("KaiOSController")):(b("MPushPermissionUtil").logEvent("turn_on_attempt",d),b("PushRegistration").pushPermissionIsPending()&&b("Stratcom").invoke("m:notifications:push:install:showCurtain"),e=new(b("Promise"))(function(c,d){return a.registerPush(b("XPushRegisterServiceWorkerController"),b("MRequest"),!0,c)["catch"](d)}));return new(b("Promise"))(function(f,g){e.then(function(){b("Stratcom").invoke("m:notifications:push:install:hideCurtain");b("MPushPermissionUtil").logEvent("allow",d);h("install",a.appID,c);f(!0);i("m:notifications:push:install:installed");return})["catch"](function(e){b("Stratcom").invoke("m:notifications:push:install:hideCurtain");window.Notification&&window.Notification.permission==="denied"?(b("MPushPermissionUtil").logEvent("deny",d),h("deny",a.appID,c)):(b("MPushPermissionUtil").logEvent("install_ignore",d),h("install_ignore",a.appID,c));i("m:notifications:push:install:notInstalled");g(e);return})})},xoutHandler:function(a,c){return new(b("Promise"))(function(d,e){h("xout",a.appID,c);var f=b("XBrowserPushXOutController").getURIBuilder().getURI();f=new(b("MRequest"))(f);f.setMethod("POST");f.listen("finally",d);f.listen("fail",e);f.send()})},registerOnHostIfNeeded:function(a){return new(b("Promise"))(function(c,d){var e;if(!j(a)){c(!1);return}var f=b("DOM").create("iframe",{style:{height:"1px",width:"1px",display:"none"}});f.id="PushIframe";b("DOM").appendContent(window.document.body,f);f.src=(e=a)!=null?e:"";e=function(a){if(a.source!==f.contentWindow)return;a.data==="m:notifications:push:install:installed"&&c(!0);a.data==="m:notifications:push:install:notInstalled"&&d(!0)};window.removeEventListener("message",e,!1);window.addEventListener("message",e,!1)})}};e.exports=a}),null);
__d("MNotificationsPushInstallCurtain",["cx","CSS","DOM","MViewport","Stratcom"],(function(a,b,c,d,e,f,g,h){var i="upsell_curtain",j="curtain_with_context",k=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]),l=null;function m(){if(l instanceof HTMLElement){var a=o(l);a&&c("CSS").show(l)}c("Stratcom").listen("click",i,n)}function n(){l instanceof HTMLElement&&c("CSS").hide(l)}function a(a){l=a,c("Stratcom").listen("m:notifications:push:install:showCurtain",null,m),c("Stratcom").listen("m:notifications:push:install:hideCurtain",null,n)}function o(a){if(a.id!==j)return!0;var b=d("MViewport").getHeaderElement();if(d("MViewport").getHeight()*window.devicePixelRatio<400||d("MViewport").isLandscape()||!a||!b||!b.parentNode||!b.parentNode.parentNode||b.parentNode.parentNode.id!=="page")return!1;p(a);r(a);var c=d("DOM").create("div",{position:"relative"});c.appendChild(a);d("DOM").insertAfter(b.parentNode,c);return!0}function p(a){if(q()){a=a.getElementsByClassName("_1t9n")[0];a&&c("CSS").addClass(a,"_u6u")}}function q(){var a=d("DOM").create("div");a.setAttribute("style","position: fixed; bottom: 0; height: 100vh;");d("DOM").appendContent(document.body,a);var b=a.offsetHeight>window.innerHeight&&a.offsetTop<0;d("DOM").remove(a);return b}function r(a){var b=navigator.language||" ";if(k.has(b.substring(0,2))||k.has(b.substring(0,3))){b=a.getElementsByClassName("_1f0e")[0];b&&(b.className="_1f0f")}}g.startListening=a}),98);
__d("MNotificationsPushUpsellFunnelLogger",["BanzaiLogger"],(function(a,b,c,d,e,f,g){function a(a,b,d,e){a={attemptid:a,stage:b,appid:d,surface:e};c("BanzaiLogger").log("BrowserPushRegistrationFlowLoggerConfig",a)}g.log=a}),98);
__d("MToastAction",["cx","CSS","DOM","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h){"use strict";function i(a,b){var e=d("DOM").create("div",null,a);d("DOM").appendContent(document.body,e);c("setTimeoutAcrossTransitions")(function(){return c("CSS").addClass(e,"_4zke")},b);c("setTimeoutAcrossTransitions")(function(){return d("DOM").remove(e)},b+1e3)}function a(a,b){a=d("DOM").create("div",{className:"_3fcy"},a);a=d("DOM").create("div",{className:"_2jow _3fc-"},a);i(a,b)}g.showToast=i;g.showDefaultToast=a}),98);
__d("QPEventHandling",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){a.addEventListener("click",c)}f.registerClickListener=a}),66);
__d("XQuickPromotionSimpleLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/qp/action/log/",{privacy_mutation_token:{type:"String"},qp_id:{type:"Int",required:!0},qp_action:{type:"Enum",enumType:1},qp_instance_log_data:{type:"StringToStringMap",defaultValue:{}},qp_event:{type:"String"}})}),null);
__d("QPRenderer",["csx","CSS","FBLogger","Parent","QPEventHandling","XAsyncRequest","XQuickPromotionSimpleLoggingController","ge"],(function(a,b,c,d,e,f,g,h){"use strict";function i(a,b,d){a=c("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setString("qp_event",b).setStringToStringMap("qp_instance_log_data",d).getURI();new(c("XAsyncRequest"))(a).send()}function a(a,b,d){a=c("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",b).setStringToStringMap("qp_instance_log_data",d).getURI();new(c("XAsyncRequest"))(a).send()}function b(a,b,e,f,g,h){f=c("ge")(f);f!==null?j(a,e,f,h,function(){g&&d("CSS").hide(b)}):c("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,e)}function e(a,b,c,e,f){j(a,b,c,f,function(){if(e){var a=d("Parent").bySelector(c,"._5jmm");a instanceof HTMLElement&&d("CSS").hide(a)}})}function f(a,b,d){b.show();i(a,"view",{});b.subscribe("cancel",function(){i(a,"dialog_cancel",{})});for(var e=0;e<d.length;e++){var f=d[e],g=c("ge")(f.element_id);g!==null?(j(a,f.action,g,f.extra_log_data,f.should_close?function(){b.hide()}:function(){}),f.action=="primary"&&g.focus()):c("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,f.action)}}function j(a,b,e,f,g){d("QPEventHandling").registerClickListener(e,b,function(){var d=c("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",b).setStringToStringMap("qp_instance_log_data",f).getURI();new(c("XAsyncRequest"))(d).send();g()})}g.logEvent=i;g.logAction=a;g.setAction=b;g.setComponentActionForFeedUnitQP=e;g.setDialogActionsAndShow=f}),98);
__d("MNotificationsPushUpsellInstaller",["fbt","MJewels","MNotificationsPushInstall","MNotificationsPushUpsellFunnelLogger","MToastAction","PushRegistration","QE2Logger","QPRenderer","Stratcom","isVisible"],(function(a,b,c,d,e,f,g,h){var i=null,j=null,k=null,l=function(a){k&&k(a)},m=function(a,b,e,f,g,h){if(c("PushRegistration").pushPermissionIsDenied())return!1;if(g){d("QE2Logger").logExposureForUser(g);if(h)return!1}k=function(a){d("MNotificationsPushUpsellFunnelLogger").log(e,a,b,f)};j=f;i=c("PushRegistration").get(a,b);return!0},n=function(){if(i===null||j===null)return;l("try_install");d("MNotificationsPushInstall").installHandler(i,j).then(function(){l("install_success"),d("MToastAction").showDefaultToast(h._("Facebook notifications on"),3e3)})["catch"](function(){i!==null&&j!==null&&(c("PushRegistration").pushPermissionIsDenied()?(l("system_dialog_deny"),d("MNotificationsPushInstall").xoutHandler(i,j)):l("system_dialog_ignore"))})},o=function(a){l("impression"),d("QPRenderer").logEvent(a,"view",{}),l(c("PushRegistration").pushPermissionIsDenied()?"permissions_blocked":"permissions_unblocked")},p="m:qp:push-notifications:log-impression";function q(){c("Stratcom").invoke(p)}function r(a,b,e,f,g,h,i,j,k,r){if(!m(a,b,g,h,k,r))return!1;c("isVisible")(j)?o(i):(c("Stratcom").listen(p,null,function(){c("Stratcom").removeCurrentListener(),o(i)}),c("Stratcom").listen("m:jewel:flyout:open",null,function(a){a.getData().jewel===d("MJewels").NOTIFICATIONS&&(c("Stratcom").removeCurrentListener(),q())}));c("Stratcom").listen("click",e,function(){l("action_turn_on"),c("PushRegistration").pushPermissionIsDenied()?l("error_permissions_blocked"):n()});c("Stratcom").listen("click",f,function(){l("action_not_now")});return!0}function a(a,b,c,e,f,g,h){m(a,b,e,f,g,h)&&(q(),d("QPRenderer").logEvent(c,"view",{}),n())}function b(a){if(c("PushRegistration").pushPermissionIsDenied())return;a.isInControlGroup||(a.promotionContainerNode.style.display="block");r(a.path,a.appID,a.installButtonSigil,a.notNowButtonSigil,a.installAttemptID,a.surface,a.promotionID,a.promotionContainerNode,a.qeUniverseName,a.isInControlGroup)}g.invokeImpressionEvent=q;g.installOnUpsellClick=r;g.installDirectFromUpsell=a;g.install=b}),98);
__d("MNotificationsDirectPrompt",["MNotificationsPushInstall","MNotificationsPushInstallCurtain","MNotificationsPushUpsellInstaller","MPushPermissionUtil","MRequest","MobileAppDetect","Promise","PushRegistration","XBrowserPushDisabledController","XPushRegisterServiceWorkerController","gkx","goURI","promiseDone","qex"],(function(a,b,c,d,e,f,g){function a(a){a.curtain&&d("MNotificationsPushInstallCurtain").startListening(a.curtain);var e=c("PushRegistration").get(a.path,a.appID);if(c("MobileAppDetect").is_kaios){var f=c("gkx")("854369");(f||!a.isInstalled)&&!a.wasXOuted&&d("MNotificationsPushInstall").installHandler(e,"prompt");return}a.wasXOuted&&a.upsell?d("MNotificationsPushUpsellInstaller").installDirectFromUpsell(a.path,a.appID,a.upsell.promotionID,a.upsell.installAttemptID,a.upsell.surface,a.upsell.qeUniverseName,a.upsell.isInControlGroup):d("MPushPermissionUtil").logEvent("fresh_nonupsell_promo");var g=b("Promise").resolve(),h=function(){a.redirectUrl&&window.location!==a.redirectUrl&&(a.isNuxPrompt===!0?c("goURI")(a.redirectUrl,!1,!0):c("goURI")(a.redirectUrl+"?_rdr",!1,!0))};c("promiseDone")(d("MNotificationsPushInstall").registerOnHostIfNeeded(a.enabledUrl).then(function(b){if(b){d("MPushPermissionUtil").logEvent("already_registered");return}e.isPushRegistered(a.isInstalled,c("XPushRegisterServiceWorkerController"),c("XBrowserPushDisabledController"),c("MRequest"),a.registerAnyway,!0).then(function(b){a.wasXOuted?d("MPushPermissionUtil").logEvent("previously_xouted"):a.isInstalled&&b&&d("MPushPermissionUtil").logEvent("already_installed");if((!a.isInstalled||!b)&&!a.wasXOuted){d("MNotificationsPushInstall").installHandler(e,"prompt",(b=a.isNuxPrompt)!=null?b:!1)["catch"](function(){g=d("MNotificationsPushInstall").xoutHandler(e,"prompt")})["finally"](function(){return g.then(h)})}else h()},function(b){d("MPushPermissionUtil").logEvent("push_regn_failure"),a.isNuxPrompt==!0?c("qex")._("191")?c("goURI")(a.redirectUrl,!1,!0):d("MPushPermissionUtil").logEvent("already_denied_nux"):d("MPushPermissionUtil").logEvent("already_denied_non_nux")})},function(a){d("MPushPermissionUtil").logEvent("recently_rejected")}))}g.installPush=a}),98);
__d("MQuickPromotion",["DOM","Stratcom"],(function(a,b,c,d,e,f,g){"use strict";var h=!1;function a(){if(h)return;h=!0;c("Stratcom").listen("click","m-promo-close",function(a){var b=a.getNode("m-promo");a=a.getNode("m-megaphone");d("DOM").hide(b,a)})}g.main=a}),98);