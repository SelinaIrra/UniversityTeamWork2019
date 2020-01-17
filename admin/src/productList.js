import React, { Fragment } from 'react';

import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const ProductList = (props) => (
    <List {...props} filter={{}} sort={{}} bulkActionButtons={<Fragment></Fragment>} pagination={<></>}>
        <Datagrid>
            <TextField source="id" sortable={false} />
            <TextField source="categoryId" sortable={false} />
            <TextField source="name" sortable={false} />
            <TextField source="description" sortable={false} />
            <TextField source="price" sortable={false} />
            <TextField source="count" sortable={false} />
            <EditButton />
        </Datagrid>
    </List>
);