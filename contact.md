---
layout: form
form-id: contact-form
---

Contact
=======

<form id="contact-form" method="post" action="https://us-central1-winged-comfort-298422.cloudfunctions.net/contact-form">
  <!-- <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response"> -->
  <!-- <input type="hidden" name="action" value="validate_captcha"> -->
  <label for="first-name">First Name:</label><br>
  <input type="text" id="first-name" id="first-name"><br>
  <label for="last-name">Last Name:</label><br>
  <input type="text" id="last-name" id="last-name"><br>
  <label for="email">Email:</label><br>
  <input type="text" id="email" id="email"><br>
  <label for="comment">Comment:</label><br>
  <textarea name="comment"></textarea><br>
  <button>Submit</button>
  <!-- <button class="g-recaptcha" -->
  <!--         data-sitekey="6LetGwQaAAAAAHWY2Wuv469KoCvz_Fn0pm868xfe" -->
  <!--         data-callback='onSubmit' -->
  <!--         data-action='submit'>Submit</button> -->
</form>
