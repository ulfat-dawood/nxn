 
 function gmod(n,m){
	return ((n%m)+m)%m;
}

function Hijricalendar(adjust , in_d , in_m , in_y ){
	var today = new Date();
	if(adjust) {
		adjustmili = 1000*60*60*24*adjust; 
		todaymili = today.getTime()+adjustmili;
		today = new Date(todaymili);
	}
	day = parseInt(in_d);//today.getDate();
    
	month = in_m - 1;//parseInt(in_m) - 1;//today.getMonth();
	//alert(month);
	year = parseInt(in_y);//2014;//today.getFullYear();
	
	m = month+1;
	
	y = year;
	
	// if hijri delta = 0 ==> g delta = 1
    // if hijri delta = 1 ==> g delta = 0
	// orginal delta = 0;
	delta = 1;
	
	if(m<3) {
		y -= 1;
		m += 12;
	}

	a = Math.floor(y/100.);
	b = 2-a+Math.floor(a/4.);
	if(y<1583) b = 0;
	if(y==1582) {
		if(m>10)  b = -10;
		if(m==10) {
			b = 0;
			if(day>4) b = -10;
		}
	}

	jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524-delta;

	b = 0;
	if(jd>2299160){
		a = Math.floor((jd-1867216.25)/36524.25);
		b = 1+a-Math.floor(a/4.);
	}
	bb = jd+b+1524;
	cc = Math.floor((bb-122.1)/365.25);
	dd = Math.floor(365.25*cc);
	ee = Math.floor((bb-dd)/30.6001);
	day =(bb-dd)-Math.floor(30.6001*ee);
	month = ee-1;
	if(ee>13) {
		cc += 1;
		month = ee-13;
	}
	year = cc-4716;

	if(adjust) {
		wd = gmod(jd+1-adjust,7)+1;
	} else {
		wd = gmod(jd+1,7)+1;
	}

	iyear = 10631./30.;
	epochastro = 1948084;
	epochcivil = 1948085;

	shift1 = 8.01/60.;
	
	z = jd-epochastro;
	cyc = Math.floor(z/10631.);
	z = z-10631*cyc;
	j = Math.floor((z-shift1)/iyear);
	iy = 30*cyc+j;
	z = z-Math.floor(j*iyear+shift1);
	im = Math.floor((z+28.5001)/29.5);
	if(im==13) im = 12;
	id = z-Math.floor(29.5001*im-29);

	var myRes = new Array(8);

	myRes[0] = day; //calculated day (CE)
	myRes[1] = month-1; //calculated month (CE)
	myRes[2] = year; //calculated year (CE)
	myRes[3] = jd-1; //julian day number
	myRes[4] = wd-1; //weekday number
	myRes[5] = id; //islamic date
	myRes[6] = im-1; //islamic month
	myRes[7] = iy; //islamic year

	return myRes;
}
function writeHijriDate(adjustment , in_d , in_m , in_y) {
    /*var in_d1 = in_d;
	var in_m1 = in_m;
	var in_y1 = in_y;*/
	
	var wdNames = new Array("Ahad","Ithnin","Thulatha","Arbaa","Khams","Jumuah","Sabt");
	/*var iMonthNames = new Array("Muharram","Safar","Rabi'ul Awwal","Rabi'ul Akhir",
	"Jumadal Ula","Jumadal Akhira","Rajab","Sha'ban",
	"Ramadan","Shawwal","Dhul Qa'ada","Dhul Hijja");*/
	var iMonthNo = new Array("01","02","03","04",
	"05","06","07","08",
	"09","10","11","12");
	var iDate = Hijricalendar(adjustment , in_d , in_m , in_y);
	/*var outputIslamicDate = wdNames[iDate[4]] + ", " 
	+ iDate[5] + " " + iMonthNames[iDate[6]] + " " + iDate[7] + " AH";*/
	var d = iDate[5];
	if(d > 0 && d <=9) { d = "0" + d; }
	var outputIslamicDate = iDate[7] + "-" + iMonthNo[iDate[6]] + "-" + d;
	return outputIslamicDate;
}

////////////////////////////////////////////////////////

function intPart(floatNum){
if (floatNum< -0.0000001){
	 return Math.ceil(floatNum-0.0000001)
	}
return Math.floor(floatNum+0.0000001)
}

function writeGregDate(in_y, in_m, in_d) {	
	d=parseInt(in_d);
	m=parseInt(in_m);
	y=parseInt(in_y);
	//delta=1;
	delta = 0;
//added 1 on jd to comply isna rulling
	jd=intPart((11*y+3)/30)+354*y+30*m-intPart((m-1)/2)+d+1948440-385-delta;
	/*arg.JD.value=jd
	arg.wd.value=weekDay(jd%7)*/
					if (jd> 2299160 )
						{
						 l=jd+68569;
						 n=intPart((4*l)/146097);
						l=l-intPart((146097*n+3)/4);
						 i=intPart((4000*(l+1))/1461001);
						l=l-intPart((1461*i)/4)+31;
						 j=intPart((80*l)/2447);
						d=l-intPart((2447*j)/80);
						l=intPart(j/11);
						m=j+2-12*l;
						y=100*(n-49)+i+l;
						}
					else
						{
						 j=jd+1402;
						 k=intPart((j-1)/1461);
						 l=j-1461*k;
						 n=intPart((l-1)/365)-intPart(l/1461);
						 i=l-365*n+30;
						j=intPart((80*i)/2447);
						d=i-intPart((2447*j)/80);
						i=intPart(j/11);
						m=j+2-12*i;
						y=4*k+n+i-4716;
						}

	/*arg.CDay.value=d
	arg.CMonth.value=m
	arg.CYear.value=y*/
    if(d>0 && d <=9) { d = "0" + d;}
	if(m>0 && m <=9) { m = "0" + m;}
	return y+"-"+m+"-"+d;

}

