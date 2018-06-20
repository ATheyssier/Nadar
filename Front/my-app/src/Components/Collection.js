import React, { Component } from 'react'
import image1 from  '../images/Nadar-Sarah-Bernhardt.jpg'
import image2 from '../images/point-dinterrogation.jpg'
import './Collection.css'

export default class Collection extends Component {
render() {
  return(
<div className='Collection'>
  <h3>Les Nadars par les Nadars</h3>
  <table>
    <tr>
      <th></th>
    </tr>
    <tr>
      <td><img src={image1} alt='Nadar-Sarah-Bernhardt'/></td>
      <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
      <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
      <td><img className='img2' src={image2} alt='point d_interrogation'/></td>
    </tr>
  </table>
  <input className='button' type='button' value='UTILISER LE SCAN'/>
</div>
);}
}
