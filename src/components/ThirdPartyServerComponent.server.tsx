import React from 'react';
import parse from 'html-react-parser';
import { Head } from '@shopify/hydrogen/client';

export const ThirdPartyServerComponent: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }): JSX.Element => {
    return (
        <>
            <Head>
                <script>console.log('Third party component output');</script>
            </Head>
            {parse('<div>Parsed HTML content<p>More content</p></div>')}
            {children}
        </>
    );
}
