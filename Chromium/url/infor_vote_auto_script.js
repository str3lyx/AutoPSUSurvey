if(document instanceof HTMLDocument)
{
    for(let i=0;i<7;i++)
    {
        chrome.storage.local.get(['infor_' + i], function(result) {
            if(result['infor_' + i] == undefined || result['infor_' + i] < 0)
            {
                result['infor_' + i] = 0
            }
            var j = parseInt(result['infor_' + i]);
            document.getElementsByTagName('tbody')[2].children[i].children[j+1].children[0].click()
        });
    }

    chrome.storage.local.get(['infor_review'], function(result) {
        if(result['infor_review'] == undefined || result['infor_review'] == null)
        {
            result['infor_review'] = ""
        }
        document.getElementById('txt').children[0].value = result['infor_review']
        document.getElementById('btn-send').click()
    });
}

window.alert = function(ev){return true;}
window.confirm = function(ev){return true;}
window.prompt = function(ev){return true;}