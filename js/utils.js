/**
 * 获取指定类型、日期、省份的数据（无合法性校验）
 * @param {String|Number} scale 1:累计, 2:当日
 * @param {String} province 省份名，默认全国
 * @param {String} date YYYY-MM-DD格式的日期（某日或截至某日的数量），默认最新
 * @returns {Object}
 */
function getSpecifiedData (scale, province = '全国', date = '2020-02-02') {
    scale = scale == 1 ? 'aggregate' : 'augment'
    let result = {}
    const empty = {
        "infected": 0,
        "suspect": 0,
        "cure": 0,
        "death": 0
    }
    try {
        result = log[scale][date][province]
    } catch(e) {
        console.warn(e)
        result = empty
    }
    return result || empty
}

/**
 * 获取指定省份、类型的所有数据（无合法性校验）
 * @param {String|Number} scale 1:累计, 2:当日
 * @param {String} type 数据类型，infected|suspect|death|cure
 * @param {String} province 省份名，默认全国
 * @returns {Array}
 */
function getStatisticData (scale, type, province = '全国') {
    scale = scale == 1 ? 'aggregate' : 'augment'
    let result = []
    // const empty = {
    //     "infected": 0,
    //     "suspect": 0,
    //     "cure": 0,
    //     "death": 0
    // }
    Object.values(log[scale]).forEach(day => {
        if (day[province]) {
            result.push(day[province][type])
        } else {
            result.push(0)
        }
    })
    return result
}