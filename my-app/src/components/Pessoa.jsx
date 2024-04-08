function Pessoa({ foto, nome, idade, profissao }) {
  return (
    <div className="fundo">
      <img src={foto} alt={nome} />
      <h2>Nome: {nome}</h2>
      <p> Idade: {idade}</p>
      <p>Profissao: {profissao}</p>
    </div>
  );
}

export default Pessoa;
