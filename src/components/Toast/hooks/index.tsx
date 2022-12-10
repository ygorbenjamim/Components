import { useState } from 'react';
import { IToastItemProps } from '..';

interface IuseToastReturn {
    toastList: IToastItemProps[];
    setToastList: (toastList: IToastItemProps[]) => void;
    toast: (title: string, subtitle: string, type?: string) => void;
}

function useToast(): IuseToastReturn {
    const [toastList, setToastList] = useState<IToastItemProps[]>([]);

    const toast = (title: string, subtitle: string, type?: string) => {
        setToastList([...toastList, {
            id: toastList.length + 1,
            title: title,
            subtitle: subtitle,
            type: !type ? 'success' : type
        }]);
    }

    return { toast, toastList, setToastList };
}

export default useToast;