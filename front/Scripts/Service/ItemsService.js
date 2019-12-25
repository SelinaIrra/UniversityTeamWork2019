let categories = [];
var ItemsService = function () {
    var is = {
        getCategories: getCategories,
        categories: categories,
        getProducts: getProducts,
        getProperties: getProperties
    };

    return is;

    function getCategories(){
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/categories/',
            type: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            async: false,
            error: function (res) { 
            },
            success: function (res) {
                let obj = {};
                for (let i = 0; i < res.length; i++) {
                    obj[res[i].name] = res[i].id;
                }
                is.categories = obj;
            }
        });
    }

    function getProperties(name, property){
        let result;
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/properties/' + property + '/' + is.categories[name],
            type: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            async: false,
            error: function (res) { 
            },
            success: function (res) {
                result = res;
            }
        });
        return result;
    }

    function getProducts(name){
        let result = [];
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/products/' + is.categories[name],
            type: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            async: false,
            error: function (res) { 
            },
            success: function (res) {
                result = res;
            }
        });
        return result;
    }

}
