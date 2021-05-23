//type ==> id or cls

function add_loading_icon(id, type='id', color="transparent", msg ='<i class="fa fa-spinner faa-spin animated fa-lg"></i>') 
{ 
    //alert(id);
   remove_loading_icon("load_icon_"+id, type);
   if( type == 'id')
   { $("#"+id).append('<p id="load_icon_'+id+'" class="load_icon_'+id+'" style="float:'+o_side+'!important; padding-'+side+':10px!important;height:1px!important;">'+msg+'</p>'); }
   else
   { $("."+id).append('<p id="load_icon_'+id+'" class="load_icon_'+id+'" style="float:'+o_side+'!important; padding-'+side+':10px!important;height:1px!important;">'+msg+'</p>'); }
   
   
}

function remove_loading_icon(id, type='id') 
{
   if( type == 'id')
   { $("#"+id).remove(); }
   else
   { $("."+id).remove(); }
}

////////////////////////////////////////

function add_loading_icon2(id, color="transparent", msg ='<i class="fa fa-spinner faa-spin animated fa-lg"></i>') 
{
   remove_loading_icon("load_icon_"+id);
   $("#"+id).append('<p id="load_icon_'+id+'" >'+msg+'</p>');
   
}

/*
function empty_loading_icon(id) 
{
   $("#"+id).empty();
}
*/


/////////////////////////////////////// Hint Message ///////////////////////////////

function append_func(msg, clicked_id, period = 2000)
{  
  $("#append_hint_message").empty();

  $( '<div id="append_hint_message" class="col-md-12" style="width:500px!important;">'+msg+'</div>' ).insertAfter( "#"+clicked_id );													
  
  setTimeout(function(){
		 $("#append_hint_message").empty();
   }, period);
													 
}

