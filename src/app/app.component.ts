import {Component, OnInit,} from '@angular/core';
import {HttpClient} from '@angular/common/http';

    export  interface InTodo {
        completed: boolean
        title: string
        id?: number
    }

@Component({
  selector: 'app-sky',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    perForm: FormGroup

    ngOnInit() {
        this.perForm = new FormGroup({
            email: new FormControl('', [
                Validators.email,
                Validators.required]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(4)]),

            address: new FormGroup({
                country: new FormControl('ru'),
                city: new FormControl('', Validators.required)
            })
        })
    }

    metodSubmit() {
        if (this.perForm.valid) {
            console.log('perForm', this.perForm);
            const fp = (this.perForm.value)
            console.log('fp', fp);
        }
    }

    metod() {
        return [
            { abr: 'ru', name: 'Россия', capital: 'Москва'},
            { abr: 'ua', name: 'Украина', capital: 'Киев'},
            { abr: 'by', name: 'Беларусь', capital: 'Минск'}
        ]
    }
    setStrana() {
        // const perSetGorod = {
        //     ru: 'Moscow',
        //     by: 'Минск'
        // }
        const perKluch = this.perForm.get('address').get('country').value
        const perGorod = this.metod ()
            .filter( ( perAny1 ) => perAny1.abr === perKluch)
            .map( perAny22 => perAny22.capital )

        this.perForm.patchValue({address: { city: perGorod + '!!!!' }})
    }

    changeGor() {
        this.setStrana();
    }

