/**
 * Components functions return the svelte component needed when dynamically
 * displaying a component.
 */
import ItemInput from './inputs/itemInput.svelte';
import Password from './password.svelte';

export function getInputComponent(type: string) {
	switch (type) {
		case 'password':
			return ItemInput;
		case 'text':
			return ItemInput;
		case 'date':
			return ItemInput;
	}
}

export function getPasswordComponent(type: string) {
	switch (type) {
		case 'password':
			return Password;
	}
}
