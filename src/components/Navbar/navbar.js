import $ from 'jquery';
import './navbar.scss';

const initNavbar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand">Lego Man Builder</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto pr-4">
        
        <li class="nav-item dropdown mr-4">
          <button class="btn btn-dark dropdown-toggle" type="button" id="headsDropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Head
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="headsChoices"></div>
        </li>

        <li class="nav-item dropdown mr-4">
          <button class="btn btn-dark dropdown-toggle" type="button" id="torsosDropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Torso
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="torsosChoices"></div>
        </li>

        <li class="nav-item dropdown mr-4">
          <button class="btn btn-dark dropdown-toggle" type="button" id="torsosDropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Legs
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="legsChoices"></div>
        </li>

      </ul>
    </div>
  </nav>
  `;
  $('#navbar').html(domString);
};

export default initNavbar;