/////////////////////////////////////////
function getAge(dateString) 
{   
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}


    //////////////////////////////

    function GregToHijri(dt ,type)
	 {
	   dt = dt.split("-");
	   
	   var hijriDate = writeHijriDate(0 , dt[0] , dt[1] , dt[2]);
	   hijriDate = hijriDate.split("-");
	   window.opener.document.getElementById("viewH"+type).value= hijriDate[2]+"-"+hijriDate[1]+"-"+hijriDate[0];
	   
	 }
	 
	 function GregToHijri2(dt)
	 {
	   dt = dt.split("-");
	   var hijriDate = writeHijriDate(0 ,dt[2] , dt[1] , dt[0]);
	   
	   return hijriDate;
	   
	 }
	 
	 //////////////////////////////////////////////
	 /*function HijriToGreg(dt ,type)
	 {
	   dt = dt.split("-");
	   
	   var gregDate = writeGregDate(dt[2], dt[1], dt[0]);
	   
	   gregDate = gregDate.split("-");
	   window.opener.document.getElementById("viewG"+type).value= gregDate[2]+"-"+gregDate[1]+"-"+gregDate[0];
	}*/
	
	//
	function HijriToGreg(dt)
	{
	   dt = dt.split("-");
	   //alert(parseInt(dt[2], 10));
	   var gregDate = writeGregDate(dt[0], parseInt(dt[1], 10), parseInt(dt[2], 10));
	   
	   return gregDate;
	}
	
	function HijriToGreg2(dt)
	{
	  //var dt = '1436-11-21';
	  dt = dt.toString();

	  var dt = dt.split("-");
	      dt = dt[0] +'-'+ ("0" + dt[1]).slice(-2) +'-'+ ("0" + dt[2]).slice(-2) ;
	  var gregDate = HijriToGreg(dt);
	  
	  gregDate = gregDate.split("-");
	  var cal = new UQCal(gregDate[0], gregDate[1], gregDate[2]);
	  var HijriDate = cal.convert();
	  
	  /***** check Is correct convert? *******/
	  dt = dt.split("-");
	  if(dt[0] == HijriDate.Hyear && dt[1] == HijriDate.Hmonth && dt[2] == HijriDate.Hday)
	  { 
		gregDate = gregDate;
	  }
	  else
	  {
	    /** try -1 **/
		gregDate_minus = new Date(gregDate[0],gregDate[1]-1 ,gregDate[2]);
		gregDate_plus  = new Date(gregDate[0],gregDate[1]-1 ,gregDate[2]);
		isFound = false;
		for(var i=0 ; i < 15 ; i++)
		{
		  gregDate_minus.setDate(gregDate_minus.getDate()-1);
		  
		  cal = new UQCal(gregDate_minus.getFullYear(), gregDate_minus.getMonth()+1, gregDate_minus.getDate());
	      HijriDate = cal.convert();
		
		  if(dt[0] == HijriDate.Hyear && dt[1] == HijriDate.Hmonth && dt[2] == HijriDate.Hday)
	      { 
		   var d = gregDate_minus.getDate();
		   var m = gregDate_minus.getMonth() + 1;
		   var y = gregDate_minus.getFullYear();
		   gregDate_minus = y +'-'+ m +'-'+ d;
		   gregDate = gregDate_minus.split("-");
           isFound = true;		   
		   break;
		  }
		}
		
		if(!isFound)
		{
		  for(var i=0 ; i < 15 ; i++)
			{
			  gregDate_plus.setDate(gregDate_plus.getDate()-1);
			  
			  cal = new UQCal(gregDate_plus.getFullYear(), gregDate_plus.getMonth()+1, gregDate_plus.getDate());
			  HijriDate = cal.convert();
			
			  if(dt[0] == HijriDate.Hyear && dt[1] == HijriDate.Hmonth && dt[2] == HijriDate.Hday)
			  { 
			   var d = gregDate_plus.getDate();
			   var m = gregDate_plus.getMonth() + 1;
			   var y = gregDate_plus.getFullYear();
			   gregDate_plus = y +'-'+ m +'-'+ d;
			   gregDate = gregDate_plus.split("-");
			   isFound = true;		   
			   break;
			  }
			}
		}
	
		
	   }
	  
	   return gregDate;
	}
	//////////////////////////////////////////////////////
	
	function getHijriYear(dt)
	 {
	   dt = dt.split("-");
	   
	   var hijriDate = writeHijriDate(0 , dt[0] , dt[1] , dt[2]);
	   hijriDate = hijriDate.split("-");
	   //window.opener.document.getElementById("viewH"+type).value= hijriDate[2]+"-"+hijriDate[1]+"-"+hijriDate[0];
	   return hijriDate[0];
	 }
	 
	 /////////////////////////////////////////////
	 
	function DateDiff(start, end) 
	{
	  start = start.split("-");
      var start = new Date(start[2], start[1]-1, start[0]);
	  
	  var  end = end.split("-");
	  end = new Date(end[2], end[1]-1, end[0]);
	  //alert(end.getDay());
      //return (end - start)/(1000*60*60*24); 	

      var timeDiff = end.getTime() - start.getTime();
      var diffDays = timeDiff / (1000 * 3600 * 24); 
      return diffDays + 1;	  
    }