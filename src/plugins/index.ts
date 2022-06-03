import type { Plugin } from 'vite';
import { extendOptimizeDeps } from './extendOptimizeDeps';

export default () => {
    return [
        extendOptimizeDeps()
    ] as Plugin[];
};
