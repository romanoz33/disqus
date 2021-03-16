import React, { useMemo } from 'react';
import { Box } from '@quarkly/widgets';
import { DiscussionEmbed, CommentEmbed } from 'disqus-react';

const Disqus = ({
	typeCommentProp,
	shortnameProp,
	languageProp,
	identifierProp,
	urlProp,
	titleProp,
	commentIDProp,
	showParrent,
	widthProp,
	heightProp,
	...props
}) => {
	const isStandartType = useMemo(() => {
		if (typeCommentProp === 'Some comment') return;
		return true;
	}, [typeCommentProp]);
	const commentsParams = useMemo(() => {
		return {
			id: identifierProp,
			url: urlProp,
			title: titleProp,
			language: languageProp
		};
	}, [identifierProp, urlProp, titleProp, languageProp]);
	return <Box {...props}>
		{isStandartType ? <DiscussionEmbed shortname={shortnameProp} config={commentsParams} /> : <CommentEmbed commentId={commentIDProp} showParentComment={showParrent} width={widthProp} height={heightProp} />}
	</Box>;
};

const propInfo = {
	typeCommentProp: {
		title: 'Тип виджета',
		description: {
			en: 'Тип виджета'
		},
		control: 'radio-group',
		variants: ['Standart', 'Some comment'],
		category: 'Main',
		weight: 1
	},
	shortnameProp: {
		title: 'Shortname',
		description: {
			en: 'Имя вашей ленты. Узнать можно здесь: https://disqus.com/admin/settings/general/'
		},
		control: 'input',
		category: 'Main',
		weight: .5
	},
	languageProp: {
		title: 'Language',
		description: {
			en: 'Выберите язык'
		},
		control: 'select',
		variants: ['ru', 'en', 'zh', 'fr', 'de'],
		category: 'Main',
		weight: .5
	},
	identifierProp: {
		title: 'Идентификатор текущей страницы',
		description: {
			en: 'Уникальный идентификатор страницы'
		},
		control: 'input',
		category: 'Standart props',
		weight: 1
	},
	urlProp: {
		title: 'URL-адрес текущей страницы',
		description: {
			en: 'URL-адрес текущей страницы'
		},
		control: 'input',
		category: 'Standart props',
		weight: 1
	},
	titleProp: {
		title: 'Заголовок текущей страницы',
		description: {
			en: 'Заголовок текущей страницы. Создается при первом использовании.'
		},
		control: 'input',
		category: 'Standart props',
		weight: 1
	},
	commentIDProp: {
		title: 'ID Комментария',
		description: {
			en: 'ID Комментария'
		},
		control: 'input',
		category: 'Some comment props',
		weight: .5
	},
	showParrent: {
		title: 'Show Parrent Comment',
		description: {
			en: 'Show Parrent Comment'
		},
		control: 'checkbox',
		category: 'Some comment props',
		weight: .5
	},
	widthProp: {
		title: 'Ширина блока',
		description: {
			en: 'Ширина блока'
		},
		control: 'input',
		category: 'Some comment props',
		weight: .5
	},
	heightProp: {
		title: 'Высота блока',
		description: {
			en: 'Высота блока'
		},
		control: 'input',
		category: 'Some comment props',
		weight: .5
	}
};
const defaultProps = {
	typeCommentProp: 'Standart',
	shortnameProp: 'my-test-project',
	languageProp: 'ru',
	commentIDProp: '5306141969',
	showParrent: false,
	widthProp: '100%',
	heightProp: '200px'
};
Object.assign(Disqus, {
	propInfo,
	defaultProps
});
export default Disqus;