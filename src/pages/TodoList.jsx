import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";


const TodoList = () => {
    const [todos, setTodos] = useState([
        {
           id: 1,
           title: "노마드코더 강의듣기",
           body: "Props&useState 중점적으로 들어봅시다!",
           isDone: true,
         },
         {
           id: 2,
           title: "html&css 작업하기",
           body: "구글홈페이지를 참고해서 css를 연습해보자!",
           isDone: true,
         },
         {
           id: 3,
           title: "기능 구현하기",
           body: "각 컴포넌트의 기능을 구현하고 동작을 실행해보자!",
           isDone: false,
         },
       ] );

       return (
        <Layout>
          <Header />
          <Form setTodos={setTodos} todos={todos} />
          <List todos={todos} setTodos={setTodos} />
        </Layout>
      );
    };
    
    export default TodoList;
    