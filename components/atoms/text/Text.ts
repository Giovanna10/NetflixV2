import styled from 'styled-components'

interface TextProps {
    organismTitle?: boolean;
    molecolTitle?: boolean;
    paragraph?: boolean; 
    color?: string;
    weight?: number | string;
}

export const Text = styled.p<TextProps>`
    font-size: ${props => props.organismTitle ? '2em' : props.molecolTitle ? '1.4em' : '1em' };
    color: ${props => props.color};
    font-weight: ${props => props.organismTitle ? 400 : props.molecolTitle ? 200 : 0 }
`
