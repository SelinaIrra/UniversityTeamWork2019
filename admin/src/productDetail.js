import React from 'react';
import { Create, Edit, SimpleForm, TextInput, ImageInput, NumberInput, ImageField, required, Toolbar, SaveButton, ArrayInput, SimpleFormIterator } from 'react-admin';

const PostEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
    </Toolbar>
);


export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="id" />
            <TextInput source="categoryId" validate={required()} />
            <TextInput source="name" validate={required()} />
            <TextInput source="description" validate={required()} />
            <NumberInput source="price" />
            <NumberInput source="count" />
            <ImageInput source="image" label="Related pictures" accept="image/*" initialValue={null}>
                <ImageField source="image" title="title" />
            </ImageInput>
            <ImageField source="image" title="title" />
            <TextInput source="material" />
            <TextInput source="color" />
            <NumberInput source="width" />
            <NumberInput source="height" />
            <NumberInput source="lampCount" />
        </SimpleForm>
    </Create>
);

export const ProductEdit = (props) => (
    <Edit {...props}>
        <SimpleForm redirect="list" toolbar={<PostEditToolbar />}>
            <NumberInput source="id" disabled fullWidth={true} />
            <NumberInput source="categoryId" validate={required()} />
            <TextInput source="name" validate={required()} />
            <TextInput source="description" validate={required()} />
            <NumberInput source="price" />
            <NumberInput source="count" />
            <ImageInput source="image" label="Related pictures" accept="image/*" >
                <ImageField source="image" />
            </ImageInput>
            <ImageField source="image" label="Old Picture" />
            <TextInput source="material" />
            <TextInput source="color" />
            <NumberInput source="width" />
            <NumberInput source="height" />
            <NumberInput source="lampCount" />
        </SimpleForm>
    </Edit>
);