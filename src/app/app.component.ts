import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-sky',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  perForm: FormGroup

  ngOnInit() {
    this.perForm = new FormGroup({
      email:  new FormControl(''),
      tel:  new FormControl(null),
      password:  new FormControl(null)
    })
  }

  metodSubmit() {
    console.log('perForm', this.perForm);
    const fp = (this.perForm.value)
    console.log('fp', fp);
  }
}
