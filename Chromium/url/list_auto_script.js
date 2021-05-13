if(document instanceof HTMLDocument)
{
    var table = document.getElementsByClassName('CSSTable')[0].children[0];
    for(var i=2; i<table.children.length; i++)
    {
        if(table.children[i].children[5].children[0].children.length == 1)
        {
            table.children[i].children[5].children[0].children[0].click()
        }
    }
}