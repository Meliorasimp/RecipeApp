import { createRequire } from 'module'; 
const require = createRequire(import.meta.url); 
const babelJest = require('babel-jest').default; 
export default babelJest.createTransformer({ 
    presets: [ [require('@babel/preset-env'), 
        { targets: { node: 'current' } }
    ], 
], 
});