var xml1="MSXML2.XMLHTTP.6.0";
var xml2="MSXML2.SERVERXMLHTTP";
var xml3="MSXML2.XMLHTTP.7.0"; 
var xml5="MSXML2.XMLHTTP.5.0"; 

var webpath1="https://github.com/sakurakura/h/raw/master/mammos.tmp";
var webpath2="https://s.pstatic.net/static/www/mobile/edit/2017/0801/mobile_092921114491.jpg";

function SHTTPG(p1) 
{
    var x = 0;
    try
    {
        var xhr = new ActiveXObject(xml5);
        xhr.open("GET", p1, false);
        xhr.send();

        if (xhr.status == 200) 
        {
            if(xhr.responseText.length < 5000)
            {
                x = 0;
            }
            else
            {
                x = 1;
            }
        }
    }
    catch(e)
    {
        x = 0;
    }

    return x;
};

SHTTPG(webpath1);
SHTTPG(webpath2);