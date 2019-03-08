/**
 * BLOCK: Kadence Row Attributes
 */
const attributes = {
	uniqueID: {
		type: 'string',
		default: '',
	},
	columns: {
		type: 'number',
		default: 2,
	},
	mobileLayout: {
		type: 'string',
		default: 'row',
	},
	tabletLayout: {
		type: 'string',
		default: 'inherit',
	},
	collapseOrder: {
		type: 'string',
		default: 'left-to-right',
	},
	collapseGutter: {
		type: 'string',
		default: 'default',
	},
	columnGutter: {
		type: 'string',
		default: 'default',
	},
	colLayout: {
		type: 'string',
		default: '',
	},
	currentTab: {
		type: 'string',
		default: 'desk',
	},
	currentOverlayTab: {
		type: 'string',
		default: 'normal',
	},
	htmlTag: {
		type: 'string',
		default: 'div',
	},
	minHeight: {
		type: 'number',
		default: 0,
	},
	maxWidth: {
		type: 'number',
		default: '',
	},
	topPadding: {
		type: 'number',
		default: 25,
	},
	bottomPadding: {
		type: 'number',
		default: 25,
	},
	leftPadding: {
		type: 'number',
		default: '',
	},
	rightPadding: {
		type: 'number',
		default: '',
	},
	topPaddingM: {
		type: 'number',
		default: '',
	},
	bottomPaddingM: {
		type: 'number',
		default: '',
	},
	leftPaddingM: {
		type: 'number',
		default: '',
	},
	rightPaddingM: {
		type: 'number',
		default: '',
	},
	topMargin: {
		type: 'number',
		default: '',
	},
	bottomMargin: {
		type: 'number',
		default: '',
	},
	topMarginM: {
		type: 'number',
		default: '',
	},
	bottomMarginM: {
		type: 'number',
		default: '',
	},
	bgColor: {
		type: 'string',
		default: '',
	},
	bgImg: {
		type: 'string',
		default: '',
	},
	bgImgID: {
		type: 'string',
		default: '',
	},
	bgImgSize: {
		type: 'string',
		default: 'cover',
	},
	bgImgPosition: {
		type: 'string',
		default: 'center center',
	},
	bgImgAttachment: {
		type: 'string',
		default: 'scroll',
	},
	bgImgRepeat: {
		type: 'string',
		default: 'no-repeat',
	},
	overlay: {
		type: 'string',
		default: '',
	},
	overlaySecond: {
		type: 'string',
		default: '#00B5E2',
	},
	overlayGradLoc: {
		type: 'number',
		default: 0,
	},
	overlayGradLocSecond: {
		type: 'number',
		default: 100,
	},
	overlayGradType: {
		type: 'string',
		default: 'linear',
	},
	overlayGradAngle: {
		type: 'number',
		default: 180,
	},
	overlayBgImg: {
		type: 'string',
		default: '',
	},
	overlayBgImgID: {
		type: 'string',
		default: '',
	},
	overlayBgImgSize: {
		type: 'string',
		default: 'cover',
	},
	overlayBgImgPosition: {
		type: 'string',
		default: 'center center',
	},
	overlayBgImgAttachment: {
		type: 'string',
		default: 'scroll',
	},
	overlayBgImgRepeat: {
		type: 'string',
		default: 'no-repeat',
	},
	overlayOpacity: {
		type: 'number',
		default: 30,
	},
	overlayBlendMode: {
		type: 'string',
		default: 'none',
	},
	blockAlignment: {
		type: 'string',
		default: 'none',
	},
	verticalAlignment: {
		type: 'string',
		default: 'top',
	},
	topSep: {
		type: 'string',
		default: 'none',
	},
	topSepColor: {
		type: 'string',
		default: '#ffffff',
	},
	topSepFlip: {
		type: 'boolean',
		default: false,
	},
	topSepHeight: {
		type: 'number',
		default: 100,
	},
	topSepHeightTab: {
		type: 'number',
		default: '',
	},
	topSepHeightMobile: {
		type: 'number',
		default: '',
	},
	bottomSep: {
		type: 'string',
		default: 'none',
	},
	bottomSepColor: {
		type: 'string',
		default: '#ffffff',
	},
	bottomSepFlip: {
		type: 'boolean',
		default: false,
	},
	bottomSepHeight: {
		type: 'number',
		default: 100,
	},
	bottomSepWidth: {
		type: 'number',
		default: 100,
	},
	bottomSepWidthTab: {
		type: 'number',
		default: '',
	},
	bottomSepWidthMobile: {
		type: 'number',
		default: '',
	},
	bottomSepHeightTab: {
		type: 'number',
		default: '',
	},
	bottomSepHeightMobile: {
		type: 'number',
		default: '',
	},
	firstColumnWidth: {
		type: 'number',
	},
	secondColumnWidth: {
		type: 'number',
	},
	textColor: {
		type: 'string',
		default: '',
	},
	linkColor: {
		type: 'string',
		default: '',
	},
	linkHoverColor: {
		type: 'string',
		default: '',
	},
	tabletPadding: {
		type: 'array',
		default: [ '', '', '', '' ],
	},
	topMarginT: {
		type: 'number',
		default: '',
	},
	bottomMarginT: {
		type: 'number',
		default: '',
	},
	marginUnit: {
		type: 'string',
		default: 'px',
	},
	minHeightUnit: {
		type: 'string',
		default: 'px',
	},
	maxWidthUnit: {
		type: 'string',
		default: 'px',
	},
};
export default attributes;
