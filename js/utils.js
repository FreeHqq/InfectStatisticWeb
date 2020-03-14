/**
 * 获取指定类型、日期、省份的数据（无合法性校验）
 * @param {String|Number} type 1:累计, 2:当日
 * @param {String} province 省份名，默认全国
 * @param {String} date YYYY-MM-DD格式的日期（某日或截至某日的数量），默认最新
 */
function getSpecifiedData (type, province = '全国', date = '2020-02-02') {
    type = type == 1 ? 'aggregate' : 'augment'
    let result = {}
    const empty = {
        "infected": 0,
        "suspect": 0,
        "cure": 0,
        "death": 0
    }
    try {
        result = log[type][date][province]
    } catch(e) {
        console.warn(e)
        result = empty
    }
    return result || empty
}