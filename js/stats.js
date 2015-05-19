$.ajax({
        type : "GET",
        url : "http://api.cbssports.com/fantasy/players/injuries?version=3.0&position=QB",
        data : params,
        timeout:3000,
        dataType : "jsonp",
        jsonp : "jsonp",

        success : function (response, textS, xhr) {
            alert("ok");
        },
        error : function (xmlHttpRequest, textStatus, errorThrown) {
            alert("not ok " + errorThrown);
             if(textStatus==='timeout')
              alert("request timed out");
        }
    });