import { Notyf } from 'notyf';
const notyf = new Notyf();

export const handleTokenErrors = () => {
	notyf.error('Error while loading data')
};
