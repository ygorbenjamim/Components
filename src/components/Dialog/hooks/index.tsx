import { useState } from 'react';
import { IOptionsProp, IDialogItemProps } from '..';

interface IuseDialogReturn {
    dialogList: IDialogItemProps[];
    setDialogList: (listDialog: IDialogItemProps[]) => void;
    dialog: (title: string, subtitle: string, options?: IOptionsProp[], design?: string, loading?: boolean) => void;
}

function useDialog(): IuseDialogReturn {
    const [dialogList, setDialogList] = useState<IDialogItemProps[]>([]);

    const dialog = (title: string, subtitle: string, options?: IOptionsProp[], design?: string, loading?: boolean) => {
        setDialogList([...dialogList, {
            id: dialogList.length + 1,
            title: title,
            subtitle: subtitle,
            options: options,
            loading: loading,
            design: !design ? 'default' : design
        }]);
    }

    return { dialog, dialogList, setDialogList };
}

export default useDialog;
