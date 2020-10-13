import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput
} from 'react-admin';

const UserTitle = ({ record }) => <span>User {record ? `"${record.name}"`: '' }</span>;

/* 
https://github.com/marmelab/react-admin/blob/master/examples/demo/src/products/ProductEdit.tsx
*/

const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
)

export default UserEdit;
