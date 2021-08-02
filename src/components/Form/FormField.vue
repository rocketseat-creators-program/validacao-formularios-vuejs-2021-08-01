<template>
	<ValidationProvider
		slim
		:vid="id"
		:name="label"
		:rules="rules"
		v-slot="{ errors }"
	>
		<label
			:for="id"
			class="flex flex-col w-full text-base font-bold mb-6 text-gray-800"
		>
			{{ label }}

			<input
				:id="id"
				:type="type"
				:placeholder="placeholder"
				:class="{ 'border-red-500': errors.length }"
				class="shadow mt-1 px-3 py-2 rounded border"
				v-model="innerValue"
			/>
			<span v-if="errors.length" class="text-xs font-normal text-red-500">
				{{ errors[0] }}
			</span>
		</label>
	</ValidationProvider>
</template>

<script>
export default {
	name: 'FormField',
	props: {
		label: String,
		id: String,
		type: String,
		placeholder: String,
		rules: String,
		value: String,
	},
	data() {
		return {
			innerValue: '',
		};
	},
	watch: {
		// Enables parent v-model
		innerValue(newValue) {
			this.$emit('input', newValue);
		},
		// Handles parent v-model changes
		value(newValue) {
			this.innerValue = newValue;
		},
	},
};
</script>
