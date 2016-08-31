var AQIBgcolor=["rgba(37, 232, 44, 0.2)","rgba(240, 185, 12, 0.2)","rgba(242, 118, 4, 0.2)","rgba(254, 0, 0, 0.2)","rgba(112, 48, 160, 0.2)","rgba(192, 0, 2, 0.2)"];
function chartPM25(startHour,indoorPM25,outdoorPM25) {
    var x=new Array();
    for(var i=0;i<24;i++)
        x[i]=(startHour+i)%24;
    var indoor=indoorPM25.splice(0,24);
    var outdoor=outdoorPM25.splice(0,24);
    var chart=new Highcharts.chart(
        {
            chart:{
                renderTo:"picPM25",
                type:"line"
            },
            title:{
              text:"PM2.5"
            },
            xAxis:{
                categories:x,
            },
            yAxis:{
                title:{
                    text:"PM2.5 AQI"
                },
                plotBands:[
                    {
                        from:0,
                        to:50,
                        color:AQIBgcolor[0],
                        label:{
                            text:"Good",
                            x:-12
                        }
                    },
                    {
                        from:50,
                        to:100,
                        color:AQIBgcolor[1],
                        label:{
                            text:"Moderate",
                            x:-12
                        }
                    },
                    {
                        from:100,
                        to:150,
                        color:AQIBgcolor[2],
                        label:{
                            text:"UnhealthyForSensitive",
                            x:-12
                        }
                    },
                    {
                        from:150,
                        to:200,
                        color:AQIBgcolor[3],
                        label:{
                            text:"Unhealthy",
                            x:-12
                        }

                    },
                    {
                        from:200,
                        to:300,
                        color:AQIBgcolor[4],
                        label:{
                            text:"VeryUnhealthy",
                            x:-12
                        }
                    },
                    {
                        from:300,
                        to:10000,
                        color:AQIBgcolor[5],
                        label:{
                            text:"Hazardous",
                            x:-12
                        }
                    }
                ]
            },
            series:[
                {
                    name:'Indoor',
                    data:indoor
                },
                {
                    name:'Outdoor',
                    data:outdoor
                }
            ]
        }
    )
}
function chartPM10(startHour,indoorPM10,outdoorPM10) {
    var x=new Array();
    for(var i=0;i<24;i++)
        x[i]=(startHour+i)%24;
    var indoor=indoorPM10.splice(0,24);
    var outdoor=outdoorPM10.splice(0,24);
    var chart=new Highcharts.chart(
        {
            chart:{
                renderTo:"picPM10",
                type:"spline",
                animation:Highcharts.svg,
                marginRight:10
            },
            title:{
                text:"PM10"
            },
            xAxis:{
                categories:x
            },
            yAxis:{
                title:{
                    text:"PM10 AQI"
                },
                plotBands:[
                    {
                        from:0,
                        to:50,
                        color:AQIBgcolor[0],
                        label:{
                            text:"Good",
                            x:-12
                        }
                    },
                    {
                        from:50,
                        to:100,
                        color:AQIBgcolor[1],
                        label:{
                            text:"Moderate",
                            x:-12
                        }
                    },
                    {
                        from:100,
                        to:150,
                        color:AQIBgcolor[2],
                        label:{
                            text:"UnhealthyForSensitive",
                            x:-12
                        }
                    },
                    {
                        from:150,
                        to:200,
                        color:AQIBgcolor[3],
                        label:{
                            text:"Unhealthy",
                            x:-12
                        }

                    },
                    {
                        from:200,
                        to:300,
                        color:AQIBgcolor[4],
                        label:{
                            text:"VeryUnhealthy",
                            x:-12
                        }
                    },
                    {
                        from:300,
                        to:10000,
                        color:AQIBgcolor[5],
                        label:{
                            text:"Hazardous",
                            x:-12
                        }
                    }
                ]
            },
            series:[
                {
                    name:'Indoor',
                    data:indoor
                },
                {
                    name:'Outdoor',
                    data:outdoor
                }
            ]
        }
    )
}
function chartStatusPie(working,unworking) {
    Highcharts.setOptions({
    });
    var chart=new Highcharts.chart(
        {
            chart: {
                renderTo: 'statusPie',
                type: 'pie'
            },
            title:{
                text:"Indoor Air Quality Monitors Status"
            },
            series:[
                {
                    name:'Number',
                    data:[
                        {
                            name:"Working",
                            y:working,
                            selected:true,
                            sliced:true,
                            color:"#32CD32"
                        },
                        {
                            name:"UnWorking",
                            y:unworking,
                            color:"#DC143C"
                        }
                    ]
                }
            ]
        }
    );
}
