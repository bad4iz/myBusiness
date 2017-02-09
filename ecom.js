(function() {
    var cookie_name = "scb_utmz"; 
    var url = document.location.href;
    var path = "/";
    var domain = "sovcombank.ru"; 
    var cookie_value = "";
    var duration = 182 * 24 * 60 * 600; // полгода как и __utmz
    
    var setCookie = function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expire|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" +
            encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") +
            (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
 
        return true;
    };
 
    function getCookie(cookieName){
        var name = cookieName + "=";
        var cookieArray = document.cookie.split(';'); 
        for(var i = 0; i < cookieArray.length; i++){
            var cookie = cookieArray[i].replace(/^\s+|\s+$/g, '');
            if (cookie.indexOf(name) == 0){ return cookie.substring(name.length,cookie.length); }
        }
        return null;
    };
 
    var getUrlParameter = function(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)  {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam)  {
                return sParameterName[1];
            }
        }
        return "(not set)";
    };
 
    var organic_sources = [
        { 
            pattern: "google",
            key: "q"
        }, 
        {
            pattern: "nova.rambler.ru",
            key: "query"
        }, 
        {
            pattern: "yahoo.com",
            key: "p"
        }, 
        {
            pattern: "aport.ru",
            key: "r"
        }, 
        {
            pattern: "go.mail.ru",
            key: "q"
        }, 
        {
            pattern: "nigma.ru",
            key: "s"
        }, 
        {
            pattern: "webalta.ru",
            key: "q"
        }, 
        {
            pattern: "aport.ru",
            key: "r"
        }, 
        {
            pattern: "poisk.ru",
            key: "text"
        }, 
        {
            pattern: "km.ru",
            key: "sq"
        }, 
        {
            pattern: "liveinternet.ru",
            key: "q" 
        }, 
        {
            pattern: "quintura.ru",
            key: "request"
        }, 
        {
            pattern: "search.qip.ru",
            key: "query"
        }, 
        {
            pattern: "gde.ru",
            key: "keywords"
        }, 
        {
            pattern: "bing.com",
            key: "q"
        }
    ];
 
    var setSovcomCookie = function() {
        var gclid = getUrlParameter('gclid');
        var source = getUrlParameter('utm_source');
        var medium = getUrlParameter('utm_medium');
        var campaign = getUrlParameter('utm_campaign');
        var keyword = getUrlParameter('utm_term');
        var content = getUrlParameter('utm_content');  
        
        if (gclid !== "(not set)") {
            cookie_value = "utmgclid=" + gclid + "|utmccn=(not set)|utmcmd=(not set)";
            setCookie(cookie_name, cookie_value, duration, path, domain);
        }
        else if (source !== "(not set)") {
            cookie_value = "utmcsr=" + source + "|utmccn=" + campaign + "|utmcmd=" + medium + "|utmctr=" + keyword + "|utmcct=" + content;
            setCookie(cookie_name, cookie_value, duration, path, domain);
        }
        else if (document.referrer === "") {
            var c_value = getCookie(cookie_name);
            cookie_value = "utmcsr=(direct)|utmccn=direct|utmcmd=Direct";

            if (!c_value) {
                setCookie(cookie_name, cookie_value, duration, path, domain);
            }
            else if (c_value.indexOf("(direct)") > -1) {
                setCookie(cookie_name, cookie_value, duration, path, domain);
            }
            else {
                setCookie(cookie_name, c_value, duration, path, domain);
            }
        }
        else {
            var ref = document.referrer;
            var isOrganic = false;
            
            for (var i = 0; i < organic_sources.length; i++) {
                var s = organic_sources[i];
                if (ref.search(s.pattern) > -1) { 
                    var keywordPattern = new RegExp(s.key + "=([^&]+)");
                    var match = keywordPattern.exec(ref);
                            
                    keyword = match && match.length == 2 ? match[1] : "(not set)"
                    cookie_value = "utmcsr=" + s.pattern + "|utmccn=" + campaign + "|utmcmd=organic|utmctr=" + keyword + "|utmcct=" + content;
                    setCookie(cookie_name, cookie_value, duration, path, domain);
                    
                    isOrganic = true;
                    break;
                }
            }
            
            if (false === isOrganic && /^https?:\/\/sovcombank\.kr/.exec(ref) == null) {
            	var arr_ref = ref.match(/^https?:\/\/(\w|\d|-|\.)*\.\w{2,24}/);
                cookie_value = "utmcsr=" + arr_ref[0] + "|utmccn=" + campaign + "|utmcmd=referral|utmctr=" + keyword + "|utmcct=" + content;
                setCookie(cookie_name, cookie_value, duration, path, domain);
            }
        }
 
        setCookie("__sovcom_sess", 1, 30 * 60, path, domain);
    };
    try {
        if (null === getCookie("__sovcom_sess") || getUrlParameter('gclid') !== "(not set)" || getUrlParameter('utm_source') !== "(not set)") { setSovcomCookie(); }
        else { setCookie("__sovcom_sess", 1, 30 * 60, path, domain); }
    } catch (e) {}
})();