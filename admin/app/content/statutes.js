import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'

const statutes = {
    name: 'statutes',
    label: 'Statuts',
    label_singular: 'Statut',
    folder: 'content/statutes',
    create: true,
    description: 'Tous les statuts',

    editor: { preview: false },
    // #i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',
    summary: '{{title}}',

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        draft,
        title
    ]
}

export default statutes