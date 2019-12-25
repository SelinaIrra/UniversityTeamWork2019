import React, { Fragment } from 'react';
import { List, Datagrid, TextField, EditButton, EmailField } from 'react-admin';

export const OrderList = (props) => (
    <List {...props} filter={{}} sort={{}} bulkActionButtons={<Fragment></Fragment>}>
        <Datagrid>
            <TextField source="id" />
            <EmailField source="user.email" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);