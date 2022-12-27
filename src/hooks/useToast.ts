import { useState } from 'react';
import { IToastItemProps } from '../interfaces/IToastItemProps';

interface IuseToastReturn {
	toastList: IToastItemProps[];
	setToastList: (toastList: IToastItemProps[]) => void;
	toast: (
		title: string,
		subtitle: string,
		type?: 'success' | 'info' | 'danger' | 'warning',
	) => void;
}

function useToast(): IuseToastReturn {
	const [toastList, setToastList] = useState<IToastItemProps[]>([]);

	const toast = (
		title: string,
		subtitle: string,
		type?: 'success' | 'info' | 'danger' | 'warning',
	) => {
		setToastList([
			...toastList,
			{
				id: toastList.length + 1,
				title: title,
				subtitle: subtitle,
				type: !type ? 'success' : type,
			},
		]);
	};

	return { toast, toastList, setToastList };
}

export default useToast;
