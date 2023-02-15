import { title } from '../fields/title.js'
import { offices } from '../fields/offices.js'
import { show_more } from '../fields/show-more.js'
import { background } from '../fields/background.js'

export const block_selectedoffices = {
    name: 'selected-offices',
    label: 'Selection de cabinets',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        title,
        { name: 'section', default: 'offices', widget: 'hidden' },
        offices,
        show_more,
        background
    ]
}