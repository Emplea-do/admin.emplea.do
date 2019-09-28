import * as emotion from 'emotion'
import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots'
import { createSerializer } from 'jest-emotion'

import { renderWithApp } from './utils/tests'

initStoryshots({
  suite: '[MOBBY StoryBook]: ',
  snapshotSerializers: [createSerializer(emotion)],
  test: multiSnapshotWithOptions({}),
  renderer: component => renderWithApp(component).container,
})
