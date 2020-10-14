import React from 'react';
import { Box, Chip, useMediaQuery, Theme, makeStyles } from '@material-ui/core';
import {
	Filter,
	EmailField,
	SearchInput,
	TextField,
	Datagrid,
	List,
} from 'react-admin';

const useQuickFilterStyles = makeStyles(theme => ({
	root: {
    marginBottom: theme.spacing(3),
	},
}));

const QuickFilter = ({ label }) => {
	const classes = useQuickFilterStyles();
	return <Chip className={classes.root} label={label} />;
};

export const UserFilter = props => (
	<Filter {...props}>
		<SearchInput source='q' alwaysOn />
		<QuickFilter source='name' label='Name' defaultValue={true} />
		<QuickFilter source='email' label='Email' defaultValue={150} />
		<QuickFilter source='tags' label='Tagged Code' defaultValue={[3]} />
	</Filter>
);

const UserList = props => {
	return (
		<List {...props} filters={<UserFilter />}>
			<Datagrid rowClick='edit'>
				<TextField source='id' />
				<TextField source='name' />
				<EmailField source='email' />
				<TextField source='phone' />
			</Datagrid>
		</List>
	);
};

export default UserList;
