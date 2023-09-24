import { overrideTranslations } from '../overrider.js';

import { blocks as baseBlocks } from './blocks.js';
export const blocks = overrideTranslations(baseBlocks, {
    selectedplaces: "Selected offices"
})

export * from './config.js';

import { content as baseContent } from './content.js';
export const content = overrideTranslations(baseContent, {
    places: {
        label: "Offices",
        label_singular: "Office",
        description: "All offices"
    }
})

import {fields as baseFields} from './fields.js';
export const fields = overrideTranslations(baseFields, {
    places_items: "Cabinets",
    place: "Office",
    persons_expertises: "Expert in?",
    persons_places: "Attached to one or more offices?",
    persons_statutes: "Status"
})

export * from './shortcodes.js';