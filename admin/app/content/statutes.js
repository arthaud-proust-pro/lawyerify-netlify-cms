import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'

const statutes = {
    name: 'statutes',
    label: 'Statutes',
    label_singular: 'Status',
    folder: 'content/statutes',
    create: true,
    description: 'Tous les statuts',

    editor: { preview: false },
    // #i18n: true,

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },
    summary: '{{title}}',

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    fields: [
        isNotIndex,
        draft,
        title
    ]
}

export default statutes