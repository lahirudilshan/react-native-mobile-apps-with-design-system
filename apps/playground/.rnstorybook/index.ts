import AsyncStorage from '@react-native-async-storage/async-storage';
import { view } from './storybook.requires';

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

export default StorybookUIRoot;

// create this object for reuse in web and native
export const STORIES_LIVING_AREAS = {
  stories: [
    // All stories in any app
    '../../../apps/**/*.stories.?(ts|tsx|js|jsx)', 
    // All stories in any package
    '../../../packages/**/src/**/*.stories.?(ts|tsx)',
  ],
}