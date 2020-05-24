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
				text: '按钮类型',
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
				text: '幽灵按钮',
				type: 'boolean'
			},
			{
				field: 'icon',
				text: '按钮icon',
				type: 'string'
			},
			{
				field: 'size',
				text: '按钮尺寸',
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