
const url = require('./bg.png')

export class Props {
	constructor() {
		this.key = 'gaea-page';
		this.name = '页面';
		this.conf = [
			{
				field: 'bgImage',
				text: '背景图',
				type: 'string'
			}
		];

		this.bgImage = url
	}
}