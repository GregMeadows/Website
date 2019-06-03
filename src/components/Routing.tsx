import { useContext } from 'react';
import { RouteComponentProps, __RouterContext } from 'react-router';

// Based on:
// https://github.com/ReactTraining/react-router/pull/6453#issuecomment-474600561
// Using method:
// https://github.com/ReactTraining/react-router/issues/6430#issuecomment-497948830

export const useLocation = () => {
    const context = useContext(__RouterContext);
    return context.location;
};

export function useMatch<P = {}>() {
    const context = useContext(__RouterContext) as RouteComponentProps<P>;
    return context.match;
}