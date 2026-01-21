import { Error } from '../error/error.jsx';

export const Content = ({ children, error }) =>
	error ? <Error error={error} /> : children;
