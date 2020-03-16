const myChart = echarts.init(document.getElementById('main-chart'));
const provinces = ["南海诸岛", "北京", "天津", "上海", "重庆", "河北", "河南", "云南", "辽宁", "黑龙江", "湖南", "安徽", "山东", "新疆", "江苏", "浙江", "江西", "湖北", "广西", "甘肃", "山西", "内蒙古", "陕西", "吉林", "福建", "贵州", "广东", "青海", "西藏", "四川", "宁夏", "海南", "台湾", "香港", "澳门"]
let dataList = provinces.map(v => ({
    name: v,
    value: getSpecifiedData(1, v).infected
}))

window.onload = function () {
    const urlParams = new URLSearchParams(location.search)
    if (!urlParams.get('province')) {
        location.search = '?province=全国'
    }
    if (urlParams.get('province') !== '全国') {
        this.document.body.prepend(urlParams.get('province'))
    }
}

$('#date-picker').on('change', e => {
    const newDate = e.target.value,
          type = $('.type-btn--active')[0].dataset.index
          typeText = $('.type-btn--active')[0].innerText
    dataList = provinces.map(provinceName => ({
        name: provinceName,
        value: getSpecifiedData(type, provinceName, newDate).infected
    }))
    option.series[0].data = dataList
    let max = Math.max(...dataList.map(v => v.value), 50)
    max = max > 2000 ? 2000 : max // 避免差异过大
    option.visualMap.max = max
    option.title.text = newDate + typeText + '情况地图'
    myChart.setOption(option)
})

$('#aggregate').click(function() {
    $('.type-btn--active').removeClass('type-btn--active')
    $(this).addClass('type-btn--active')
    const newType = 1
    date = $('#date-picker').val()
    typeText = '累计确诊'
    dataList = provinces.map(provinceName => ({
        name: provinceName,
        value: getSpecifiedData(newType, provinceName, date).infected
    }))
    option.series[0].data = dataList
    option.series[0].name = typeText
    let max = Math.max(...dataList.map(v => v.value), 20)
    max = max > 2000 ? 2000 : max // 避免差异过大
    option.visualMap.max = max
    option.title.text = date + typeText + '情况地图'
    myChart.setOption(option)
})
$('#augment').click(function() {
    $('.type-btn--active').removeClass('type-btn--active')
    $(this).addClass('type-btn--active')
    const newType = 2
          date = $('#date-picker').val()
          typeText = '当日新增'
    dataList = provinces.map(provinceName => ({
        name: provinceName,
        value: getSpecifiedData(newType, provinceName, date).infected
    }))
    option.series[0].data = dataList
    option.series[0].name = typeText
    let max = Math.max(...dataList.map(v => v.value), 20)
    max = max > 500 ? 500 : max // 避免差异过大
    option.visualMap.max = max
    option.title.text = date + typeText + '情况地图'
    myChart.setOption(option)
})


let option = {
    title: {
        text: '2020-02-02累计确诊情况地图'
    },
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
// myChart.on('honver', function (params) {
//     alert(params.name);
// });

myChart.on('click', function (params) {
    console.log(params)
    const href = './province.html?province=' + params.data.name
    layer.open({
        type: 2,
        title: params.data.name + '省疫情详细情况',
        shadeClose: true,
        shade: 0.8,
        area: ['840px', '750px'],
        content: href //iframe的url
      }); 
});