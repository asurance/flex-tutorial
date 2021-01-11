import { ReactElement, ReactNode, useCallback } from 'react'

type Props<T> = {
    value: T;
    isDefault?: boolean;
    children?: ReactNode;
    onTakeEffect(value: T): void;
}

function PropertyValue<T>({
    value,
    isDefault,
    children,
    onTakeEffect: takeEffect,
}: Readonly<Props<T>>): ReactElement {
    const onEffectClick = useCallback(() => {
        takeEffect(value)
    }, [value, takeEffect])
    return (
        <section>
            <header><h1>{`${value}${isDefault ? '(默认值)' : ''}`}</h1></header>
            <button onClick={onEffectClick}>生效</button>
            {children}
        </section>
    )
}

export default PropertyValue