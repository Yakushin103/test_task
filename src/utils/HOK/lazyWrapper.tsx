import { memo, Suspense } from "react";

export default function lazyWrapper(Component: any) {
    function Wrapped(props: any) {
        return (
            <Suspense fallback={<span>Загрузка...</span>}>
                <Component {...props} />
            </Suspense>
        );
    }
    return memo(Wrapped);
}
