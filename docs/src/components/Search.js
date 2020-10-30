import React from 'react';

const Search = (props) => {

  return (
    <div className="Search">
      <form>
        <input type="text" placeholder="Skriv inn på stasjonsnavn..." value={props.text} onChange={props.onChange} />
        <button type="submit" onClick={props.onClick}>Søk</button>
      </form>
      <p>Søkeresultater for <b>{props.word}</b> ...</p>
    </div>
  );
}

export default Search;