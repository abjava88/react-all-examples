import React, { useEffect, useState } from "react";

const PaginationExample = () => {
  // Données à paginer
  const [data, setData] = useState([]);

  // État pour suivre la page actuelle
  const [currentPage, setCurrentPage] = useState(1);

  // Fonction pour charger les données paginées
  const loadData = (page) => {
    // Simuler une requête à une API pour obtenir les données de la page spécifiée
    const newData = Array.from(
      { length: 10 },
      (_, index) => (page - 1) * 10 + index + 1
    );
    // Mettre à jour les données avec les nouvelles données chargées
    setData(newData);
  };

  // Fonction pour passer à la page suivante
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    loadData(currentPage + 1);
  };

  // Fonction pour passer à la page précédente
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    loadData(currentPage - 1);
  };

  useEffect(() => {
    loadData(currentPage);
  }, []);

  return (
    <div>
      <h2>Liste de données paginée</h2>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Page précédente
      </button>
      <button onClick={nextPage} disabled={currentPage === 5}>Page suivante</button>
      <p>Page {currentPage}</p>
    </div>
  );
};

export default PaginationExample;
