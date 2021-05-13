if(document instanceof HTMLDocument)
{
    for(let i=0;i<8;i++)
    {
        chrome.storage.local.get(['tes_' + i], function(result) {
            if(result['tes_' + i] == undefined || result['tes_' + i] < 0)
            {
                result['tes_' + i] = 0
            }
            var j = parseInt(result['tes_' + i]);
            document.getElementsByName('ra_scale' + i)[j].click()
        });
    }

    chrome.storage.local.get(['tes_review'], function(result) {
        if(result['tes_review'] == undefined || result['tes_review'] == null)
        {
            result['tes_review'] = ""
        }
        document.getElementsByName('Comment')[0].value = result['tes_review']
        document.getElementsByName('btnSave')[0].click()
    });
}