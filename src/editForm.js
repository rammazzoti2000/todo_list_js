class EditForm {
  static render(index) {
    const form = document.createElement('div');
    form.innerHTML = `
      <form class="w-50 container-fluid collapse to-do-list-form" id="collapseItems${index}">
        <div class="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input type="text" class="form-control title bangau" id="exampleFormControlInput1" placeholder="title">
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea class="form-control text bangau" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="container-fluid w-100 px-0">
          <div class="row d-flex align-items-baseline w-100 justify-content-between mx-0 pr-3">
            <div class="form-group col-6 px-0">
              <label for="exampleFormControlSelect1">Priority</label>
              <select class="form-control priority" id="exampleFormControlSelect1">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div class="form-group row col-6 pr-0">
              <label for="example-date-input" class="col-2 col-form-label">Date</label>
              <input class="form-control date bangau" type="date" value="2011-08-19" id="example-date-input">
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" data-toggle="collapse" href="#collapseItems${index}">Submit</button>
      </form>
    `;
    return form;
  }
}

export default EditForm;
