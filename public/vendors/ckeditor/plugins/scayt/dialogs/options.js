﻿/*
 Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("scaytcheck",function(j){function w(){return"undefined"!=typeof document.forms["optionsbar_"+a]?document.forms["optionsbar_"+a].options:[]}function x(b,a){if(b){var e=b.length;if(void 0==e)b.checked=b.value==a.toString();else for(var d=0;d<e;d++)b[d].checked=!1,b[d].value==a.toString()&&(b[d].checked=!0)}}function n(b){f.getById("dic_message_"+a).setHtml('<span style="color:red;">'+b+"</span>")}function o(b){f.getById("dic_message_"+a).setHtml('<span style="color:blue;">'+b+"</span>")}
function p(b){for(var b=(""+b).split(","),a=0,e=b.length;a<e;a+=1)f.getById(b[a]).$.style.display="inline"}function q(b){for(var b=(""+b).split(","),a=0,e=b.length;a<e;a+=1)f.getById(b[a]).$.style.display="none"}function r(b){f.getById("dic_name_"+a).$.value=b}var s=!0,h,f=CKEDITOR.document,a=j.name,l=CKEDITOR.plugins.scayt.getUiTabs(j),g,t=[],u=0,m=["dic_create_"+a+",dic_restore_"+a,"dic_rename_"+a+",dic_delete_"+a],v=["mixedCase","mixedWithDigits","allCaps","ignoreDomainNames"];g=j.lang.scayt;var z=
[{id:"options",label:g.optionsTab,elements:[{type:"html",id:"options",html:'<form name="optionsbar_'+a+'"><div class="inner_options">\t<div class="messagebox"></div>\t<div style="display:none;">\t\t<input type="checkbox" name="options"  id="allCaps_'+a+'" />\t\t<label style = "display: inline" for="allCaps" id="label_allCaps_'+a+'"></label>\t</div>\t<div style="display:none;">\t\t<input name="options" type="checkbox"  id="ignoreDomainNames_'+a+'" />\t\t<label style = "display: inline" for="ignoreDomainNames" id="label_ignoreDomainNames_'+
a+'"></label>\t</div>\t<div style="display:none;">\t<input name="options" type="checkbox"  id="mixedCase_'+a+'" />\t\t<label style = "display: inline" for="mixedCase" id="label_mixedCase_'+a+'"></label>\t</div>\t<div style="display:none;">\t\t<input name="options" type="checkbox"  id="mixedWithDigits_'+a+'" />\t\t<label style = "display: inline" for="mixedWithDigits" id="label_mixedWithDigits_'+a+'"></label>\t</div></div></form>'}]},{id:"langs",label:g.languagesTab,elements:[{type:"html",id:"langs",
html:'<form name="languagesbar_'+a+'"><div class="inner_langs">\t<div class="messagebox"></div>\t   <div style="float:left;width:45%;margin-left:5px;" id="scayt_lcol_'+a+'" ></div>   <div style="float:left;width:45%;margin-left:15px;" id="scayt_rcol_'+a+'"></div></div></form>'}]},{id:"dictionaries",label:g.dictionariesTab,elements:[{type:"html",style:"",id:"dictionaries",html:'<form name="dictionarybar_'+a+'"><div class="inner_dictionary" style="text-align:left; white-space:normal; width:320px; overflow: hidden;">\t<div style="margin:5px auto; width:95%;white-space:normal; overflow:hidden;" id="dic_message_'+
a+'"> </div>\t<div style="margin:5px auto; width:95%;white-space:normal;">        <span class="cke_dialog_ui_labeled_label" >Dictionary name</span><br>\t\t<span class="cke_dialog_ui_labeled_content" >\t\t\t<div class="cke_dialog_ui_input_text">\t\t\t\t<input id="dic_name_'+a+'" type="text" class="cke_dialog_ui_input_text" style = "height: 25px; background: none; padding: 0;"/>\t\t</div></span></div>\t\t<div style="margin:5px auto; width:95%;white-space:normal;">\t\t\t<a style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_create_'+
a+'">\t\t\t\t</a>\t\t\t<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_delete_'+a+'">\t\t\t\t</a>\t\t\t<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_rename_'+a+'">\t\t\t\t</a>\t\t\t<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_restore_'+a+'">\t\t\t\t</a>\t\t</div>\t<div style="margin:5px auto; width:95%;white-space:normal;" id="dic_info_'+a+'"></div></div></form>'}]},{id:"about",
label:g.aboutTab,elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'<div id="scayt_about_'+a+'"></div>'}]}],B={title:g.title,minWidth:360,minHeight:220,onShow:function(){var b=this;b.data=j.fire("scaytDialog",{});b.options=b.data.scayt_control.option();b.chosed_lang=b.sLang=b.data.scayt_control.sLang;if(!b.data||!b.data.scayt||!b.data.scayt_control)alert("Error loading application service"),b.hide();else{var a=0;s?b.data.scayt.getCaption(j.langCode||"en",function(e){0<a++||(h=e,A.apply(b),
y.apply(b),s=!1)}):y.apply(b);b.selectPage(b.data.tab)}},onOk:function(){var a=this.data.scayt_control;a.option(this.options);a.setLang(this.chosed_lang);a.refresh()},onCancel:function(){var b=w(),f;for(f in b)b[f].checked=!1;b="undefined"!=typeof document.forms["languagesbar_"+a]?document.forms["languagesbar_"+a].scayt_lang:[];x(b,"")},contents:t};CKEDITOR.plugins.scayt.getScayt(j);for(g=0;g<l.length;g++)1==l[g]&&(t[t.length]=z[g]);1==l[2]&&(u=1);var A=function(){function b(b){var c=f.getById("dic_name_"+
a).getValue();if(!c)return n(" Dictionary name should not be empty. "),!1;try{var d=b.data.getTarget().getParent(),e=/(dic_\w+)_[\w\d]+/.exec(d.getId())[1];j[e].apply(null,[d,c,m])}catch(C){n(" Dictionary error. ")}return!0}var k=this,e=k.data.scayt.getLangList(),d=["dic_create","dic_delete","dic_rename","dic_restore"],g=[],i=[],c;if(u){for(c=0;c<d.length;c++)g[c]=d[c]+"_"+a,f.getById(g[c]).setHtml('<span class="cke_dialog_ui_button">'+h["button_"+d[c]]+"</span>");f.getById("dic_info_"+a).setHtml(h.dic_info)}if(1==
l[0])for(c in v)d="label_"+v[c],g=f.getById(d+"_"+a),"undefined"!=typeof g&&("undefined"!=typeof h[d]&&"undefined"!=typeof k.options[v[c]])&&(g.setHtml(h[d]),g.getParent().$.style.display="block");d='<p><img src="'+window.scayt.getAboutInfo().logoURL+'" /></p><p>'+h.version+window.scayt.getAboutInfo().version.toString()+"</p><p>"+h.about_throwt_copy+"</p>";f.getById("scayt_about_"