interface IMenuItem {
	icon: string;
	text: string;
	path?: string;
	name: string;
	itemsChildren?: IMenuItem[];
}

export const menuItems: IMenuItem[] = [
	{
		icon: 'PieChartOutlined',
		text: 'Productos',
		name: 'all-products',
	},
	{
		icon: 'DesktopOutlined',
		text: 'Categorías',
		name: 'all-products',
	},
	{
		icon: 'UserOutlined',
		text: 'Clientes',
		name: 'all-products',
	},
	{
		icon: 'TeamOutlined',
		text: 'Proveedores',
		name: 'all-products',
	},
	{
		icon: 'FileOutlined',
		text: 'Negocio',
		name: 'all-products',
	},
];
