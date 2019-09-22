var UtilsService = function () {
    var us = {
        getParam: getParam,
        arrayFromSeparatedStr: arrayFromSeparatedStr,
        getSplittedArray: getSplittedArray,
        trim: trim,
        genArray: genArray,
        joinObjectAttribute: joinObjectAttribute,
        showInputError: showInputError,
        removeInputError: removeInputError,
        checkDifferenceObjAttribute: checkDifferenceObjAttribute
    };

    return us;

    function getParam(name) {
        var result;
        var tmp = [];
        location.search.substr(1).split('&').forEach(function (item) {
            tmp = item.split('=');
            if (tmp[0] == name) {
                result = decodeURIComponent(tmp[1]);
            }
        });
        return result;
    }

    function arrayFromSeparatedStr(str) {
        return str.split(',').map(function (x) { return x.trim() });
    }

    function getSplittedArray(arr, splitStr) {
        splitStr = splitStr || ',';
        return arr ? arr.split(splitStr) : [];
    }

    function trim(value) {
        return (value || "").trim();
    }

    function genArray(length, defaultValue) {
        let arr = [];
        for (let i = 0; i < length; i++)
            arr[i] = defaultValue;
        return arr;
    }

    function joinObjectAttribute(arr, key) {
        return arr.map(function (x) { return x[key] }).join(', ')
    }


    function removeInputError(el) {
        let elem = el[0]
        elem.classList.remove("error");
        elem.style = "padding: 0 5px";
        let error = elem.parentElement.querySelectorAll('span');
        error[0].innerHTML = "";
        error[1].classList.add('no_display');
    }

    function showInputError(elem, str){
        let el = elem[0];
        el.style = "padding: 0 20px 0 5px";
        let errors = el.parentElement.querySelectorAll('span')
        errors[0].innerHTML = str;
        errors[1].classList.remove('no_display');
        el.classList.add("error");
    }

    function checkDifferenceObjAttribute(oldValue, name, newObj) {
        if (oldValue != scope.userData[name]) newObj[name] = oldValue;
        return newObj
    }
}
