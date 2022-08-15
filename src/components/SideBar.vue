<template>
	<a-menu-item key="1">
		<file-done-outlined />
		<span>Ventas</span>
	</a-menu-item>
	<a-menu-item key="2">
		<barcode-outlined />
		<span>Categorias</span>
	</a-menu-item>
	<a-menu-item key="3">
		<team-outlined />
		<span>Negocio</span>
	</a-menu-item>
	<a-menu-item key="4">
		<book-outlined />
		<span>Clientes</span>
	</a-menu-item>
	<a-menu-item key="5">
		<database-outlined />
		<span>Proveedores</span>
	</a-menu-item>
	<a-menu-item key="6">
		<bank-outlined />
		<span>Banco</span>
	</a-menu-item>
	<a-sub-menu key="7">
		<template #title>
			<span>
				<shop-outlined />
				<span>Productos</span>
			</span>
		</template>
		<a-menu-item>
			<router-link :to="{ name: 'all-products' }">
				Todos los productos
			</router-link>
		</a-menu-item>
	</a-sub-menu>
</template>

<script lang="ts" setup>
	import {
		ShopOutlined,
		FileDoneOutlined,
		BankOutlined,
		BookOutlined,
		BarcodeOutlined,
		DatabaseOutlined,
		TeamOutlined,
	} from '@ant-design/icons-vue';
</script>
