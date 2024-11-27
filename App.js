import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TaskList from './components/taskList/index.jsx';

export default function App() {
  const tasks = [
    {
      title: 'Casa',
      data: ['Lavar a louça', 'Arrumar a cama', 'Organizar a sala'],
    },
    {
      title: 'Trabalho',
      data: ['Enviar relatório', 'Participar da reunião', 'Revisar código'],
    },
    {
      title: 'Pessoal',
      data: ['Ir à academia', 'Meditar', 'Ler um livro'],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TaskList tasks={tasks} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
