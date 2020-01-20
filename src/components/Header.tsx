import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    box-shadow: 0 3px 6px rgba(0,0,0,0.16),
                0 3px 6px rgba(0,0,0,0.23);
    padding: 10px;
    grid-area: header;
`;

const StyledHeading = styled.span`
    text-transform: uppercase;
    color: #7d7d7d;
`;

export const Header: React.FC = () => {
    return <StyledHeader id="header">
        <StyledHeading>The Binding of Isaac map generator</StyledHeading>
    </StyledHeader>;
};
