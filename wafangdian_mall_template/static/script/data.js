var orderList = [{
        time:"10:10",
        list:[{
            errno:0,
            msg:"西环街二段社区服务点成交一单 无异常"
        },{
            errno:0,
            msg:"祝丰街远洲国际城服务点成交一单 无异常"
        }]
    },{
        time:"10:25",
        list:[{
            errno:0,
            msg:"民主街三段社区服务点成交一单 无异常"
        }]
    },{
        time:"10:36",
        list:[{
            errno:0,
            msg:"工联街三段服务点成交一单 无异常"
        },{
            errno:0,
            msg:"文化路社区服务点成交一单 无异常"
        }]
    },{
        time:"11:40",
        list:[{
            errno:0,
            msg:"西长春路一段服务站成交一单 无异常"
        }]
    },{
        time:"11:50",
        list:[{
            errno:1,
            msg:"北共济街社区服务点成交一单 异常"
        }]
    },{
        time:"12:59",
        list:[{
            errno:0,
            msg:"南五路社区服务点成交一单 无异常"
        },{
            errno:1,
            msg:"南四路社区服务点成交一单 异常"
        }]
    },{
        time:"12:59",
        list:[{
            errno:0,
            msg:"南五路社区服务点成交一单 无异常"
        },{
            errno:1,
            msg:"南四路社区服务点成交一单 异常"
        }]
    },{
        time:"12:59",
        list:[{
            errno:0,
            msg:"南五路社区服务点成交一单 无异常"
        },{
            errno:1,
            msg:"南四路社区服务点成交一单 异常"
        }]
    },{
        time:"12:59",
        list:[{
            errno:0,
            msg:"南五路社区服务点成交一单 无异常"
        },{
            errno:1,
            msg:"南四路社区服务点成交一单 异常"
        }]
    },{
        time:"12:59",
        list:[{
            errno:0,
            msg:"南五路社区服务点成交一单 无异常"
        },{
            errno:1,
            msg:"南四路社区服务点成交一单 异常"
        }]
    },{
        time:"12:59",
        list:[{
            errno:0,
            msg:"南五路社区服务点成交一单 无异常"
        },{
            errno:1,
            msg:"南四路社区服务点成交一单 异常"
        }]
    }]
var sellRankList = [{
        name:"大盛晏火腿官方店",
        value:45323
    },{
        name:"宣威市老倌土特产",
        value:5323
    },{
        name:"云宣稻香园旗舰店",
        value:15323
    },{
        name:"杨宣宣威火腿店",
        value:4323
    },{
        name:"可渡村",
        value:1323
    },{
        name:"宣威市老有为云南土特",
        value:7323
    },{
        name:"随心所逸 土特产",
        value:5323
    },{
        name:"宣威升达火腿",
        value:6323
    },{
        name:"优农宣威",
        value:145323
    },{
        name:"宣威阳光食品",
        value:15323
    },{
        name:"简酥旗舰店",
        value:323
    },{
        name:"老浦家食品旗舰店",
        value:9323
    },{
        name:"秀滇食品专营店",
        value:98323
    },{
        name:"七彩云南味",
        value:45323
    },{
        name:"杨宣宣威火腿店",
        value:28323
    },{
        name:"可渡村",
        value:8453
    },{
        name:"宣威市老有为云南土特",
        value:6545
    },{
        name:"随心所逸 土特产",
        value:9648
    },{
        name:"宣威升达火腿",
        value:4892
    },{
        name:"优农宣威",
        value:5102
    },{
        name:"宣威阳光食品",
        value:12903
    },{
        name:"简酥旗舰店",
        value:23917
    }]
var learnRanklineChartData = [{
        name:"复州城镇",
        value:4.5
    },{
        name:"松树镇",
        value:4
    },{
        name:"得利寺镇",
        value:3
    },{
        name:"万家岭镇",
        value:2
    },{
        name:"许屯镇",
        value:2
    },{
        name:"永宁镇",
        value:1.5
    },{
        name:"谢屯镇",
        value:1.2
    },{
        name:"老虎屯镇",
        value:0.8
    }]
