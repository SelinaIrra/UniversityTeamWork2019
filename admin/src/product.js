import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const ProductList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);