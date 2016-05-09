/* eslint-env browser */

import people from './people';

var peopleSection = document.querySelector('#people');

function renderPerson(person) {
  return `
    <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone">
              <div class="mdl-card__supporting-text">
                <h4>${person.name}</h4>
                this is where we'll talk about a particular character. maybe provide some short info to grab
                your attention.
              </div>
              <div class="mdl-card__actions">
                <a href="#" class="mdl-button">learn more</a>
              </div>
            </div>
            <div class="mdl-card mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone cover-image"
              style="background-image: url('/images/people/person_${person.id}.jpg');">
            </div>
          </section>`;
}

function renderHTML() {
  return people.map(renderPerson).join('\n');
}

function renderPeopleList() {
  peopleSection.innerHTML = renderHTML();

}

export default renderPeopleList;