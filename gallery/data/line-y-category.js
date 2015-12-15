option = {
    legend: {
        data:['高度(km)与气温(°C)变化关系']
    },
    tooltip : {
        trigger: 'axis',
        formatter: "Temperature : <br/>{b}km : {c}°C"
    },
    grid: {
        x: '3%',
        x2: '4%',
        y2: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} °C'
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisLine : {onZero: false},
            axisLabel : {
                formatter: '{value} km'
            },
            boundaryGap : false,
            data : ['0', '10', '20', '30', '40', '50', '60', '70', '80']
        }
    ],
    series : [
        {
            name:'高度(km)与气温(°C)变化关系',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
        }
    ]
};