var pointData = [
    { name: '复州城镇', value: 200 },
    { name: '松树镇', value: 190 },
    { name: '得利寺镇', value: 100 },
    { name: '万家岭镇', value: 50 },
    { name: '许屯镇', value: 220 },
    { name: '永宁镇', value: 60 },
    { name: '谢屯镇', value: 160 },
    { name: '老虎屯镇', value: 90 },
    { name: '红沿河镇', value: 110 },
    { name: '仙浴湾镇',  value: 105}
];
var pathData01 = [{
    name:"复州城镇",
    data:[
        [{name:"复州城镇"},{name:"上海",value:195}],
        [{name:"复州城镇"},{name:"呼和浩特",value:95}],
        [{name:"复州城镇"},{name:"成都",value:95}],
        [{name:"复州城镇"},{name:"北京",value:95}],
        [{name:"复州城镇"},{name:"扬州",value:95}]
    ]
}]
var pathData02 = [{
    name:"仙浴湾镇",
    data:[
        [{name:"仙浴湾镇"},{name:"哈尔滨",value:95}],
        [{name:"仙浴湾镇"},{name:"包头",value:95}],
        [{name:"仙浴湾镇"},{name:"合肥",value:95}],
        [{name:"仙浴湾镇"},{name:"长春",value:95}],
        [{name:"仙浴湾镇"},{name:"沈阳",value:55}]
    ]
}]
// 一下是瓦房店坐标map
var wfdCoordMap = {
    "复州城镇":[121.717213,39.737782],
    "松树镇":[122.116049,39.831916],
    "得利寺镇":[122.072765,39.786536],
    "万家岭镇":[122.167886,39.949758],
    "许屯镇":[122.087782,40.046606],
    "永宁镇":[121.894134,39.926926],
    "谢屯镇":[121.54733,39.45846],
    "老虎屯镇":[121.821332,39.661079],
    "红沿河镇":[121.572169,39.766611],
    "李官镇":[121.985392,40.059267],
    "仙浴湾镇":[121.539689,39.709356],
    "瓦窝镇":[122.022422,39.694589],
    "元台镇":[122.057951,39.629899],
    "土城乡":[121.94634,39.97863],
    "阎店乡":[121.840269,39.845197],
    "西杨乡":[121.744566,39.829164],
    "泡崖乡":[121.651122,39.538443],
    "驼山乡":[121.662617,39.802852],
    "赵屯乡":[122.014762,39.90039],
    "杨家满族乡":[121.765484,39.649486],
    "三台满族乡":[121.61545,39.647436],
}
var WFDMapData = [{
    name:"泡崖乡",
    data:[
        [{name:"泡崖乡"},{name:"三台满族乡",value:195}],
        [{name:"泡崖乡"},{name:"杨家满族乡",value:95}],
        [{name:"泡崖乡"},{name:"赵屯乡",value:95}],
        [{name:"泡崖乡"},{name:"驼山乡",value:95}],
        [{name:"泡崖乡"},{name:"得利寺镇",value:95}],
        [{name:"泡崖乡"},{name:"谢屯镇",value:95}],
        [{name:"泡崖乡"},{name:"阎店乡",value:95}],
        [{name:"泡崖乡"},{name:"土城乡",value:95}],
        [{name:"泡崖乡"},{name:"瓦窝镇",value:95}],
        [{name:"泡崖乡"},{name:"西杨乡",value:55}]
    ]
},{
    name:"仙浴湾镇",
    data:[
        [{name:"仙浴湾镇"},{name:"三台满族乡",value:195}],
        [{name:"仙浴湾镇"},{name:"杨家满族乡",value:95}],
        [{name:"仙浴湾镇"},{name:"赵屯乡",value:95}],
        [{name:"仙浴湾镇"},{name:"驼山乡",value:95}],
        [{name:"仙浴湾镇"},{name:"得利寺镇",value:95}],
        [{name:"仙浴湾镇"},{name:"泡崖乡",value:95}],
        [{name:"仙浴湾镇"},{name:"阎店乡",value:95}],
        [{name:"仙浴湾镇"},{name:"土城乡",value:95}],
        [{name:"仙浴湾镇"},{name:"瓦窝镇",value:95}],
        [{name:"仙浴湾镇"},{name:"西杨乡",value:55}]
    ]
},{
    name:"复州城镇",
    data:[
        [{name:"复州城镇"},{name:"松树镇",value:95}],
        [{name:"复州城镇"},{name:"得利寺镇",value:95}],
        [{name:"复州城镇"},{name:"万家岭镇",value:95}],
        [{name:"复州城镇"},{name:"许屯镇",value:95}],
        [{name:"复州城镇"},{name:"谢屯镇",value:95}],
        [{name:"复州城镇"},{name:"老虎屯镇",value:95}],
        [{name:"复州城镇"},{name:"红沿河镇",value:95}],
        [{name:"复州城镇"},{name:"瓦窝镇",value:95}],
        [{name:"复州城镇"},{name:"元台镇",value:95}],
        [{name:"复州城镇"},{name:"土城乡",value:95}]
    ]
}]
// 以下是地图迁徙图数据
var chinaCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
};

