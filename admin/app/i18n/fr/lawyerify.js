import { overrideTranslations } from '../overrider.js';

import { blocks as baseBlocks } from './blocks.js';
export const blocks = overrideTranslations(baseBlocks, {
    selectedplaces: "Sélection de cabinets"
})

export * from './config.js';

import { content as baseContent } from './content.js';
export const content = overrideTranslations(baseContent, {
    places: {
        label: "Cabinets",
        label_singular: "Cabinet",
        description: "Tous les cabinets"
    }
})

import { fields as baseFields} from './fields.js';
export const fields = overrideTranslations(baseFields, {
    places_items: "Cabinets",
    place: "Cabinet",
    persons_expertises: "Expert en ?",
    persons_places: "Rattaché à un ou plusieurs cabinets ?",
    persons_statutes: "Satuts"
})

export * from './shortcodes.js';