export class Props {
	constructor() {
		this.key = 'gaea-button';
		this.name = 'Button';
		this.conf = [
			{
				field: 'text',
				text: '按钮文本',
				type: 'string'
			},
			{
				field: 'type',
				text: 'text',
				type: 'select',
				data: [
					{
						text: 'primary',
						value: 'primary'
					},
					{
						text: 'ghost',
						value: 'ghost'
					},
					{
						text: 'dashed',
						value: 'dashed'
					},
					{
						text: 'danger',
						value: 'danger'
					}
				]
			},
			{
				field: 'ghost',
				text: 'text',
				type: 'boolean'
			},
			{
				field: 'icon',
				text: 'text',
				type: 'string'
			},
			{
				field: 'loading',
				text: 'text',
				type: 'boolean'
			},
			{
				field: 'size',
				text: 'text',
				type: 'select',
				data: [
					{
						value: null,
						text: 'Default'
					},
					{
						value: 'small',
						text: 'Small'
					},
					{
						value: 'large',
						text: 'Large'
					}
				]
			}
		];

		this.style = {};
		this.text = 'Button Text';
		this.type = null;
		this.ghost = false;
		this.icon = '';
		this.loading = false;
		this.size = null;
		this.onClick = () => {};
	}
}