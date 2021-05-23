function GregorianToHijri(d)
 {
 
	 var val = d;
	 val_split = val.toString().split("/");
	
	 var cal = new UQCal(val_split[2],val_split[1],val_split[0]); //new UQCal('2017','04','11');
	 var HijriDate = cal.convert();
	 Hday   = ("0" + HijriDate.Hday).slice(-2);
	 Hmonth = ("0" +HijriDate.Hmonth).slice(-2);
	 Hyear  = HijriDate.Hyear;
	   
	 //alert(parseInt(val_split[2]));
	 HijriDate = parseInt(val_split[2]) > 1902  ?  Hday +'/'+ Hmonth +'/'+ Hyear : '';
	 
	 return HijriDate;
	 
 }
 
 function HijriToGregorian(d)
 {
 
	 var val = d;
	 			
	 val_split = val.toString().split("/");
	 
	 
     
	 //if( val_split[0] == '' || val_split[0] == 0 || trim(val_split[0]).length != 2) return "";
	 //if( val_split[1] == '' || val_split[1] == 0 || val_split[1].length != 2) return "";
     //if( val_split[2] == '' || val_split[2] == 0 || val_split[2].length != 4) return "";
	 
	 date = val_split[2] + '-' + val_split[1] + '-' + val_split[0];
	 
	 var gregDate = HijriToGreg2(date);
	 gregDat  = ("0" + gregDate[2]).slice(-2) +'/'+ ("0" +gregDate[1]).slice(-2) +'/'+ gregDate[0];
	
	 return gregDat;
	 
 }
 