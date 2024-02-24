import styled from "styled-components";

export const List = styled.ul`
border: 1px solid white;
padding: 20px 0;
border-radius: 50px;
list-style: none;
width: 400px;
display: flex;
flex-direction: column;
align-items:center;
`
export const ListItem = styled.li`
padding: 10px 10px;
&:hover{
cursor:pointer;
box-shadow: 1px 1px 5px 1px white;
text-decoration: underline;
}
`
export const Button = styled.button`
margin-left: 20px;
border-style: none;
padding: 5px;
height: 30px;
width: 60px;
border-radius: 20px;
&:hover{
cursor:pointer;
box-shadow: 1px 1px 5px 1px white;
}
`