import {INodeType, INodeTypeDescription} from 'n8n-workflow';
import {N8NPropertiesBuilder, N8NPropertiesBuilderConfig} from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json';

const config: N8NPropertiesBuilderConfig = {}
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build()

export class PostNL implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'PostNL',
        name: 'postnl',
        icon: 'file:logo.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with PostNL API',
        defaults: {
            name: 'PostNL',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'PostNLApi',
                required: true,
            },
        ],
        requestDefaults: {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            baseURL: 'https://api.postnl.nl',
        },
        properties: properties,
    };
}
