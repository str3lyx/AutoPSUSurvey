function load()
{
    for(let i=0;i<8;i++)
    {
        chrome.storage.local.get(['tes_' + i], function(result) {
            if(result['tes_' + i] == undefined || result['tes_' + i] < 0)
            {
                result['tes_' + i] = -1
            }
            var j = parseInt(result['tes_' + i]) + 1;
            document.getElementsByClassName('topic-body')[i].children[j].click()
        });
    }

    for(let i=0;i<7;i++)
    {
        chrome.storage.local.get(['infor_' + i], function(result) {
            if(result['infor_' + i] == undefined || result['infor_' + i] < 0)
            {
                result['infor_' + i] = -1
            }
            var j = parseInt(result['infor_' + i]);
            document.getElementsByClassName('alt-topic-body')[i].children[j].click()
        });
    }

    chrome.storage.local.get(['tes_review'], function(result) {
        if(result['tes_review'] == undefined || result['tes_review'] == null)
        {
            result['tes_review'] = ""
        }
        document.getElementById('opinion').value = result['tes_review']
    });

    chrome.storage.local.get(['infor_review'], function(result) {
        if(result['infor_review'] == undefined || result['infor_review'] == null)
        {
            result['infor_review'] = ""
        }
        document.getElementById('alt-opinion').value = result['infor_review']
    });
}

document.addEventListener('DOMContentLoaded', function () {

    load()

    document.getElementById('opinion').addEventListener('keypress', function(ev){
        review(document.getElementById('opinion'));
    });
    document.getElementById('opinion').addEventListener('change', function(ev){
        review(document.getElementById('opinion'));
    });
    document.getElementById('alt-opinion').addEventListener('keypress', function(ev){
        alt_review(document.getElementById('alt-opinion'));
    });
    document.getElementById('alt-opinion').addEventListener('change', function(ev){
        alt_review(document.getElementById('alt-opinion'));
    });

    document.getElementById('main-side').addEventListener('click', function(ev){
        selectMode(document.getElementById('main-side'), 'main', 'alt-main')
    });

    document.getElementById('alt-main-side').addEventListener('click', function(ev){
        selectMode(document.getElementById('alt-main-side'), 'alt-main', 'main')
    });
 
    for(let i of document.getElementsByClassName('choice'))
    {
        i.addEventListener('click', function(ev){
            select_radio(i);
        });
    }

    for(let j of document.getElementsByClassName('alt-choice'))
    {
        j.addEventListener('click', function(ev){
            select_alt_radio(j);
        });
    }
});

function review(item)
{
    save("tes_review", item.value)
}

function alt_review(item)
{
    save("infor_review", item.value)
}

function select_radio(item)
{
    for(let i in item.parentNode.children)
        if(i > 0)
            item.parentNode.children[i].className = "choice"
    item.className = "choice-selected"

    if(item.parentNode.children[0].innerHTML == "ปฏิสัมพันธ์ระหว่างอาจารย์และผู้เรียน")
        save('tes_0', getChoice(item))
    else if(item.parentNode.children[0].innerHTML == "การจัดกระบวนการเรียนรู้ที่เน้นการมีส่วนร่วมของผู้เรียน")
        save('tes_1', getChoice(item))
    else if(item.parentNode.children[0].innerHTML == "การใช้สื่อและทรัพยากรการเรียนรู้")
        save('tes_2', getChoice(item))
    else if(item.parentNode.children[0].innerHTML == "การจัดกระบวนการเรียนรู้ให้สามารถนำไปประยุกต์ใช้ได้")
        save('tes_3', getChoice(item))
    else if(item.parentNode.children[0].innerHTML == "การประเมินผลระหว่างการสอน")
        save('tes_4', getChoice(item))
    else if(item.parentNode.children[0].innerHTML == "การนำเสนอและบุคลิกภาพ")
        save('tes_5', getChoice(item))
    else if(item.parentNode.children[0].innerHTML == "ความตรงต่อเวลา")
        save('tes_6', getChoice(item))
    else if(item.parentNode.children[0].innerHTML == "การส่งเสริมให้ผู้เรียนมีพฤติกรรมที่เหมาะสมรวมถึงการให้เกียรติผู้เรียน")
        save('tes_7', getChoice(item))
}

