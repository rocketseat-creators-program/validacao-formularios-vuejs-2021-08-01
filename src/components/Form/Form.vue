<template>
	<div class="flex justify-center items-center">
		<div style="width: 600px">
			<ValidationObserver slim v-slot="{ handleSubmit, reset }">
				<form
					class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
					@submit.prevent="handleSubmit(onSubmit)"
				>
					<div class="flex gap-x-4">
						<FormField
							id="firstName"
							label="First name"
							placeholder="Experts"
							rules="required|min:2|max:10"
							v-model="firstName"
						/>

						<FormField
							id="lastName"
							label="Last name"
							placeholder="Club"
							rules="required|min:2|max:10"
							v-model="lastName"
						/>
					</div>

					<FormField
						id="email"
						type="text"
						label="E-mail"
						placeholder="example@email.com"
						rules="required|email"
						v-model="email"
					/>

					<div class="flex gap-x-4">
						<FormField
							id="password"
							type="password"
							label="Password"
							placeholder="******"
							rules="required|strongPassword|confirmed:passwordConfirmation"
							v-model="password"
						/>

						<FormField
							id="passwordConfirmation"
							type="password"
							label="Confirm password"
							placeholder="******"
							v-model="passwordConfirm"
						/>
					</div>

					<FormField
						id="secretWord"
						label="Say the secret word"
						placeholder="???"
						rules="required|secretWord"
						v-model="secretWord"
					/>

					<div class="flex items-center justify-end gap-x-4">
						<button
							class="
								bg-purple-500
								hover:bg-purple-700
								text-white
								font-bold
								py-2
								px-4
								rounded
								transition-colors
							"
							type="submit"
						>
							Sign Up
						</button>
						<button
							class="
								py-2
								px-4
								rounded
								transition-colors
								border
								hover:border-purple-700 hover:text-purple-700
							"
							type="button"
							@click="clearForm(reset)"
						>
							Clear
						</button>
					</div>
				</form>
			</ValidationObserver>
		</div>
	</div>
</template>

<script>
import FormField from './FormField.vue';

export default {
	name: 'Form',
	components: {
		FormField,
	},
	data() {
		return {
			email: '',
			firstName: '',
			lastName: '',
			password: '',
			passwordConfirm: '',
			secretWord: '',
		};
	},
	methods: {
		clearForm(reset) {
			this.email = '';
			this.firstName = '';
			this.lastName = '';
			this.password = '';
			this.passwordConfirm = '';
			this.secretWord = '';
			reset(); // reset validation states
		},
		onSubmit() {
			console.log({
				email: this.email,
				firstName: this.firstName,
				lastName: this.lastName,
				password: this.password,
				secretWord: this.secretWord,
			});
		},
	},
};
</script>