var coordMap = JSON.parse((JSON.stringify(chinaCoordMap) + JSON.stringify(wfdCoordMap)).replace(/}{/, ','));
// console.log(coordMap)

var chinaMapData = [{
    name:"北京",
    data:[
        [{name:'北京'}, {name:'上海',value:95}],
        [{name:'北京'}, {name:'广州',value:90}],
        [{name:'北京'}, {name:'大连',value:80}],
        [{name:'北京'}, {name:'南宁',value:70}],
        [{name:'北京'}, {name:'南昌',value:60}],
        [{name:'北京'}, {name:'拉萨',value:50}],
        [{name:'北京'}, {name:'长春',value:40}],
        [{name:'北京'}, {name:'包头',value:30}],
        [{name:'北京'}, {name:'重庆',value:20}],
        [{name:'北京'}, {name:'常州',value:10}]
    ]
},{
    name:"上海",
    data:[
        [{name:'上海'},{name:'包头',value:95}],
        [{name:'上海'},{name:'昆明',value:90}],
        [{name:'上海'},{name:'广州',value:80}],
        [{name:'上海'},{name:'郑州',value:70}],
        [{name:'上海'},{name:'长春',value:60}],
        [{name:'上海'},{name:'重庆',value:50}],
        [{name:'上海'},{name:'长沙',value:40}],
        [{name:'上海'},{name:'北京',value:30}],
        [{name:'上海'},{name:'丹东',value:20}],
        [{name:'上海'},{name:'大连',value:10}]
    ]
},{
    name:"广州",
    data:[
        [{name:'广州'},{name:'福州',value:95}],
        [{name:'广州'},{name:'太原',value:90}],
        [{name:'广州'},{name:'长春',value:80}],
        [{name:'广州'},{name:'重庆',value:70}],
        [{name:'广州'},{name:'西安',value:60}],
        [{name:'广州'},{name:'成都',value:50}],
        [{name:'广州'},{name:'常州',value:40}],
        [{name:'广州'},{name:'北京',value:30}],
        [{name:'广州'},{name:'北海',value:20}],
        [{name:'广州'},{name:'海口',value:10}]
    ]
}]
// 以上是地图迁徙图数据

var gdpPieData = [{
    name:"淘宝",
    value:10
},{
    name:"京东",
    value:6
},{
    name:"苏宁",
    value:3
}]

var gdpPieData02 = [{
    name:"火腿系列",
    value:6
},{
    name:"水果系列",
    value:9
},{
    name:"农产品系列",
    value:4
}]

var gdpPieData03 = [{
    name:"20-35岁",
    value:43
},{
    name:"35-45岁",
    value:96
},{
    name:"45-55岁",
    value:71
}]

var gdpLineData = [{
    name:"2013",
    value:16
},{
    name:"2014",
    value:20
},{
    name:"2015",
    value:22
},{
    name:"2016",
    value:14
},{
    name:"2017",
    value:18
},{
    name:"2018",
    value:16
},{
    name:"2019",
    value:20
}]

var sellIncreaseLineData = [{
    name:"2月",
    value:10
},{
    name:"3月",
    value:4.4
},{
    name:"4月",
    value:5
},{
    name:"5月",
    value:6.6
},{
    name:"6月",
    value:7
},{
    name:"7月",
    value:1
},{
    name:"8月",
    value:14
}]

var opulationRatioData = [{
    name:"苹果",
    value:77
},{
    name:"地瓜",
    value:33
},{
    name:"樱桃",
    value:6
},{
    name:"葡萄",
    value:3
}]

var yieldData = [{
    name:"驼山乡",
    value:1938
},{
    name:"西杨乡",
    value:1669
},{
    name:"许屯镇",
    value:1299
},{
    name:"永宁镇",
    value:932
},{
    name:"复州城镇",
    value:800
}]

var salesTrendData = [{
    name:"一月份",
    value:1038
},{
    name:"二月份",
    value:1669
},{
    name:"三月份",
    value:1299
},{
    name:"四月份",
    value:1432
},{
    name:"五月份",
    value:800
},{
    name:"六月份",
    value:1000
}]