---
layout: form
form-id: contact-form
---

Contact the National Union of the Homeless
==========================================

<form id="contact-form" method="post" action="https://us-central1-winged-comfort-298422.cloudfunctions.net/contact-form">
  <label for="fname">First Name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last Name:</label><br>
  <input type="text" id="lname" name="lname"><br>
  <label for="email">Email:</label><br>
  <input type="text" id="email" name="email"><br>
  <label for="content">Content:</label><br>
  <textarea name="content" rows="10" cols="72"></textarea><br>
  <!-- <button>Submit</button> -->
  <button class="g-recaptcha"
          data-sitekey="6LetGwQaAAAAAHWY2Wuv469KoCvz_Fn0pm868xfe"
          data-callback='onSubmit'
          data-action='submit'>Submit</button>
</form>
