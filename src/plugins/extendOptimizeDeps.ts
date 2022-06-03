import type { Plugin } from 'vite';

export const extendOptimizeDeps = (): Plugin => ({
    name: 'vite-plugin-okendo-extend-optimize-deps',
    config: () => ({
        optimizeDeps: {
            include: [
                'third-party-component-library > html-react-parser'
            ]
        }
    })
});
