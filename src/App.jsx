//! Esercizio
/* Mostriamo in due liste diverse gli elementi dell’array tasks. 

Nella prima lista mostriamo solo i task (title, priority e estimatedTime) che hanno stato “backlog” o “in_progress”. 

Nella seconda lista mostriamo i task che hanno stato “completed”. 

Infine riprodurre il layout lasciato in allegato.

BONUS
Mostrare lo stato di ogni task in un piccolo tag di fianco al titolo, associando però ad ogni stato un colore diverso. */

import { useState } from "react";

import "./App.css";

function App() {
  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed",
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed",
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed",
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed",
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog",
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress",
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog",
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress",
    },
  ];

  /* Backlog filter */
  const filterBacklog = () => {
    const filteredBacklog = tasks.filter((item) => item.state === "backlog");
    return filteredBacklog;
  };

  /* In progress filter */
  const filterInProgress = () => {
    const filteredInProgress = tasks.filter(
      (item) => item.state === "in_progress"
    );
    return filteredInProgress;
  };

  const stateBacklog = filterBacklog(tasks);
  const stateInProgress = filterInProgress(tasks);

  /* Backlog map */
  const backlogMap = () => {
    const backlogStatus = stateBacklog.map((item) => item);
    return backlogStatus;
  };

  /* In progress map */
  const inProgressMap = () => {
    const inProgressStatus = stateInProgress.map((item) => item);
    return inProgressStatus;
  };

  const backlogItem = backlogMap(tasks);
  const inProgressItem = inProgressMap(tasks);
  console.log(backlogItem);
  console.log(inProgressItem);
  return (
    <>
      <h1>Task Manager</h1>
      <h2>Current Tasks (4)</h2>
      {backlogItem}
      {inProgressItem}
      <hr />
      <h2>Completed Tasks (6)</h2>
    </>
  );
}

export default App;
