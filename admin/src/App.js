import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { authProvider } from './authProvider';
import { CategoriesList } from './categories/list';
import { ProductList } from './productList';
import { OrderList } from './orderList';
import { OrderEdit } from './orderDetail';
import { ProductCreate, ProductEdit } from './productDetail'

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.user = {
        authenticated: true,
        token: `Bearer ${localStorage.getItem('admin_token')}`
    };
    // add your own headers here
    let resp = fetchUtils.fetchJson(url, options);
    resp.then((resp) => {
        if (!resp.body)
            return;
        let items = JSON.parse(resp.body);
        resp.headers = new Headers({ 'X-Total-Count': items.length });
    })
    return resp;
}
const apiUrl = 'https://lightingstore-server.herokuapp.com';

const dataProvider = jsonServerProvider(apiUrl, fetchJson);

const customDataProvider = {
    ...dataProvider
}

customDataProvider.getOne = async function (a, b) {
    b.pagination = {};
    b.sort = {};
    let c = await this.getList(a, b);
    let item = c.data.find((x) => x.id === Number(b.id));

    async function f() {
        return { data: item }
    }
    return f();
}

customDataProvider.create = async function (resource, params) {
    if (params.data.image && params.data.image.image) {
        // let image = await fetch(params.data.image.image);
        // let formData = new FormData();
        // formData.append('image', await image.blob(), 'a.jpg')
        // let resp = await fetch(`${apiUrl}/images`, {
        //     method: 'POST',
        //     headers: {
        //         contentType: 'multipart/form-data',
        //         authorization: `Bearer ${localStorage.getItem('admin_token')}`
        //     },
        //     body: formData,
        // });
        // let url = await resp.text();
        // console.log(url);
        // params.data.images = [url];

        let image = await fetch(params.data.image.image);
        let formData = new FormData();
        formData.append('image', await image.blob(), 'a.jpg')
        let resp = await fetch(`${apiUrl}/images`, {
            method: 'POST',
            headers: {
                contentType: 'multipart/form-data',
                authorization: `Bearer ${localStorage.getItem('admin_token')}`
            },
            body: formData,
        });
        let url = await resp.text();
        params.data.image = url;
    }
    return fetchJson(apiUrl + "/" + resource, {
        method: 'POST',
        body: JSON.stringify(params.data),
    }).then(function (_a) {
        return ({
            data: params.data
        });
    });
};

const updateOrderStatus = async (orderId, newStatus, oldStatus) => {
    if (newStatus !== oldStatus)
        return fetchJson(apiUrl + "/orders/" + orderId + '/status/' + newStatus, {
            method: 'PUT',
        }).then(function (_a) {
            return customDataProvider.getOne('orders', { id: orderId });
        });
    else
        return customDataProvider.getOne('orders', { id: orderId });
}

customDataProvider.update = async (resource, params) => {
    if (resource === 'orders') {
        return updateOrderStatus(params.data.id, params.data.status, params.previousData.status);
    }
    if (params.data.image && params.data.image.image) {
        let image = await fetch(params.data.image.image);
        let formData = new FormData();
        formData.append('image', await image.blob(), 'a.jpg')
        let resp = await fetch(`${apiUrl}/images`, {
            method: 'POST',
            headers: {
                contentType: 'multipart/form-data',
                authorization: `Bearer ${localStorage.getItem('admin_token')}`
            },
            body: formData,
        });
        let url = await resp.text();
        params.data.image = url;
    }
    return fetchJson(apiUrl + "/" + resource, {
        method: 'PUT',
        body: JSON.stringify(params.data),
    }).then(function (_a) {
        return customDataProvider.getOne(resource, params);
    });
}

const App = () => (
    <Admin authProvider={authProvider} dataProvider={customDataProvider}>
        <Resource name="categories" list={CategoriesList} />
        <Resource name="orders" list={OrderList} edit={OrderEdit} />
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} />
    </Admin>
);

export default App;