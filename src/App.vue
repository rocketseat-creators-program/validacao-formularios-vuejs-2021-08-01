<template>
	<div class="flex justify-center items-center min-h-screen w-full">
		<AppForm />
	</div>
</template>

<script>
import AppForm from './components/Form/Form.vue';

export default {
	name: 'App',
	components: {
		AppForm,
	},
};
</script>
