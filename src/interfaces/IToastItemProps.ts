import { ITypeOfToast } from './ITypeOfToast';

export interface IToastItemProps extends ITypeOfToast {
	id: number;
	title?: string;
	subtitle: string;
}
