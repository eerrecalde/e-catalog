import { configure } from '@storybook/react';
import '../src/index.scss';

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.(js|jsx)$/), module);
