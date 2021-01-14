---
layout: form
page-title: Contact the National Union of the Homeless
title: Contact
form-id: contact-form
script: |
  function onSubmit(token){
    document.getElementById("{{ form-id }}").submit();
  }
  document.forms['{{ form-id }}'].addEventListener('submit', (event) => {
    event.preventDefault();
    // TODO: do something here to show user that form is being submitted
    fetch(event.target.action, {
      method: 'POST',
      body: new URLSearchParams(new FormData(event.target))
    }).then((resp) => {
      console.log(resp)
      return resp.text()
    }).then((body) => {
      console.log("SERVER: " + body)
      return body
    }).catch((error) => {
      alert("ERROR: " + error)
    });
  });
---

Contact the National Union of the Homeless.

<span class="construction">
<i class="fas fa-wrench"></i> Under Construction <i class="fas fa-wrench"></i>
</span>

In the mean time you can email us at <a href="mailto:2020nuh@gmail.com">2020nuh@gmail.com</a>.

<form style="opacity:30%;" id="contact-form">
  <label for="fname">First Name:</label><br>
  <input type="text" id="fname" name="fname" disabled><br>
  <label for="lname">Last Name:</label><br>
  <input type="text" id="lname" name="lname" disabled><br>
  <label for="email">Email:</label><br>
  <input type="text" id="email" name="email" disabled><br>
  <label for="content">Content:</label><br>
  <textarea name="content" rows="10" cols="72" disabled></textarea><br>
  <button>Submit</button>
  <!-- <button class="g-recaptcha" -->
  <!--         data-sitekey="6LetGwQaAAAAAHWY2Wuv469KoCvz_Fn0pm868xfe" -->
  <!--         data-callback='onSubmit' -->
  <!--         data-action='submit'>Submit</button> -->
</form>
