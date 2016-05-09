/* eslint-env browser */

import people from './people.json';

var peopleSection = document.querySelector('#people');

function renderPeopleList() {

  var card = `
    <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
              <div class="mdl-card__supporting-text">
                <h4>Name of Character</h4>
                This is where we'll talk about a particular character. Maybe provide some short info to grab
                your attention.
              </div>
              <div class="mdl-card__actions">
                <a href="#" class="mdl-button">This will do something cool</a>
              </div>
            </div>
          </section>`;

  peopleSection.innerHTML = card + card + card;

}

export default renderPeopleList;