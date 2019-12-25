import React, { Fragment } from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const CategoriesList = (props) => (
    <List {...props} filter={{}} sort={{}} bulkActionButtons={<Fragment></Fragment>}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);