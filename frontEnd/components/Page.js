import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from './Meta';
import styled from 'styled-components';

const StyledPage = styled.div`
    background: white;
    color: black;
`;

// const Inner = styled.div`
    
// `


class Page extends Component {
    render() {
        return (
            <div>
                <StyledPage>
                    <Meta />
                    <Header />
                     {this.props.children}
                </StyledPage>
            </div>
        )
    }
}

export default Page;