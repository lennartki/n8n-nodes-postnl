import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PostNLApi implements ICredentialType {
	name = 'PostNLApi';
	displayName = 'PostNL APIKeyHeader';
	documentationUrl = 'https://developer.postnl.nl/docs/#/http/getting-started/how-to-get-started/authorization';
	properties: INodeProperties[] = [
		{
			displayName: 'APIKeyHeader',
			name: 'apikey',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			}
		},
		{
			displayName: 'Environment',
			name: 'environment',
			type: 'options',
			options: [
				{
					name: 'Production',
					value: 'https://api.postnl.nl',
				},
				{
					name: 'Sandbox',
					value: 'https://api-sandbox.postnl.nl',
				},
			],
			default: 'https://api-sandbox.postnl.nl',
			required: true,
			description: 'This API has support for multiple environments. Each environment has one or more base URIs defined. Use Production for Production Server and Sandbox for Non-Production Server (Sandbox environment for testing)',
		},
	];

	// This allows the credential to be used by other parts of n8n
	// stating how this credential is injected as part of the request
	// An example is the Http Request node that can make generic calls
	// reusing this credential
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				apikey: '={{$credentials.apikey}}',
			},
		},
	};
}
