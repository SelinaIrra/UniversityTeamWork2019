var CartActionService = function () {
    var cas = {
        deleteItem: deleteItem,
        addItem: addItem,
    };

    return cas;

    function deleteItem (id, successFunc){
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/cart/' + id,
            type: "DELETE",
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            error: function (res) { 
                alert('ошибка');
            },
            success: successFunc
        });
    }

    function addItem(id, successFunc){
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/cart/' + id,
            type: "PUT",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            error: function (res) { 
                alert('ошибка');
            },
            success: successFunc
        });
    }

}