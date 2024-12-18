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

  let i = 0;

  /* Backlog filter */
  const filterBacklog = () => {
    const filterBacklog = tasks.filter((item) => item.state === "backlog");
    return filterBacklog;
  };

  /* In progress filter */
  const filterInProgress = () => {
    const filterInProgress = tasks.filter(
      (item) => item.state === "in_progress"
    );
    return filterInProgress;
  };

  const stateBacklog = filterBacklog();
  const stateInProgress = filterInProgress();

  /* Backlog map */
  const backlogMap = () => {
    return stateBacklog.map((item) => (
      <li style={{ listStyle: "none" }} key={item.id}>
        <div style={{ display: "block", marginTop: "10px" }}>
          <strong>{item.title}</strong>
          <div
            style={{
              margin: "5px",
              display: "inline-block",
              backgroundColor: "brown",
              padding: "5px",
              color: "white",
            }}
          >
            {item.state}
          </div>
        </div>
        <div style={{ display: "block" }}>{`Priority: ${item.priority}`}</div>
        {`Est.time: ${item.estimatedTime}`}
      </li>
    ));
  };
  /* In progress map */
  const inProgressMap = () => {
    return stateInProgress.map((item) => (
      <li style={{ listStyle: "none" }} key={item.id}>
        <div
          style={{
            display: "block",
            marginTop: "10px",
          }}
        >
          <strong>{item.title}</strong>
          <div
            style={{
              margin: "5px",
              display: "inline-block",
              backgroundColor: "brown",
              padding: "5px",
              color: "white",
            }}
          >
            {item.state}
          </div>
        </div>
        <div
          style={{ display: "block", marginBottom: "5px" }}
        >{`Priority: ${item.priority}`}</div>
        {`Est.time : ${item.estimatedTime}`}
      </li>
    ));
  };

  /* Completed filter */
  const filterCompleted = () => {
    const filterCompleted = tasks.filter((item) => item.state === "completed");
    return filterCompleted;
  };

  const stateCompleted = filterCompleted();

  /* Completed map */
  const completedMap = () => {
    return stateCompleted.map((item) => (
      <li style={{ listStyle: "none" }} key={item.id}>
        <div style={{ marginTop: "10px" }}>
          <strong>{item.title}</strong>
          <div
            style={{
              margin: "5px",
              display: "inline-block",
              backgroundColor: "brown",
              padding: "5px",
              color: "white",
            }}
          >
            {item.state}
          </div>
        </div>
        <div style={{ display: "block" }}>{`Priority: ${item.priority}`}</div>
        {`Est.time: ${item.estimatedTime}`}
      </li>
    ));
  };

  return (
    <>
      <div style={{ backgroundColor: "cyan" }}>
        <h1>Task Manager</h1>
      </div>
      <h2>Current Tasks (4)</h2>
      <ul>
        {backlogMap()}
        {inProgressMap()}
      </ul>

      <hr />
      <h2>Completed Tasks (6)</h2>
      <ul>{completedMap()}</ul>
    </>
  );
}

export default App;
