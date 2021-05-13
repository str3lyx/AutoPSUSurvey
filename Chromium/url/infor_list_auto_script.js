if(document instanceof HTMLDocument)
{
    var table = document.getElementsByTagName('tbody')[0];
    for(var i=0; i<table.children.length; i++)
    {
        if(table.children[i].children[5].children.length == 1)
        {
            table.children[i].children[5].children[0].click()
        }
    }
}