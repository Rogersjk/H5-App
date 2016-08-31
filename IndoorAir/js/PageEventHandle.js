var stationInfoKey=new Array("StationId","HostName","position","Persons","collectTime","indoorPM25AQI","indoorPM10AQI","indoorAQILevel","outdoorPM25AQI","outdoorPM10AQI","outdoorAQILevel");
var stationAQIKey=["dataSource","updateTime","startHour","indoorPM25AQIList","indoorPM10AQIList","outdoorPM25AQIList","outdoorPM10AQIList"];
var colorLevel=["#32CD32","#F4A460","#eb9500","#f50000","#E2D5EC","#800080"];
var AQILevel=["优","良","轻度污染","中度污染","重度污染","严重污染"];
$(document).ready(function () {
    getStationList();
    getWorkingStatus();
});

function initStationList(item) {
    var sList1=document.getElementById("stationList01");
    var sList2=document.getElementById("stationList02");
    // alert(JSON.stringify(item));
    var keys1=Object.keys(item).sort();
    for(var i=0;i<keys1.length;i++)
    {
        var a1=document.createElement("a");
        var a2=document.createElement("a");
        a1.setAttribute("href","#");
        a2.setAttribute("href","#");
        if(item[keys1[i]]==0)
        {
            a1.style.color="red";
            a2.style.color="red";
        }
        var li1=document.createElement("li");
        var li2=document.createElement("li");
        a1.innerHTML=keys1[i];
        a2.innerHTML=keys1[i];
        li1.appendChild(a1);
        li2.appendChild(a2);
        sList1.appendChild(li1);
        sList2.appendChild(li2);
    }
    var first1=$("#stationList01 li:first a").html();
    $("#listBtn01").html(first1+"&nbsp;<span class='caret'></span>");
    var first2=$("#stationList02 li:first a").html();
    $("#listBtn02").html(first2+"&nbsp;<span class='caret'></span>");
    getStationInfo(first1);
    get24HoursAQI(first2)
    handle_stationList01();
    handle_stationList02();
}

function  setInfo(data) {
    var stationInfo=data;
    // alert(JSON.stringify(data));
    var x=document.getElementById("stationInfoTable");
    var y=document.getElementById("tableAQI");
    for(var i=0;i<5;i++)
        x.rows[i].cells[1].innerHTML=data[stationInfoKey[i]];
    for(var i=1;i<=3;i++)
    {
        var res1=data[stationInfoKey[4+i]];
        var res2=data[stationInfoKey[7+i]];
        y.rows[1].cells[i].innerHTML=res1;
        y.rows[2].cells[i].innerHTML=res2;
        if(i==3)
        {
            y.rows[1].cells[i].style.color=colorLevel[setAQIColor2(res1)];
            y.rows[2].cells[i].style.color=colorLevel[setAQIColor2(res2)];
        }
        else
        {
            y.rows[1].cells[i].style.color=colorLevel[setAQIColor(res1)];
            y.rows[2].cells[i].style.color=colorLevel[setAQIColor(res2)];
        }

    }
}
function setAQIColor(num) {
    if(num>300)
        return 5;
    else
        return parseInt((num-1)/50);
}
function setAQIColor2(str) {
    for(var i=0;i<AQILevel.length;i++)
        if(str==AQILevel[i])
            return i;
}
function set_AQIStatusBadge(item) {
    $("#All").html(item[0]);
    $("#Unworking").html(item[1]);
    $("#Working").html(item[2]);
    chartStatusPie(item[2],item[1]);
}
function set_24HoursAQI(item) {
    $("#outDataFrom").text(item[stationAQIKey[0]]);
    $("#updateTime").text(item[stationAQIKey[1]]);
    var startHour=item[stationAQIKey[2]];
    var inPM25=item[stationAQIKey[3]];
    var inPM10=item[stationAQIKey[4]];
    var outPM25=item[stationAQIKey[5]];
    var outPM10=item[stationAQIKey[6]];
    chartPM25(startHour,inPM25,outPM25);
    chartPM10(startHour,inPM10,outPM10);
}

function handle_stationList01() {
    $("#stationList01 li").on("click",function () {
        var res=$(this).text();
        $("#listBtn01").html(res+"&nbsp;<span class='caret'></span>");
        getStationInfo(res);
    })
}
function handle_stationList02() {
    $("#stationList02 li").click(function () {
        var res=$(this).text();
        $("#listBtn02").html(res+"&nbsp;<span class='caret'></span>");
        get24HoursAQI(res);
    })
}
