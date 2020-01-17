import React, { Fragment } from 'react';
import { List, Datagrid, TextField, EditButton, EmailField } from 'react-admin';

export const OrderList = (props) => (
    <List {...props} filter={{}} sort={{}} bulkActionButtons={<Fragment></Fragment>} pagination={<></>}>
        <Datagrid>
            <TextField source="id" sortable={false}/>
            <EmailField source="user.email" sortable={false}/>
            <TextField source="status" sortable={false}/>
            <EditButton />
        </Datagrid>
    </List>
);