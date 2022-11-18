menu_list_array = [ "Veg Margherita Pizza",                  
  "Cheese Pizza", "Paneer Pizza", "Hawaiian Pizza"];
function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    document.getElementById("         ").innerHTML = htmldata;
}

function add_suggestion(){
	var item = document.getElementById("add_item").value;
    menu_list_array.push()(item);
}

