window.onload = function () {
    const urlParams = new URLSearchParams(location.search)
    if (!urlParams.get('province')) {
        location.search = '?province=全国'
    }
    if (urlParams.get('province') !== '全国') {
        this.document.body.prepend(urlParams.get('province'))
    }
}



var myChart = echarts.init(document.getElementById('main'));

const provinces = ["南海诸岛", "北京", "天津", "上海", "重庆", "河北", "河南", "云南", "辽宁", "黑龙江", "湖南", "安徽", "山东", "新疆", "江苏", "浙江", "江西", "湖北", "广西", "甘肃", "山西", "内蒙古", "陕西", "吉林", "福建", "贵州", "广东", "青海", "西藏", "四川", "宁夏", "海南", "台湾", "香港", "澳门"]
const dataList = provinces.map(v => ({
    name: v,
    value: getSpecifiedData(1, v).infected
}))

function randomValue() {
    return Math.round(Math.random() * 1000);
}
option = {
    tooltip: {
        formatter: function (params, ticket, callback) {
            return params.seriesName + '<br />' + params.name + '：' + params.value
        } //数据格式化
    },
    visualMap: {
        min: 0,
        max: 1500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], //取值范围的文字
        inRange: {
            color: ['#ffffff', '#974236'] //取值范围的颜色
        },
        show: true //图注
    },
    geo: {
        map: 'china',
        roam: false, //不开启缩放和平移
        zoom: 1.23, //视角缩放比例
        label: {
            normal: {
                show: true,
                fontSize: '10',
                color: 'rgba(0,0,0,0.7)'
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
                areaColor: '#F3B329', //鼠标选择区域颜色
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    series: [{
        name: '确诊人数',
        type: 'map',
        geoIndex: 0,
        data: dataList
    }]
};

myChart.setOption(option);
myChart.on('honver', function (params) {
    alert(params.name);
});

myChart.on('click', function (params) {
    console.log(params)
    location.search = '?province=' + params.data.name
});