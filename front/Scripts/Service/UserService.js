let userInfo, cartList, favourList, ordersList, incognito;
var UserService = function () {
    var userS = {
        userInfo: userInfo,
        setUserInfo: setUserInfo,
        cartList: cartList,
        favourList: favourList,
        setCartList: setCartList,
        setFavouritedList: setFavouritedList,
        incognito: incognito, 
        ordersList: ordersList, 
        setOrdersList: setOrdersList
    };

    return userS;

    function setUserInfo() {
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/user',
            type: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            async: false, 
            dataType: 'json',
            error: function (res) { 
                if (res.status == '404')
                    return;
                if (userS.incognito == undefined && res.status == '403')
                    userS.incognito = true;
            },
            success: function (res) {
                userS.incognito = undefined;
                userS.userInfo = res;
            }
        });
    }

    function setCartList() {
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/cart',
            type: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            async: false, 
            error: function (res) { 
                if (userS.incognito == undefined && res.status == '403')
                    userS.incognito = true;
            },
            success: function (res) {
                userS.incognito = undefined;
                userS.cartList = res;
            }
        });
    }

    function setOrdersList() {
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/orders',
            type: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            async: false, 
            error: function (res) { 
                if (userS.incognito == undefined && res.status == '403')
                    userS.incognito = true;
            },
            success: function (res) {
                userS.incognito = undefined;
                userS.ordersList = res;
            }
        });
    }

    function setFavouritedList() {
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/favourite',
            type: "GET",
            async: false, 
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            error: function (res) {
                if (userS.incognito == undefined && res.status == '403')
                    userS.incognito = true;
            },
            success: function (res) {
                userS.incognito = undefined;
                userS.favourList = res;
            }
        });
    }

}