<template>
	<label
		:for="id"
		class="flex flex-col w-full text-base font-bold mb-6 text-gray-800"
	>
		{{ label }}

		<input
			:id="id"
			:type="type"
			:placeholder="placeholder"
			:value="value"
			@change="$emit('input', $event)"
			class="shadow mt-1 px-3 py-2 rounded border"
			:class="{ 'border-red-500': hasError }"
		/>
		<span v-if="hasError" class="text-xs font-normal text-red-500">Error</span>
	</label>
</template>

<script>
export default {
	name: 'FormField',
	props: {
		label: String,
		id: String,
		type: String,
		placeholder: String,
	},
	data() {
		return {
			value: '',
			hasError: false,
		};
	},
};
</script>
