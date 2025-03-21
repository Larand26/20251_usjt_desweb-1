const App = () => {
<<<<<<< HEAD
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
=======
  //kebab case
  // const background-color-outra-palavra;
  return (
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label htmlFor='nome' style={{display: 'block', marginBottom: 4}}>
        Nome:
      </label>
      <input type='text' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', outline: 'none', width: '100%', borderRadius: 8}}/>
      <button type='button' style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', borderRadius: 8, width: '100%', color: 'white', cursor: 'pointer', borderStyle: 'none'}}>
        Enviar
      </button>
    </div>
  )
}

export default App

//pessoa que se chama Ana e tem 17 anos
// {
//   nome: 'Ana',
//   idade: 17
// }




// function oi(nome){
//   console.log("oi, " + nome)
//   return nome[0]
// }
// console.log('Seu nome começa com ' + oi('Ana'))

// //arrow functions
// // const oi = () => {}
// // const oi = () => {console.log('oi')}
// // const t = 2
// // const oi = nome => console.log ('Oi, ' + nome)
// const dobro = n => 2 * n
// const resultado = dobro(5)
// oi()
>>>>>>> 72bd02779d0183c6693b5040c960f35ec683a900
