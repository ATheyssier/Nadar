import React, { Component } from 'react'
import Collection from '../Components/Collection.js'

export default class Scanner extends Component {
render() {
  return(
  <div className="Les_Nadars_par_les_Nadars">
    <p> Déhambulez dans l’exposition et rester attentif :
      votre téléphone se mettra à vibrer à
      proximiter des oeuvres avec un point d’intérêt.. à vous de jouer
    </p>
    <hr/>
    < Collection />
    < Collection />

  </div>
);}
}
