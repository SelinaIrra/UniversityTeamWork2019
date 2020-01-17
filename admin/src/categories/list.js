import React, { Fragment } from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const CategoriesList = (props) => (
    <List {...props} filter={{}} sort={{}} bulkActionButtons={<Fragment></Fragment>} pagination={<></>}>
        <Datagrid>
            <TextField source="id" sortable={false} />
            <TextField source="name" sortable={false} />
        </Datagrid>
    </List>
);