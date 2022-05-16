import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  margin-bottom: 18px;
  padding: 25px 18px;
  @media screen and (min-width: 768px) {
    width: 30%;
    min-width: 250px;
    margin: 0px 8px 24px 8px;
  }
`

export const Title = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
`

export const Note = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 15px;
  line-height: 25px;
  margin: 0;
  margin-top: 25px;
`
