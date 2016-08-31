/**
 * Created by v-junksu on 8/25/2016.
 */
// var urlSite="http://localhost:1260/IndoorAir_api.aspx";
var urlSite="http://junkai-test.chinacloudsites.cn/IndoorAir_api.aspx";
function getStationInfo(position) {
    $.ajax({
        type:"GET",
        url:urlSite+"?type=getStationInfo",
        dataType:"jsonp",
        jsonp:"jsoncallback",
        data:"position="+position,
        success:function (item) {
            setInfo(item)
        },
        error:function (e) {
            alert("error");
        }
    })
}
function getStationList() {
    $.ajax({
        type:"GET",
        url:urlSite+"?type=getStationList",
        dataType:"jsonp",
        jsonp:"jsoncallback",
        success:function (item) {
            initStationList(item)
        },
        error:function (e) {
            alert("error");
        }
    })
}
function  getWorkingStatus() {
    $.ajax({
        type:"GET",
        url:urlSite+"?type=getWorkingStatus",
        dataType:"jsonp",
        jsonp:"jsoncallback",
        success:function (item) {
            set_AQIStatusBadge(item)
        },
        error:function (e) {
            alert("error");
        }
    })
}
function get24HoursAQI(position){
    $.ajax({
        type:"GET",
        url:urlSite+"?type=get24HoursAQI",
        dataType:"jsonp",
        jsonp:"jsoncallback",
        data:"position="+position,
        success:function (item) {
            set_24HoursAQI(item);
        },
        error:function (e) {
            alert("error");
        }
    })
}