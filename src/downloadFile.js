window.downloadFile = function(sUrl) {

    //Download via virtual link click
    if (window.downloadFile.downloadWithVirtualLink(sUrl) === true) {
        return;
    }

    // Force file download (whether supported by server).
    var query = '?download';

    // Prevent document caching.
    if (this.PreventOpenDocumentCaching) {
        query += (query ? '&' : '?') + Date.now();
    }

    window.open(sUrl + query);
}

window.downloadFile.downloadWithVirtualLink = function(sUrl){
    var link = document.createElement('a');
    var fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length);

    link.href = sUrl;

    //Set HTML5 download attribute. This will prevent file from opening if supported.
    link.download = fileName;

    if (document.createEvent) {
        var e = document.createEvent('MouseEvents');
        e.initEvent('click' ,true ,true);
        link.dispatchEvent(e);
        return true;
    }
}