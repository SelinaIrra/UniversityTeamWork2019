let categories = [];
var ItemsService = function () {
    var is = {
        getCategories: getCategories,
        categories: categories
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
            dataType: 'json',
            error: function (res) { 
                alert('ошибка');
            },
            success: function (res) {
                is.categories = res;
            }
        });
    }
}
