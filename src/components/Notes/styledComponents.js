import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 1200px;
  }
`

export const Heading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 25px;
  line-height: 1.5;
  text-align: center;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  margin-top: 35px;
  padding: 20px;
  box-shadow: 0px 4px 14px #aab8c8;
  @media screen and (min-width: 768px) {
    margin-top: 65px;
    padding: 25px;
  }
`

export const TitleInput = styled.input`
  color: #475569;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  border: none;
  outline: none;
  line-height: 1.5;
`

export const NoteTextArea = styled.textarea`
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  border: none;
  outline: none;
  line-height: 1.5;
  margin-top: 35px;
`

export const AddButton = styled.button`
  color: #ffffff;
  background-color: #4c63b6;
  font-size: 16px;
  line-height: 1.3;
  font-family: 'Roboto';
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 14px;
  padding: 14px 25px;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  @media screen and (min-width: 768px) {
    margin-right: 25px;
  }
`

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

export const EmptyImg = styled.img`
  width: 80px;
  @media screen and (min-width: 768px) {
    width: 140px;
  }
`

export const EmptyHead = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-top: 25px;
  margin-bottom: 5px;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const EmptyDes = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  line-height: 1.5;
  margin: 0;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const NotesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  padding-left: 0;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    margin-top: 35px;
  }
`
