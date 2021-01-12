import { ReactElement, ReactNode } from 'react'

type Props<T extends string> = {
    value: T;
    isDefault?: boolean;
    children?: ReactNode;
}

function PropertyValue<T extends string>({
    value,
    isDefault,
    children,
}: Readonly<Props<T>>): ReactElement {
    return (
        <section>
            <header><h1 id={value}>{`${value}${isDefault ? '(默认值)' : ''}`}</h1></header>
            {children}
        </section>
    )
}

export default PropertyValue