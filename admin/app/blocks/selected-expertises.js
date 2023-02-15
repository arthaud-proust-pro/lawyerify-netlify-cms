import { title } from '../fields/title.js'
import { expertises } from '../fields/expertises.js'
import { show_more } from '../fields/show-more.js'
import { background } from '../fields/background.js'

export const block_selectedexpertises = {
    name: 'selected-expertises',
    label: 'Selection d’expertises',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        title,
        { name: 'section', default: 'expertises', widget: 'hidden' },
        expertises,
        show_more,
        background
    ]
}