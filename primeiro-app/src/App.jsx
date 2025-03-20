const App = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "768px",
        display: "flex",
        flexDirection: "column",
        background: "#e9e9e9",
        padding: "12px",
        borderRadius: "12px",
        fontFamily: "font-family: Arial",
      }}
    >
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        placeholder="Victor de brito Laranjeira"
        style={{
          outline: "none",
          padding: "8px",
          border: "none",
          margin: "5px 0",
          borderRadius: "8px",
        }}
      />
      <button
        style={{
          background: "#8a2be2",
          color: "#fff",
          fontWeight: "bolder",
          cursor: "pointer",
          padding: "8px",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Enviar
      </button>
    </div>
  );
};
export default App;
