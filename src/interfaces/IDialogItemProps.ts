import { IOptionsDialogProp } from './IOptionsDialogProps';

export interface IDialogItemProps {
	id: number;
	design: 'default' | 'minimal';
	title?: string;
	subtitle?: string;
	options?: IOptionsDialogProp[];
	loading?: boolean;
}
