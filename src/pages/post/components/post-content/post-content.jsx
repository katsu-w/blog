import styled from 'styled-components';
import { H2 } from '../../../../components/UI/index.js';

const PostContentContainer = ({
	                              className,
	                              post: {
		                              id,
		                              title,
		                              imageUrl,
		                              content,
		                              publishedAt,
	                              },
                              }) => {
	return (
		<div className={className}>
			<img
				src={imageUrl}
				width="400px"
				height="200px"
				loading="lazy"
				alt={title}
			/>
			<H2>{title}</H2>
			<div className="special-panel">{publishedAt}</div>
			<div>{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)``;
