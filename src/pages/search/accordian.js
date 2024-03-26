import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import { Collapse, theme } from 'antd';
import PriceSlider from './priceSlider';
// const text = `
//   A dog is a type of domesticated animal.
  
// `;
const getItems = (panelStyle) => [
  {
    key: '1',
    label: 'Front Line Price',
    children: 
    <>
    <PriceSlider/>
    </>
    ,
    style: panelStyle,
  },

  {
    key: '2',
    label: 'Type',
    children: <>
      <div className="mt-2 filterCard ">
        <div className="styled-input-container styled-input--square">
          <div className="styled-input-single">
            <input
              type="checkbox"
              name="fieldset-2"
              id="checkbox2-example-five"
            />
            <label htmlFor="checkbox2-example-five">Wine</label>
          </div>
        </div>
        <div className="styled-input-container styled-input--square">
          <div className="styled-input-single">
            <input
              type="checkbox"
              name="fieldset-2"
              id="checkbox2-example-three"
            />
            <label htmlFor="checkbox2-example-three">Spirits</label>
          </div>
        </div>
      </div>
    </>,
    style: panelStyle,
  },

  {
    key: '3',
    label: 'Category',
    children:
      <>
        <div className="mt-2 filterCard ">
          <div className="styled-input-container styled-input--square">
            <div className="styled-input-single">
              <input
                type="checkbox"
                name="fieldset-2"
                id="Tequila"
              />
              <label htmlFor="Tequila">Tequila</label>
            </div>
          </div>
          <div className="styled-input-container styled-input--square">
            <div className="styled-input-single">
              <input
                type="checkbox"
                name="fieldset-2"
                id="Vodka"
              />
              <label htmlFor="Vodka">Vodka</label>
            </div>
          </div>
          <div className="styled-input-container styled-input--square">
            <div className="styled-input-single">
              <input
                type="checkbox"
                name="fieldset-2"
                id="Whiskey"
              />
              <label htmlFor="Whiskey">Whiskey</label>
            </div>
          </div>
          <div className="styled-input-container styled-input--square">
            <div className="styled-input-single">
              <input
                type="checkbox"
                name="fieldset-2"
                id="Rum"
              />
              <label htmlFor="Rum">Rum</label>
            </div>
          </div>
          <div className="styled-input-container styled-input--square">
            <div className="styled-input-single">
              <input
                type="checkbox"
                name="fieldset-2"
                id="Gin"
              />
              <label htmlFor="Gin">Gin</label>
            </div>
          </div>
          <div className="styled-input-container styled-input--square">
            <div className="styled-input-single">
              <input
                type="checkbox"
                name="fieldset-2"
                id="Mezcal"
              />
              <label htmlFor="Mezcal">Mezcal</label>
            </div>
          </div>
          <div className="styled-input-container styled-input--square">
            <div className="styled-input-single">
              <input
                type="checkbox"
                name="fieldset-2"
                id="Brandy"
              />
              <label htmlFor="Brandy">Brandy</label>
            </div>
          </div>
          <div className="styled-input-container styled-input--square">
            <div className="styled-input-single">
              <input
                type="checkbox"
                name="fieldset-2"
                id="Cognac"
              />
              <label htmlFor="Cognac">Cognac</label>
            </div>
          </div>
          <div className="styled-input-container styled-input--square">
            <div className="styled-input-single">
              <input
                type="checkbox"
                name="fieldset-2"
                id="Drink"
              />
              <label htmlFor="Drink">Ready to Drink</label>
            </div>
          </div>
          <div className="styled-input-container styled-input--square">
            <div className="styled-input-single">
              <input
                type="checkbox"
                name="fieldset-2"
                id="cLiqueur"
              />
              <label htmlFor="Liqueur">Liqueur</label>
            </div>
          </div>
          <div className="styled-input-container styled-input--square">
            <div className="styled-input-single">
              <input
                type="checkbox"
                name="fieldset-2"
                id="Other"
              />
              <label htmlFor="Other">Other</label>
            </div>
          </div>
        </div>
      </>,
    style: panelStyle,
  },

  {
    key: '4',
    label: 'Varietal',
    children:
      <>
         <div className="mt-2 filterCard ">
            <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Chardonnay"
                  />
                  <label htmlFor="Chardonnay">Chardonnay</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Cabernet"
                  />
                  <label htmlFor="Cabernet">Cabernet Sauvignon</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Pinot"
                  />
                  <label htmlFor="Pinot">Pinot Noir</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Merlot"
                  />
                  <label htmlFor="Merlot">Merlot</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Pinot Grigio"
                  />
                  <label htmlFor="Pinot Grigio">Pinot Grigio</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Sauvignon"
                  />
                  <label htmlFor="Sauvignon">Sauvignon Blanc</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Malbec"
                  />
                  <label htmlFor="Malbec">Malbec</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Cabernet Franc"
                  />
                  <label htmlFor="Cabernet Franc">Cabernet Franc</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Syrah"
                  />
                  <label htmlFor="Syrah">Syrah</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Sangiovese"
                  />
                  <label htmlFor="Sangiovese">Sangiovese</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Riesling"
                  />
                  <label htmlFor="Riesling">Riesling</label>
                </div>
              </div>
            </div>
      </>,
    style: panelStyle,
  },
  {
    key: '5',
    label: 'Country',
    children:
      <>
          <div className="mt-2 filterCard ">
            <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="United States"
                  />
                  <label htmlFor="United States">United States</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="France"
                  />
                  <label htmlFor="France">France</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Italy"
                  />
                  <label htmlFor="Italy">Italy</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Spain"
                  />
                  <label htmlFor="Spain">Spain</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Mexico"
                  />
                  <label htmlFor="Mexico">Mexico</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Scotland"
                  />
                  <label htmlFor="Scotland">Scotland</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Portugal"
                  />
                  <label htmlFor="Portugal">Portugal</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Argentina"
                  />
                  <label htmlFor="Argentina">Argentina</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Ireland"
                  />
                  <label htmlFor="Ireland">Ireland</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="New Zealand"
                  />
                  <label htmlFor="New Zealand">New Zealand</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="South Africa"
                  />
                  <label htmlFor="South Africa">South Africa</label>
                </div>
              </div>
            </div>
      </>,
    style: panelStyle,
  },
  {
    key: '6',
    label: 'Region',
    children:
      <>
          <div className="mt-2 filterCard ">
            <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="California"
                  />
                  <label htmlFor="California">California</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Burgundy"
                  />
                  <label htmlFor="Burgundy">Burgundy</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Jalisco"
                  />
                  <label htmlFor="Jalisco">Jalisco</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Oregon"
                  />
                  <label htmlFor="Oregon">Oregon</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Kentucky"
                  />
                  <label htmlFor="Kentucky">Kentucky   </label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Washington State"
                  />
                  <label htmlFor="Washington State">Washington State</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Mendoza"
                  />
                  <label htmlFor="Mendoza">Mendoza</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Piedmont"
                  />
                  <label htmlFor="Piedmont">Piedmont</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Champagne"
                  />
                  <label htmlFor="Champagne">Champagne</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Tuscany"
                  />
                  <label htmlFor="Tuscany">Tuscany</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Oaxaca"
                  />
                  <label htmlFor="Oaxaca">Oaxaca</label>
                </div>
              </div>
            </div>
      </>,
    style: panelStyle,
  },
  {
    key: '7',
    label: 'Brands',
    children:
      <>
           <div className="mt-2 filterCard ">
            <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="United States"
                  />
                  <label htmlFor="United States">United States</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="France"
                  />
                  <label htmlFor="France">France</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Italy"
                  />
                  <label htmlFor="Italy">Italy</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Spain"
                  />
                  <label htmlFor="Spain">Spain</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Mexico"
                  />
                  <label htmlFor="Mexico">Mexico</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Scotland"
                  />
                  <label htmlFor="Scotland">Scotland</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Portugal"
                  />
                  <label htmlFor="Portugal">Portugal</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Argentina"
                  />
                  <label htmlFor="Argentina">Argentina</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Ireland"
                  />
                  <label htmlFor="Ireland">Ireland</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="New Zealand"
                  />
                  <label htmlFor="New Zealand">New Zealand</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="South Africa"
                  />
                  <label htmlFor="South Africa">South Africa</label>
                </div>
              </div>
            </div>
      </>,
    style: panelStyle,
  },

  {
    key: '8',
    label: 'Supplier',
    children:
      <>
           <div className="mt-2 filterCard ">
            <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="United States"
                  />
                  <label htmlFor="United States">United States</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="France"
                  />
                  <label htmlFor="France">France</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Italy"
                  />
                  <label htmlFor="Italy">Italy</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Spain"
                  />
                  <label htmlFor="Spain">Spain</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Mexico"
                  />
                  <label htmlFor="Mexico">Mexico</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Scotland"
                  />
                  <label htmlFor="Scotland">Scotland</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Portugal"
                  />
                  <label htmlFor="Portugal">Portugal</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Argentina"
                  />
                  <label htmlFor="Argentina">Argentina</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Ireland"
                  />
                  <label htmlFor="Ireland">Ireland</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="New Zealand"
                  />
                  <label htmlFor="New Zealand">New Zealand</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="South Africa"
                  />
                  <label htmlFor="South Africa">South Africa</label>
                </div>
              </div>
            </div>
      </>,
    style: panelStyle,
  },

  {
    key: '9',
    label: 'Divisions',
    children:
      <>
           <div className="mt-2 filterCard ">
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Emerald"
                  />
                  <label htmlFor="Emerald">Emerald</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Sapphire"
                  />
                  <label htmlFor="Sapphire">Sapphire</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Pearl"
                  />
                  <label htmlFor="Pearl">Pearl</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Transatlantic"
                  />
                  <label htmlFor="Transatlantic">Transatlantic</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Signature "
                  />
                  <label htmlFor="Signature ">Signature </label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Coastal Pacific"
                  />
                  <label htmlFor="Coastal Pacific">Coastal Pacific</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Atlantic"
                  />
                  <label htmlFor="Atlantic">Atlantic</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Craft"
                  />
                  <label htmlFor="Craft">Craft</label>
                </div>
              </div>
            </div>
      </>,
    style: panelStyle,
  },

  {
    key: '10',
    label: 'Innovations',
    children:
      <>
        <div className="mt-2 filterCard ">
            <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Organic"
                  />
                  <label htmlFor="Organic">Organic</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Sustainable"
                  />
                  <label htmlFor="Sustainable">Sustainable</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Biodynamic"
                  />
                  <label htmlFor="Biodynamic">Biodynamic</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Vegan"
                  />
                  <label htmlFor="Vegan">Vegan</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Ready to Drink  "
                  />
                  <label htmlFor="Ready to Drink  ">Ready to Drink  </label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Non-Alcoholic"
                  />
                  <label htmlFor="Non-Alcoholic">Non-Alcoholic</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Low-Alcohol"
                  />
                  <label htmlFor="Low-Alcohol">Low-Alcohol</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Carbon Neutral"
                  />
                  <label htmlFor="Carbon Neutral">Carbon Neutral</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Additive Free"
                  />
                  <label htmlFor="Additive Free">Additive Free</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Low Calorie"
                  />
                  <label htmlFor="Low Calorie">Low Calorie</label>
                </div>
              </div>
              <div className="styled-input-container styled-input--square">
                <div className="styled-input-single">
                  <input
                    type="checkbox"
                    name="fieldset-2"
                    id="Minority Owned"
                  />
                  <label htmlFor="Minority Owned">Minority Owned</label>
                </div>
              </div>
            </div>
      </>,
    style: panelStyle,
  },
  
];
const AccordianArea = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 12,
    border: 'none',
  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
      style={{
        background: token.colorBgContainer,
      }}
      items={getItems(panelStyle)}
    />
  );
};
export default AccordianArea;