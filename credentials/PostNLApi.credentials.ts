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
