import React, { Fragment } from 'react';

import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const ProductList = (props) => (
    <List {...props} filter={{}} sort={{}} bulkActionButtons={<Fragment></Fragment>}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="categoryId" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="price" />
            <TextField source="count" />
            <EditButton />
        </Datagrid>
    </List>
);