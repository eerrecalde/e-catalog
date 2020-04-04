import { configure } from '@storybook/react';
import 'bootstrap/scss/bootstrap.scss';
import '../src/components/index.scss';

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.(js|jsx)$/), module);
