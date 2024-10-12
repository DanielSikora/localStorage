// Importowanie funkcji z biblioteki React
import { useState, useEffect } from "react";
// Importowanie logo Reacta i Vite
// Importowanie stylów CSS dla aplikacji
import "./App.css";

function App() {
  // Użycie hooka useState do zarządzania stanem pola tekstowego 'name'
  const [text, setText] = useState("");

  // useEffect jest używany do wykonania kodu po zamontowaniu komponentu
  // W tym przypadku ładowanie wartości 'name' z localStorage po odświeżeniu lub pierwszym uruchomieniu aplikacji
  useEffect(() => {
    const storedText = localStorage.getItem("name");
    if (storedText) {
      setText(storedText); // Ustawienie wartości w stanie, jeśli istnieje zapisany element w localStorage
    }
  }, []); // Pusta tablica oznacza, że kod uruchomi się tylko raz po załadowaniu komponentu

  // Funkcja, która zapisuje wartość w localStorage po kliknięciu przycisku
  const handleSave = () => {
    localStorage.setItem("text", text); // Zapisuje aktualną wartość 'text' w localStorage
  };

  return (
    <div>
      {/* Wyświetlanie tekstu 'name', a jeśli jest pusty, wyświetli tekst domyślny "Sentencja" */}
      <h1>{text || "Sentencja"}</h1>

      {/* Pole tekstowe, które pozwala użytkownikowi wpisać sentencję */}
      <input
        type="text"
        value={text} // Wartość pola tekstowego jest powiązana ze stanem 'name'
        onChange={(e) => setText(e.target.value)} // Aktualizowanie stanu 'name' przy każdej zmianie wartości w polu tekstowym
        placeholder="Podaj sentencję" // Tekst, który pojawi się, gdy pole jest puste
        style={{
          width: "300px",
          height: "40px",
          fontSize: "16px",
          padding: "10px",
        }} // Style inline, które rozszerzają pole tekstowe i poprawiają jego wygląd
      />

      {/* Przycisk do zapisania wartości z pola tekstowego w localStorage */}
      <button onClick={handleSave}>Zapisz Sentencję</button>
    </div>
  );
}

export default App;
