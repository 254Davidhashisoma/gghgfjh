function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  <div class="container">
  <h1>Address book</h1>
   <div class="row">
    <div class="col-md-6">
      <h2>Add a contact:</h2>
      <form id="new-contact">
        <div class="form-group">
          <label for="new-first-name">First name</label>
          <input type="text" class="form-control" id="new-first-name">
        </div>
        <div class="form-group">
          <label for="new-last-name">Last name</label>
          <input type="text" class="form-control" id="new-last-name">
        </div>

        <button type="submit" class="btn">Add</button>
      </form>

      <h2>Contacts:</h2>
      <ul id="contacts">

      </ul>
    </div>
  </div>
</div>