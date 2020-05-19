import * as React from 'react';
import * as ReactIs from 'react-is';
import styled from 'styled-components';

const Container = styled.div
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;

const SidebarContainer = styled.div
  

export function Layout () {
  return (
    <Container>
    <div>sidebar</div>
    <div>message box</div>     
    
    </Container>
  )
}