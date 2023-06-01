import React from "react";

function Footer() {
  return (

    <footer>
      <div class="row primary">
        <div class="column about">

          <h2>About Us</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

        </div>

        <div class="column links">
          <h2>Company</h2>

          <ul>

            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>

        </div>


        <div class="column links">
          <h2>Resources</h2>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
          </ul>
        </div>

      </div>

      <div class="copy">
        <p>Copyright &copy; 2022 FooterApp</p>
      </div>
    </footer>


  );
}

export default Footer;