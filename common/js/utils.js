const utils = {
    // 获取近n天的日期范围
    getDateRange(n){
        var today = new Date();
        var startDate = new Date(today.getTime() - 1000*24*60*60*(n-1));
        var sYear = startDate.getFullYear(),
            sMonth = utils.toDoubleDigit(startDate.getMonth()+1),
            sDate = utils.toDoubleDigit(startDate.getDate()),
            eYear = today.getFullYear(),
            eMonth = utils.toDoubleDigit(today.getMonth()+1),
            eDate = utils.toDoubleDigit(today.getDate());
        return {
            start: sYear + '-' + sMonth + '-' + sDate,
            end: eYear + '-' + eMonth + '-' + eDate
        }
    },
    // 计算时间天数间隔
    getTimeInterval(start, end){
        let _start = new Date(start.replace('-','\/')).getTime(),
            _end = new Date(end.replace('-', '\/')).getTime();
        let result = (_end-_start)/(1000*60*60*24);
        return result+1;
    },
    // 个位数转双位数
    toDoubleDigit(n){
        return n<10 ? '0'+ n : n;
    },
    // 对象深拷贝,可以深拷贝对象和数组
    deepCopy: function (obj) {
        var str,
            newObj = obj.constructor === Array ? [] : {};
        if (typeof obj !== 'object') {
            return;
        } else if (window.JSON) {
            str = JSON.stringify(obj),      //系列化对象
                newObj = JSON.parse(str);   //还原
        } else {
            for (var i in obj) {
                newObj[i] = typeof obj[i] === 'object' ?
                    base.deepCopy(obj[i]) : obj[i];
            }
        }
        return newObj;
    }
}

export default utils;