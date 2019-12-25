import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, SelectInput, Toolbar, SaveButton, ArrayInput, SimpleFormIterator } from 'react-admin';

const PostEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
    </Toolbar>
);

export const OrderEdit = (props) => (
    <Edit {...props}>
        <SimpleForm redirect="list" toolbar={<PostEditToolbar />}>
            <NumberInput source="id" disabled fullWidth={true} />
            <TextInput source="user.email" disabled />
            <ArrayInput source="products" disabled>
                <SimpleFormIterator>
                    <TextInput source="id" />
                </SimpleFormIterator>
            </ArrayInput>
            <SelectInput source="status" choices={[
                { id: 'CREATED', name: 'CREATED' },
                { id: 'COMPLETED', name: 'COMPLETED' },
                { id: 'PROCESSING', name: 'PROCESSING' },
                { id: 'CANCELLED', name: 'CANCELLED' },
            ]} />
        </SimpleForm>
    </Edit>
);