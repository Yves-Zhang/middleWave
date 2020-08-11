
const url = "https://qzonestyle.gtimg.cn/qzone/qzact/act/external/weishi/ugactivity/flag38_internal.jpg?wst=6615"

export class Props {
	constructor() {
		this.key = 'aux-page';
		this.name = '页面';
		this.conf = [
			{
				field: 'bgImage',
				text: '背景图',
				type: 'string'
			},
			{
				field: 'text',
				text: '文字',
				type: 'string'
			}
		];

		this.text= "hello world"
		this.bgImage = url
	}
}