function select_alt_radio(item)
{
    for(let i in item.parentNode.children)
            item.parentNode.children[i].className = "alt-choice"
    item.className = "alt-choice-selected"

    if(item.parentNode.parentNode.children[0].innerHTML == "กำหนดวัตถุประสงค์ชัดเจน")
        save('infor_0', getAltChoice(item))
    else if(item.parentNode.parentNode.children[0].innerHTML == "กำหนดเนื้อหาไว้สอดคล้องกับวัตถุประสงค์")
        save('infor_1', getAltChoice(item))
    else if(item.parentNode.parentNode.children[0].innerHTML == "การเรียงลำดับเนื้อหาเหมาะสม")
        save('infor_2', getAltChoice(item))
    else if(item.parentNode.parentNode.children[0].innerHTML == "เนื้อหามีความทันสมัย")
        save('infor_3', getAltChoice(item))
    else if(item.parentNode.parentNode.children[0].innerHTML == "เนื้อหามีประโยชน์ในการนำไปประยุกต์ใช้")
        save('infor_4', getAltChoice(item))
    else if(item.parentNode.parentNode.children[0].innerHTML == "ความรู้ที่ได้รับจากการเรียนวิชานี้เป็นไปตามคาดหวังของผู้เรียน")
        save('infor_5', getAltChoice(item))
    else if(item.parentNode.parentNode.children[0].innerHTML == "โดยภาพรวมท่านพึงพอใจกับรายวิชานี้")
        save('infor_6', getAltChoice(item))
}

function getChoice(item)
{
    if(item == item.parentNode.children[1])
        return 0
    else if(item == item.parentNode.children[2])
        return 1
    else if(item == item.parentNode.children[3])
        return 2
    else if(item == item.parentNode.children[4])
        return 3
    return 0
}

function getAltChoice(item)
{
    if(item == item.parentNode.children[0])
        return 0
    else if(item == item.parentNode.children[1])
        return 1
    else if(item == item.parentNode.children[2])
        return 2
    else if(item == item.parentNode.children[3])
        return 3
    else if(item == item.parentNode.children[4])
        return 4
    else if(item == item.parentNode.children[5])
        return 5
    return 0
}

function selectMode(item, className, hiddenClass)
{
    if(item.className == "side-choice")
    {
        document.getElementsByClassName(className)[0].className = className;
        document.getElementsByClassName(hiddenClass)[0].className = hiddenClass + " hidden";

        item.parentNode.children[0].className = "side-choice"
        item.parentNode.children[1].className = "side-choice"
        item.className = "side-choice-en"
    }
}

function save(obj, val)
{
    if(obj == 'tes_0')
        chrome.storage.local.set({tes_0 : val}, function() {});
    else if(obj == 'tes_1')
        chrome.storage.local.set({tes_1 : val}, function() {});
    else if(obj == 'tes_2')
        chrome.storage.local.set({tes_2 : val}, function() {});
    else if(obj == 'tes_3')
        chrome.storage.local.set({tes_3 : val}, function() {});
    else if(obj == 'tes_4')
        chrome.storage.local.set({tes_4 : val}, function() {});
    else if(obj == 'tes_5')
        chrome.storage.local.set({tes_5 : val}, function() {});
    else if(obj == 'tes_6')
        chrome.storage.local.set({tes_6 : val}, function() {});
    else if(obj == 'tes_7')
        chrome.storage.local.set({tes_7 : val}, function() {});
    else if(obj == 'infor_0')
        chrome.storage.local.set({infor_0 : val}, function() {});
    else if(obj == 'infor_1')
        chrome.storage.local.set({infor_1 : val}, function() {});
    else if(obj == 'infor_2')
        chrome.storage.local.set({infor_2 : val}, function() {});
    else if(obj == 'infor_3')
        chrome.storage.local.set({infor_3 : val}, function() {});
    else if(obj == 'infor_4')
        chrome.storage.local.set({infor_4 : val}, function() {});
    else if(obj == 'infor_5')
        chrome.storage.local.set({infor_5 : val}, function() {});
    else if(obj == 'infor_6')
        chrome.storage.local.set({infor_6 : val}, function() {});
    else if(obj == 'tes_review')
        chrome.storage.local.set({tes_review : val}, function() {});
    else if(obj == 'infor_review')
        chrome.storage.local.set({infor_review : val}, function() {});
    
}