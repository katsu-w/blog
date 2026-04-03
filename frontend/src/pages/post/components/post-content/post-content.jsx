import styled from 'styled-components';
import { H2 } from '../../../../components/UI/index.js';
import { Icon } from '../../../../components/index.js';
import { SpecialPanel } from '../special-panel/special-panel.jsx';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PROP_TYPE } from '../../../../constants/index.js';

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
	const navigate = useNavigate();
	return (
		<div className={className}>
			<img
				src={imageUrl}
				width="350px"
				height="200px"
				loading="lazy"
				alt={title}
			/>
			<H2>{title}</H2>
			<SpecialPanel
				postId={id}
				publishedAt={publishedAt}
				margin="-20px 0 20px"
				editButton={<Icon
					name="pencil-square-o"
					margin="0"
					size="23px"
					onClick={() => navigate(`/post/${id}/edit/`)}
				/>}
			/>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}
	
	.post-text {
		white-space: pre-line;
	}
`;

PostContent.propTypes = {
	post: PROP_TYPE.POST.isRequired,
};
