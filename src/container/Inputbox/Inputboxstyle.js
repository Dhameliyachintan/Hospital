import { Input, FormFeedback } from 'reactstrap';
import styled from 'styled-components';


export const InputBoxStyle = styled(Input)`
`;

export const FormfeedStyle = styled(FormFeedback)`

display :${props => props.error ? "block" : "none"}

`;


