import React from 'react';
import { Head } from '@shopify/hydrogen/client';

export const ThirdPartyServerComponent: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }): JSX.Element => {
    return (
        <>
            <Head>
                <script>console.log('Third party component output');</script>
            </Head>
            {children}
        </>
    );
}
