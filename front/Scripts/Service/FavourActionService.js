var FavourActionService = function () {
    var fas = {
        deleteItem: deleteItem,
        addItem: addItem,
    };

    return fas;

    function deleteItem (id, successFunc){
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/favourites/' + id,
            type: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            dataType: 'json',
            error: function (res) { 
                alert('ошибка');
            },
            success: function (res) {
                successFunc(res);
            }
        });
    }

    function addItem(id, successFunc){
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/favourites/' + id,
            type: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            dataType: 'json',
            error: function (res) { 
                alert('ошибка');
            },
            success: function (res) {
                successFunc(res);
            }
        });
    }

}