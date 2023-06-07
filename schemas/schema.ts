import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import readingList from './readingList'
import toReadList from './toReadList'
import shoppingList from './shoppingList'
import musicList from './musicList'
import photos from './photos'
import project from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [readingList, toReadList, shoppingList, musicList, photos, project, blockContent],
}
